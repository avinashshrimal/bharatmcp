import { COMPUTED_CATEGORIES } from "@/lib/all-projects";

export async function GET() {
  return Response.json({ data: COMPUTED_CATEGORIES });
}
