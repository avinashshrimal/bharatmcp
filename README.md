# BharatMCP

India's MCP registry for AI Skills, Agents & Servers.

Discover, install, and publish MCP Servers, AI Skills, Agents and Workflows. 312+ servers indexed. Open source.

## Features

- **312+ MCP Servers** indexed from GitHub and curated sources
- **20 India MCPs** — Zerodha, Razorpay, Zomato, Swiggy, BrowserStack + community
- **32 Recipes** — Copy-paste MCP combinations that solve real problems
- **12 Automation Tools** — With risk-level disclaimers
- **Full API** — Free, no auth required for reads
- **CLI Tool** — Search and discover from your terminal
- **Agent Discovery** — `/agent.txt` and `/.well-known/mcp.json` for AI agents

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Figtree font
- Deployed on Vercel (Mumbai region)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run scrape     # Re-scrape MCP data from GitHub
```

## CLI

```bash
npm install -g bharatmcp
bharatmcp search "razorpay"
bharatmcp trending
bharatmcp india
```

## API

```
GET /api/v1/projects      — List all projects
GET /api/v1/search?q=     — Search
GET /api/v1/trending      — Trending MCPs
GET /api/v1/categories    — Categories
GET /api/v1/stats         — Registry stats
```

## License

MIT
