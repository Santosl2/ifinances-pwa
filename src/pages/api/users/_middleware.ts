import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { headers } = req;
  const authHeader = headers.get("Authorization");

  if (!authHeader) {
    return NextResponse.next();
  }

  return NextResponse.json("Unauthorized");
}
