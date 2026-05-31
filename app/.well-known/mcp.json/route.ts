import { COMPUTED_STATS, COMPUTED_CATEGORIES } from '@/lib/all-projects'

export async function GET() {
  const discovery = {
    name: "BharatMCP",
    description: "India's largest MCP registry for AI Skills, Agents & Servers",
    version: "1.0.0",
    homepage: "https://bharatmcp.in",
    api: {
      base_url: "https://bharatmcp.in/api/v1",
      endpoints: {
        search: "/search?q={query}",
        projects: "/projects",
        project_detail: "/projects/{slug}",
        trending: "/trending",
        categories: "/categories",
        stats: "/stats",
      },
    },
    stats: COMPUTED_STATS,
    categories: COMPUTED_CATEGORIES.map(c => ({ slug: c.slug, name: c.name, count: c.project_count })),
    features: [
      "312+ MCP servers indexed",
      "India-first curation (20 verified India MCPs)",
      "Official partnerships (Zerodha, Razorpay, Zomato, Swiggy, BrowserStack)",
      "Free API access (no auth for reads)",
      "CLI tool: npm install -g bharatmcp",
    ],
    india_focus: {
      official_partners: ["Zerodha", "Razorpay", "Zomato", "Swiggy", "BrowserStack"],
      categories: ["Finance & Trading", "Payments", "Government", "Travel", "Food & Delivery"],
      total_india_mcps: COMPUTED_STATS.india_projects,
    },
    contact: {
      email: "hello@bharatmcp.in",
      github: "https://github.com/bharatmcp",
    },
  }

  return Response.json(discovery, {
    headers: {
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
