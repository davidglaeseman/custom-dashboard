import { auth } from "@/lib/auth/server";
import { NextRequest } from "next/server";
const authMiddleware = auth.middleware({
  loginUrl: "/auth/sign-in",
});
export default function middleware(request: NextRequest) {
  if (request.headers.has("Next-Action")) {
    return;
  }
  return authMiddleware(request);
}

export const config = {
  matcher: [
    "/account/:path*",
    "/accounts/:path*",
    "/transactions/:path*",
    "/cards/:path*",
    "/payments/:path*",
    "/tasks/:path*",
  ],
};
