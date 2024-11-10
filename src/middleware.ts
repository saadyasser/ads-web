// middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextRequestWithAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(request: NextRequestWithAuth) {
    const token = await getToken({ req: request });
    console.log("🚀 ~ middleware ~ token:", token);
    const isAuth = !!token;
    const isVerified = token?.isEmailVerified === true;
    const isPublisher = token?.user.role === "publisher";
    const path = request.nextUrl.pathname;

    // Paths accessible to anyone
    const publicPaths = [
      "/",
      "/search",
      "/categories",
      "/product",
      "/profile",
      "/publisher/profile",
      "/forgot-password",
      "/privacy-policy",
      "/terms",
      "/cart",
      "/favorites",
    ];

    // Paths only for guests (non-authenticated users)
    const guestPaths = ["/login", "/sign-up"];

    // Paths for authenticated users (both verified and non-verified)
    const authPaths = ["/downloads", "/profile", "/user/profile"];

    // Paths only for verified users
    const verifiedPaths = ["/my-downloads", "/checkout"];

    // Paths only for publishers
    const publisherPaths = ["/manage-products", "/statistics", "/earnings"];

    // Handle guest-only paths
    if (guestPaths.some((p) => path.startsWith(p)) && isAuth) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Handle auth-required paths
    if (authPaths.some((p) => path.startsWith(p)) && !isAuth) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Handle verification-required paths
    if (verifiedPaths.some((p) => path.startsWith(p)) && !isVerified) {
      return NextResponse.redirect(new URL("/user-verification", request.url));
    }

    if (["/user-verification"].some((p) => path.startsWith(p)) && isVerified) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Handle publisher-only paths
    if (publisherPaths.some((p) => path.startsWith(p)) && !isPublisher) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => true, // We'll handle authorization in the middleware function
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
