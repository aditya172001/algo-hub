import { router, serverProcedure, publicProcedure } from "../trpc";
import { z } from "zod";
import { exec } from "child_process";
import { findMyQuestion, findMyTemplate } from "problems";
import {
  removeComments,
  updateDbOnCodeSubmit,
  getUserId_QuestionId_CurrentQuestionStatus,
} from "../helpers";
import { TokenType } from "types";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import { getUserProfileData } from "../helpers/get-user-profile-data";
import { $Enums } from "database";
const asyncExec = promisify(exec);

export const userRouter = router({
  // get user profile info
  getProfile: serverProcedure.query(async (opts) => {
    const { prisma, session } = opts.ctx;
    if (!session || !session.user?.email)
      return {
        status: "error" as "error",
        message: "Internal Server Error",
      };

    const data = await getUserProfileData({
      email: session.user.email,
      prisma,
    });
    if (data.dbFetchError) {
      return {
        status: "error" as "error",
        message: "Internal Server Error",
      };
    }
    return {
      status: "success" as "success",
      message: "no msg",
      name: data.name,
      email: data.email,
      image: data.image,
      totalQuestions: data.totalQuestions,
      userSolvedQuestions: data.userSolvedQuestions,
    };
  }),
  // get brief detail about all questions
  getAllQuestions: serverProcedure.query(async (opts) => {
    const { session, prisma } = opts.ctx;
    const email = session.user?.email;

    if (!email || !prisma)
      return { status: "error" as "error", message: "Internal Server Error" };

    let allQuestions;
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) throw new Error("user not found");
      allQuestions = await prisma.question.findMany({
        include: {
          users: {
            where: {
              userId: user.id,
            },
          },
        },
      });
    } catch (error) {
      return { status: "error" as "error", message: "DB Fetch Error" };
    }
    const filteredQuestions = allQuestions.map((ques) => {
      let status: $Enums.StatusType = "ToDo";
      if (ques.users?.length !== 0 && ques.users[0]?.status!)
        status = ques.users[0].status!;

      return {
        quesNumber: ques.quesNumber,
        title: ques.title,
        difficulty: ques.difficulty,
        status,
      };
    });
    return { status: "success" as "success", filteredQuestions };
  }),
  // get complete detail of a single quesiton
  getQuestion: serverProcedure
    .input(z.object({ quesNumber: z.number() }))
    .query(async (opts) => {
      const ques = findMyQuestion(opts.input.quesNumber);

      if (!ques) return null;

      const filteredQues = {
        id: ques.id,
        title: ques.title,
        difficulty: ques.difficulty,
        description: ques.description,
        example: ques.example,
        constraints: ques.constraints,
        followUp: ques.follow_up,
        hints: ques.hints,
        starterCode: ques.starterCode,
      };

      return filteredQues;
    }),
  // submit user code to be tested
  submitSolution: publicProcedure
    .input(
      z.object({
        quesNumber: z.number(),
        userCode: z.string(),
        token: z.string(),
      })
    )
    .output(
      z.object({
        status: z.enum(["success", "error"]),
        message: z.enum([
          "AC",
          "WA",
          "TLE",
          "Internal Server Error",
          "Unauthorized",
        ]),
      })
    )
    .mutation(async (opts) => {
      //check if user is authenticated using jwt token
      const token = jwt.decode(opts.input.token) as TokenType;
      const currentTime = Date.now();
      if (!(token.iat * 1000 < currentTime && currentTime < token.exp * 1000)) {
        return { status: "error", message: "Unauthorized" };
      }

      //if user is valid then fetch associated data from db
      const { email } = token;
      const { prisma } = opts.ctx;
      const { quesNumber, userCode } = opts.input;

      const { dbFetchError, userId, questionId, currentQuestionStatus } =
        await getUserId_QuestionId_CurrentQuestionStatus({
          email,
          quesNumber,
          prisma,
        });
      if (dbFetchError)
        return { status: "error", message: "Internal Server Error" };

      //if user is authorized and corresponding data in db is present and valid then proceed
      const template = findMyTemplate(quesNumber);
      if (!template)
        return { status: "error", message: "Internal Server Error" };
      const completeCode = template.replace("USER_SUBMITTED_CODE", userCode);

      const filteredCode = removeComments(completeCode);
      const containerName = "mycontainer";
      const dockerCommand = `docker run --name ${containerName} --rm -e USER_INPUT='${filteredCode}' adityakumar172001/algo-hub-code-execution-engine`;

      try {
        const { stdout, stderr } = await asyncExec(dockerCommand, {
          timeout: 6000,
          killSignal: "SIGKILL",
        });
        if (stdout.includes("true")) {
          //update db if ques is solved and not updated in db
          if (currentQuestionStatus !== "Solved") {
            const isSaved = await updateDbOnCodeSubmit({
              userId,
              questionId,
              status: "Solved",
              prisma,
            });
            if (!isSaved) {
              return { status: "error", message: "Internal Server Error" };
            }
          }
          return { status: "success", message: "AC" };
        } else {
          // if wong answer and ques not attempted previously then update db
          if (currentQuestionStatus === "ToDo") {
            const isSaved = await updateDbOnCodeSubmit({
              userId,
              questionId,
              status: "Attempted",
              prisma,
            });
            if (!isSaved) {
              return { status: "error", message: "Internal Server Error" };
            }
          }
          return { status: "error", message: "WA" };
        }
      } catch (error) {
        console.log("error in trycatch:", error);
        exec(`docker stop ${containerName}`);
        if (currentQuestionStatus === "ToDo") {
          const isSaved = await updateDbOnCodeSubmit({
            userId,
            questionId,
            status: "Attempted",
            prisma,
          });
          if (!isSaved) {
            return { status: "error", message: "Internal Server Error" };
          }
        }
        return { status: "error", message: "TLE" };
      }
    }),
});
