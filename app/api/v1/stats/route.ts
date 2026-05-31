import { COMPUTED_STATS } from "@/lib/all-projects";

export async function GET() {
  return Response.json({ data: COMPUTED_STATS });
}
