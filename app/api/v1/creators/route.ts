import { MOCK_CREATORS } from "@/lib/mock-data";

export async function GET() {
  return Response.json({ data: MOCK_CREATORS });
}
