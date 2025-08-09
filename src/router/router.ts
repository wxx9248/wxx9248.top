import { Hono } from "hono";
import { createWellKnownRouter } from "./well-known";
import { createDefaultRouter } from "./default";

export function createRouters(app: Hono<{ Bindings: CloudflareBindings }>) {
  createWellKnownRouter(app);
  createDefaultRouter(app);
}
