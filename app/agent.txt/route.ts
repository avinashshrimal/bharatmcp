export async function GET() {
  const content = `# BharatMCP Agent Discovery
# https://bharatmcp.in/agent.txt
# Last updated: 2025-05-31

## What is this?
BharatMCP is India's MCP registry. AI agents can query this API to discover and install MCP servers.

## API Base URL
https://bharatmcp.in/api/v1

## Available Endpoints

### Search for MCPs
GET /api/v1/search?q={query}&type={mcp|skill|agent|workflow}&country={india|global}&limit={n}
Returns: JSON array of matching MCP servers with install commands

### Get trending MCPs
GET /api/v1/trending?limit={n}&period={7d|30d}
Returns: Top MCPs by installs and stars

### Get MCP details
GET /api/v1/projects/{slug}
Returns: Full metadata including install command, features, compatibility

### List categories
GET /api/v1/categories
Returns: All categories with project counts

### Registry stats
GET /api/v1/stats
Returns: Total projects, installs, creators

## How to use
1. Search: GET /api/v1/search?q=payment&country=india
2. Pick a result from the "data" array
3. Use the "repo_url" or install command to set up the MCP

## India-specific MCPs
For Indian services (Razorpay, Zerodha, IRCTC, UPI, etc.):
GET /api/v1/projects?country=india

## Categories
developer-tools, finance, payments, communication, ai-ml, cloud-infra, data-analytics, security, automation, e-commerce, government, productivity

## Total Registry
312+ MCP servers indexed
20 curated India MCPs (5 official, 15 community)
30 featured global MCPs
12 automation tools

## Contact
API issues: api@bharatmcp.in
General: hello@bharatmcp.in
GitHub: https://github.com/bharatmcp
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
