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
app.listen(process.env.PORT || 4000, () => {
  console.log("started listening on port 4000");
});
