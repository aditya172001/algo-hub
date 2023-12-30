import { userRouter } from "./routers/user";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  user: userRouter,
  getHello: publicProcedure.query((opts) => {
    return {
      greeting: `hello aditya`,
    };
  }),
});

export type AppRouter = typeof appRouter;
