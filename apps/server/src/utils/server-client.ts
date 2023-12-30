import { appRouter } from "../app-router";
import { createContext } from "../trpc";

export const serverTrpc = appRouter.createCaller(createContext());
