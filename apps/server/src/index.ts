import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import cors from "cors";
import { appRouter } from "./app-router";
import { createContext } from "./trpc";

const app = express();
app.use(cors());

app.use(
  "/api/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

//port not defined as of now
app.listen(process.env.SERVER_PORT, () => {
  console.log(`started listening on port ${process.env.SERVER_PORT}`);
});
