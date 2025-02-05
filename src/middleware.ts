/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decodeToken } from "./helpers/jwtHelpers";

// define routes that related with authentication
const authRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get("accessToken")?.value;

  // handle if the user not logged in
  if (!accessToken) {
    // allow access to auth routes
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      // redirect to login page
      return NextResponse.redirect(
        new URL(
          pathname ? `/login?redirect=${pathname}` : "/login",
          request.url
        )
      );
    }
  }

  // handle if the user logged in
  let decodedToken = null;

  decodedToken = decodeToken(accessToken) as any;
  const role = decodedToken?.role;

  // allow access to dashboard routes based on user role
  if (role === "admin" && pathname.includes("/admin-dashboard")) {
    return NextResponse.next();
  }
  if (role === "driver" && pathname.includes("/driver-dashboard")) {
    return NextResponse.next();
  }
  if (role === "user" && pathname.includes("/dashboard")) {
    return NextResponse.next();
  }
  // redirect to home page if the user tries to access unauthorized routes or authRoutes
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:page*",
    "/admin-dashboard/:page*",
    "/driver-dashboard/:page*",
  ],
};
