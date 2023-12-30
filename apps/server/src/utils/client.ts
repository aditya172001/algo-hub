import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../app-router";

export const trpc = createTRPCReact<AppRouter>({});
