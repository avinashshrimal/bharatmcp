import { type NextRequest } from "next/server";
import { TRENDING_PROJECTS } from "@/lib/all-projects";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const limit = Math.min(Number(searchParams.get("limit") || "6"), 20);

  return Response.json({ data: TRENDING_PROJECTS.slice(0, limit) });
}
