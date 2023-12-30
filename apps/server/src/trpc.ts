import { TRPCError, initTRPC } from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import prisma from "database/prisma/connect";
import { getUserSession } from "utils";

export const createContext = (opts?: CreateExpressContextOptions) => {
  return { prisma };
};
export type Context = ReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;

const isAuthed = middleware(async (opts) => {
  const session = await getUserSession();
  if (!session) throw new TRPCError({ code: "UNAUTHORIZED" });
  return opts.next({
    ctx: {
      ...opts.ctx,
      session,
    },
  });
});

export const serverProcedure = publicProcedure.use(isAuthed);
