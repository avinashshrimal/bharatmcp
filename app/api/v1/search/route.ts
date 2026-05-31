import { type NextRequest } from "next/server";
import { ALL_PROJECTS } from "@/lib/all-projects";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const query = (searchParams.get("q") || "").toLowerCase().trim();
  const type = searchParams.get("type");
  const limit = Math.min(Number(searchParams.get("limit") || "20"), 50);

  let results = ALL_PROJECTS;

  if (query) {
    results = results.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags.some(t => t.toLowerCase().includes(query)) ||
      p.creator.username.toLowerCase().includes(query)
    );
  }

  if (type) results = results.filter(p => p.type === type);

  return Response.json({
    data: results.slice(0, limit),
    meta: { page: 1, limit, total: results.length },
  });
}
