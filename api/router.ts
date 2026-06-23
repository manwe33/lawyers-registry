import { authRouter } from "./auth-router";
import { applicationRouter } from "./application-router";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  auth: authRouter,
  application: applicationRouter,
});

export type AppRouter = typeof appRouter;
