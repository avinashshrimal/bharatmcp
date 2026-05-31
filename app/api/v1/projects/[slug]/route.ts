import { ALL_PROJECTS } from "@/lib/all-projects";

export async function GET(
  _request: Request,
  ctx: { params: Promise<{ slug: string }> }
) {
  const { slug } = await ctx.params;

  const project = ALL_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return Response.json(
      { error: { code: "NOT_FOUND", message: "Project not found" } },
      { status: 404 }
    );
  }

  return Response.json({ data: project });
}
