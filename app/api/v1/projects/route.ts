import { type NextRequest } from "next/server";
import { ALL_PROJECTS } from "@/lib/all-projects";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const page = Math.max(Number(searchParams.get("page") || "1"), 1);
  const limit = Math.min(Math.max(Number(searchParams.get("limit") || "20"), 1), 100);
  const category = searchParams.get("category");
  const country = searchParams.get("country");
  const type = searchParams.get("type");
  const sort = searchParams.get("sort") || "trending";

  let results = [...ALL_PROJECTS];

  // Filter
  if (category) results = results.filter(p => p.category.slug === category);
  if (country) results = results.filter(p => p.country === country);
  if (type) results = results.filter(p => p.type === type);

  // Sort
  switch (sort) {
    case 'newest':
      results.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      break;
    case 'stars':
      results.sort((a, b) => b.star_count - a.star_count);
      break;
    case 'downloads':
      results.sort((a, b) => b.download_count - a.download_count);
      break;
    default:
      results.sort((a, b) => (b.download_count * b.rating) - (a.download_count * a.rating));
  }

  const total = results.length;
  const offset = (page - 1) * limit;
  const data = results.slice(offset, offset + limit);

  return Response.json({
    data,
    meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
  });
}
