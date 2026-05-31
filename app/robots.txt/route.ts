export async function GET() {
  const content = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://bharatmcp.in/sitemap.xml

# AI Agent Discovery
# See /agent.txt for machine-readable registry info
# See /.well-known/mcp.json for MCP discovery standard
`
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
