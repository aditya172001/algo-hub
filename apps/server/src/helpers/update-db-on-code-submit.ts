import { DefaultArgs } from "@prisma/client/runtime/library";
import { Prisma, PrismaClient } from "database";

export async function updateDbOnCodeSubmit({
  userId,
  questionId,
  status,
  prisma,
}: {
  userId: string;
  questionId: string;
  status: "Solved" | "Attempted";
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
}): Promise<boolean> {
  try {
    // perform db action
    const newUserQuestionStatus = await prisma.userQuestionStatus.upsert({
      where: {
        userId_questionId: {
          userId,
          questionId,
        },
      },
      update: {
        status,
      },
      create: {
        userId,
        questionId,
        status,
      },
    });
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        questions: {
          connect: {
            userId_questionId: {
              userId,
              questionId,
            },
          },
        },
      },
    });
    await prisma.question.update({
      where: {
        id: questionId,
      },
      data: {
        users: {
          connect: {
            userId_questionId: {
              userId,
              questionId,
            },
          },
        },
      },
    });
    return true;
  } catch (error) {
    return false;
  }
}
