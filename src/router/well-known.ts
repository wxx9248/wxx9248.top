import { Hono } from "hono";

const matrixServer = "https://matrix.wxx9248.top";

export function createWellKnownRouter(
  app: Hono<{ Bindings: CloudflareBindings }>
) {
  app.get("/.well-known/matrix/server", () => {
    return new Response(
      JSON.stringify({
        "m.server": matrixServer
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
          base_url: matrixServer
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
