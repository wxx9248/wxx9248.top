import { Hono } from "hono";

export function createDefaultRouter(app: Hono<{ Bindings: CloudflareBindings }>) {
  app.get("/*", () => {
    return Response.redirect("https://www.wxx9248.top", 301);
  })
}
