import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | null = null;

if (!prisma) {
  prisma = new PrismaClient();
}

export default prisma!;
