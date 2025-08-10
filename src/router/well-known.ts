import { Hono } from "hono";

export function createWellKnownRouter(
  app: Hono<{ Bindings: CloudflareBindings }>
) {
  app.get("/.well-known/matrix/server", () => {
    return new Response(
      JSON.stringify({
        "m.server": "matrix.wxx9248.top:443"
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  });
  app.get("/.well-known/matrix/client", () => {
    return new Response(
      JSON.stringify({
        "m.homeserver": {
          base_url: "https://matrix.wxx9248.top"
        }
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  });
}
