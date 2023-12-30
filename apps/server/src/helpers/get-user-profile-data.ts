import { DefaultArgs } from "@prisma/client/runtime/library";
import { Prisma, PrismaClient } from "database";
export interface QuestionType {
  easy: number;
  medium: number;
  hard: number;
}
export interface GetUserProfileReturnType {
  dbFetchError: boolean;
  name: string;
  email: string;
  image: string | null;
  totalQuestions: QuestionType;
  userSolvedQuestions: QuestionType;
}

export async function getUserProfileData({
  email,
  prisma,
}: {
  email: string;
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
}): Promise<GetUserProfileReturnType> {
  try {
    const userData = await prisma.user.findUnique({
      where: { email },
      include: {
        questions: {
          include: { question: true },
        },
      },
    });

    if (!userData) {
      throw new Error("no user found");
    }
    const userSolvedQuestions = {
      easy:
        userData.questions.filter(
          (ques) =>
            ques.status === "Solved" && ques.question.difficulty === "Easy"
        ).length || 0,
      medium:
        userData.questions.filter(
          (ques) =>
            ques.status === "Solved" && ques.question.difficulty === "Medium"
        ).length || 0,
      hard:
        userData.questions.filter(
          (ques) =>
            ques.status === "Solved" && ques.question.difficulty === "Hard"
        ).length || 0,
    };
    const questionsData = await prisma.question.findMany();
    const totalQuestions = {
      easy:
        questionsData.filter((ques) => ques.difficulty === "Easy").length || 0,
      medium:
        questionsData.filter((ques) => ques.difficulty === "Medium").length ||
        0,
      hard:
        questionsData.filter((ques) => ques.difficulty === "Hard").length || 0,
    };

    return {
      dbFetchError: false,
      name: userData.name,
      email: userData.email,
      image: userData.image,
      totalQuestions,
      userSolvedQuestions,
    };
  } catch (error) {
    return {
      dbFetchError: true,
      name: "",
      email: "",
      image: null,
      totalQuestions: { easy: 0, medium: 0, hard: 0 },
      userSolvedQuestions: { easy: 0, medium: 0, hard: 0 },
    };
  }
}
