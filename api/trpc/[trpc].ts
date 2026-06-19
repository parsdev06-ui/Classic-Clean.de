import { createNextApiHandler } from "@trpc/server/adapters/next";
import { COOKIE_NAME } from "../../shared/const";
import { appRouter } from "../../server/routers";
import type { TrpcContext } from "../../server/_core/context";

type ApiResponse = {
  setHeader: (name: string, value: string | string[]) => void;
  clearCookie?: (name: string) => void;
};

function ensureClearCookie(res: ApiResponse) {
  const response = res as ApiResponse & {
    clearCookie?: (name: string) => void;
  };

  response.clearCookie ??= (name: string) => {
    const cookieName = name || COOKIE_NAME;
    res.setHeader(
      "Set-Cookie",
      `${cookieName}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax`
    );
  };

  return response;
}

export default createNextApiHandler({
  router: appRouter,
  createContext({ req, res }) {
    return {
      req: req as unknown as TrpcContext["req"],
      res: ensureClearCookie(res) as unknown as TrpcContext["res"],
      user: null,
    };
  },
});
