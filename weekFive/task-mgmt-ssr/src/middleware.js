"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const cookie = await cookies();
  const isLogged = cookie.has("token");

  if (!isLogged) {
    return NextResponse.redirect(new URL("/register", request.url));
  }

  const userRole = cookie.get("user-role").value;

  if (
    request.nextUrl.pathname.startsWith("/provider/create") &&
    userRole === "viewer"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/", "/provider/create", "/provider/[id]"],
};
