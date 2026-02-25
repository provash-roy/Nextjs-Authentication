import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      // Dashboard page access korte login thakte hobe
      if (req.nextUrl.pathname.startsWith("/dashboard")) {
        return !!token;
      }
      return true; // baki page public
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
