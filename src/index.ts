import { Hono } from "hono";
import { createRouters } from "./router/router";

const app = new Hono<{ Bindings: CloudflareBindings }>();
createRouters(app);

export default app;
