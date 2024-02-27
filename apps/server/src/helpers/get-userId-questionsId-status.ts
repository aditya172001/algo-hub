import { DefaultArgs } from "@prisma/client/runtime/library";
import { Prisma, PrismaClient } from "database";

export async function getUserId_QuestionId_CurrentQuestionStatus({
  email,
  quesNumber,
  prisma,
}: {
  email: string;
  quesNumber: number;
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
}): Promise<{
  dbFetchError: boolean;
  userId: string;
  questionId: string;
  currentQuestionStatus: "ToDo" | "Solved" | "Attempted";
}> {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    const question = await prisma.question.findUnique({
      where: {
        quesNumber,
      },
    });
    if (!question) {
      return {
        dbFetchError: true,
        userId: "",
        questionId: "",
        currentQuestionStatus: "ToDo",
      };
    }

    const userQuestionRealtion = await prisma.userQuestionStatus.findUnique({
      where: {
        userId_questionId: { userId: user?.id || "", questionId: question.id },
      },
    });
    const currentQuestionStatus = userQuestionRealtion?.status || "ToDo";
    return {
      dbFetchError: false,
      userId: user?.id || "",
      questionId: question.id,
      currentQuestionStatus,
    };
  } catch (error) {
    return {
      dbFetchError: true,
      userId: "",
      questionId: "",
      currentQuestionStatus: "ToDo",
    };
  }
}
