import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function APIDocsPage() {
  return (
    <>
      <Navbar />

      <main className="relative z-[1] pt-14">
        {/* Hero */}
        <section className="border-b border-[var(--color-border)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">API Reference</h1>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mb-6">
              The BharatMCP REST API gives you programmatic access to the entire registry. Search projects, fetch metadata, manage stars, submit reviews, and integrate BharatMCP into your own tools.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-[#FF6B00]/10 px-3 py-1 text-xs font-medium text-[#FF6B00]">REST API v1</span>
              <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">JSON responses</span>
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">HTTPS only</span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <h3 className="text-lg font-semibold text-white mb-2">Base URL</h3>
                <code className="text-sm font-mono text-[#FF6B00]">https://api.bharatmcp.in/v1</code>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <h3 className="text-lg font-semibold text-white mb-2">Content Type</h3>
                <code className="text-sm font-mono text-[var(--color-text-secondary)]">application/json</code>
              </div>
            </div>
            <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3">
              <p>All API responses are returned as JSON. Requests that include a body (POST, PUT, PATCH) must send JSON with the <code className="text-[#FF6B00] bg-[#FF6B00]/10 px-1.5 py-0.5 rounded text-xs">Content-Type: application/json</code> header.</p>
              <p>Read endpoints (GET) are publicly accessible without authentication. Write endpoints (POST, PUT, DELETE) require a valid API key.</p>
              <p>The API is versioned via URL path. The current version is <code className="text-[#FF6B00] bg-[#FF6B00]/10 px-1.5 py-0.5 rounded text-xs">v1</code>. Breaking changes will be introduced in new versions only.</p>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Authentication</h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Authenticate requests by including your API key in the <code className="text-[#FF6B00] bg-[#FF6B00]/10 px-1.5 py-0.5 rounded text-xs">Authorization</code> header. You can generate an API key from your dashboard at <code className="text-[#FF6B00] bg-[#FF6B00]/10 px-1.5 py-0.5 rounded text-xs">bharatmcp.in/settings/api-keys</code>.
            </p>
            <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-6 overflow-x-auto">
              <span className="text-[var(--color-text-muted)]"># Include your API key in the Authorization header</span>{'\n'}
              <span className="text-white">curl https://api.bharatmcp.in/v1/projects \</span>{'\n'}
              <span className="text-white">  -H &quot;Authorization: Bearer bmcp_sk_live_abc123def456&quot;</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[var(--color-border)] rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[var(--color-surface)]">
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Access Level</th>
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Auth Required</th>
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Endpoints</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  <tr><td className="px-4 py-3 text-white">Public (read)</td><td className="px-4 py-3 text-green-400">No</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">GET /projects, /search, /categories, /trending, /stats, /creators</td></tr>
                  <tr><td className="px-4 py-3 text-white">Authenticated (write)</td><td className="px-4 py-3 text-[#FF6B00]">Yes</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">POST /projects, /stars, /reviews, /install-event</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Endpoints */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-10">Endpoints</h2>

            {/* GET /v1/projects */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold bg-green-500/15 text-green-400">GET</span>
                <code className="text-sm font-mono text-white">/v1/projects</code>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                List and filter projects in the registry. Supports pagination, category filtering, and sorting.
              </p>
              <h4 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-3">Query Parameters</h4>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border border-[var(--color-border)] rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-[var(--color-surface)]">
                      <th className="text-left px-4 py-2 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Parameter</th>
                      <th className="text-left px-4 py-2 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Type</th>
                      <th className="text-left px-4 py-2 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Default</th>
                      <th className="text-left px-4 py-2 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr><td className="px-4 py-2 text-[#FF6B00] font-mono">page</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">integer</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">1</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">Page number for pagination</td></tr>
                    <tr><td className="px-4 py-2 text-[#FF6B00] font-mono">limit</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">integer</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">20</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">Results per page (max: 100)</td></tr>
                    <tr><td className="px-4 py-2 text-[#FF6B00] font-mono">category</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">string</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">—</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">Filter by category slug</td></tr>
                    <tr><td className="px-4 py-2 text-[#FF6B00] font-mono">type</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">string</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">—</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">Filter by type: mcp, skill, agent, workflow</td></tr>
                    <tr><td className="px-4 py-2 text-[#FF6B00] font-mono">country</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">string</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">—</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">Filter by country of origin</td></tr>
                    <tr><td className="px-4 py-2 text-[#FF6B00] font-mono">sort</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">string</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">trending</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">Sort: trending, newest, stars, installs</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">curl example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-3 overflow-x-auto">
                <span className="text-white">curl &quot;https://api.bharatmcp.in/v1/projects?category=finance&amp;country=india&amp;limit=5&quot;</span>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Response</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-[var(--color-text-secondary)]">{`{
  "data": [
    {
      "slug": "razorpay-mcp",
      "name": "Razorpay MCP",
      "description": "Official Razorpay payment processing MCP server",
      "type": "mcp",
      "category": "finance",
      "stars": 189,
      "installs": 2340,
      "verified": "official",
      "creator": { "username": "razorpay", "avatar": "..." }
    }
  ],
  "meta": {
    "page": 1,
    "limit": 5,
    "total": 42,
    "totalPages": 9
  }
}`}</pre>
              </div>
            </div>

            {/* GET /v1/projects/:slug */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold bg-green-500/15 text-green-400">GET</span>
                <code className="text-sm font-mono text-white">/v1/projects/:slug</code>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Get full details for a specific project by its URL slug. Returns complete metadata including README, install instructions, and version history.
              </p>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">curl example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-3 overflow-x-auto">
                <span className="text-white">curl https://api.bharatmcp.in/v1/projects/razorpay-mcp</span>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Response</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-[var(--color-text-secondary)]">{`{
  "data": {
    "slug": "razorpay-mcp",
    "name": "Razorpay MCP",
    "description": "Official Razorpay payment processing MCP server",
    "longDescription": "Full MCP server for Razorpay...",
    "type": "mcp",
    "category": "finance",
    "country": "india",
    "stars": 189,
    "installs": 2340,
    "verified": "official",
    "version": "1.3.0",
    "license": "MIT",
    "repository": "https://github.com/razorpay/razorpay-mcp",
    "homepage": "https://bharatmcp.in/project/razorpay-mcp",
    "creator": {
      "username": "razorpay",
      "displayName": "Razorpay Engineering",
      "avatar": "https://..."
    },
    "tags": ["payments", "upi", "india", "fintech"],
    "compatibility": ["claude-desktop", "cursor", "vscode"],
    "createdAt": "2025-01-15T10:00:00Z",
    "updatedAt": "2025-05-18T14:30:00Z"
  }
}`}</pre>
              </div>
            </div>

            {/* GET /v1/search */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold bg-green-500/15 text-green-400">GET</span>
                <code className="text-sm font-mono text-white">/v1/search</code>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Full-text search across project names, descriptions, and tags. Returns ranked results with relevance scoring.
              </p>
              <h4 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-3">Query Parameters</h4>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border border-[var(--color-border)] rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-[var(--color-surface)]">
                      <th className="text-left px-4 py-2 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Parameter</th>
                      <th className="text-left px-4 py-2 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Type</th>
                      <th className="text-left px-4 py-2 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Required</th>
                      <th className="text-left px-4 py-2 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr><td className="px-4 py-2 text-[#FF6B00] font-mono">q</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">string</td><td className="px-4 py-2 text-[#FF6B00]">Yes</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">Search query string</td></tr>
                    <tr><td className="px-4 py-2 text-[#FF6B00] font-mono">type</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">string</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">No</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">Filter results by type</td></tr>
                    <tr><td className="px-4 py-2 text-[#FF6B00] font-mono">limit</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">integer</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">No</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">Max results (default: 20, max: 50)</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">curl example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-3 overflow-x-auto">
                <span className="text-white">curl &quot;https://api.bharatmcp.in/v1/search?q=payment&amp;type=mcp&amp;limit=10&quot;</span>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">JavaScript example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-[var(--color-text-secondary)]">{`const res = await fetch(
  "https://api.bharatmcp.in/v1/search?q=payment&type=mcp"
);
const { data, meta } = await res.json();
console.log(\`Found \${meta.total} results\`);`}</pre>
              </div>
            </div>

            {/* GET /v1/categories */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold bg-green-500/15 text-green-400">GET</span>
                <code className="text-sm font-mono text-white">/v1/categories</code>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                List all available categories with their project counts and metadata.
              </p>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Response</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-[var(--color-text-secondary)]">{`{
  "data": [
    { "slug": "finance", "name": "Finance & Payments", "count": 42, "icon": "💰" },
    { "slug": "dev-tools", "name": "Developer Tools", "count": 38, "icon": "🛠️" },
    { "slug": "health", "name": "Healthcare", "count": 15, "icon": "🏥" },
    { "slug": "education", "name": "Education", "count": 12, "icon": "📚" },
    { "slug": "government", "name": "Government & Public", "count": 9, "icon": "🏛️" }
  ]
}`}</pre>
              </div>
            </div>

            {/* GET /v1/trending */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold bg-green-500/15 text-green-400">GET</span>
                <code className="text-sm font-mono text-white">/v1/trending</code>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Get trending projects based on recent installs, stars, and activity over the past 7 days.
              </p>
              <h4 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-3">Query Parameters</h4>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border border-[var(--color-border)] rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-[var(--color-surface)]">
                      <th className="text-left px-4 py-2 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Parameter</th>
                      <th className="text-left px-4 py-2 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Type</th>
                      <th className="text-left px-4 py-2 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Default</th>
                      <th className="text-left px-4 py-2 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    <tr><td className="px-4 py-2 text-[#FF6B00] font-mono">period</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">string</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">7d</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">Time period: 24h, 7d, 30d</td></tr>
                    <tr><td className="px-4 py-2 text-[#FF6B00] font-mono">limit</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">integer</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">10</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">Number of results (max: 50)</td></tr>
                    <tr><td className="px-4 py-2 text-[#FF6B00] font-mono">category</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">string</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">—</td><td className="px-4 py-2 text-[var(--color-text-secondary)]">Filter by category</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">curl example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <span className="text-white">curl &quot;https://api.bharatmcp.in/v1/trending?period=7d&amp;limit=5&quot;</span>
              </div>
            </div>

            {/* GET /v1/stats */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold bg-green-500/15 text-green-400">GET</span>
                <code className="text-sm font-mono text-white">/v1/stats</code>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Get registry-wide statistics including total projects, installs, creators, and categories.
              </p>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Response</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-[var(--color-text-secondary)]">{`{
  "data": {
    "totalProjects": 256,
    "totalInstalls": 48200,
    "totalCreators": 142,
    "totalCategories": 17,
    "totalStars": 12450,
    "projectsThisWeek": 12,
    "installsThisWeek": 3200,
    "updatedAt": "2025-05-20T12:00:00Z"
  }
}`}</pre>
              </div>
            </div>

            {/* GET /v1/creators */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold bg-green-500/15 text-green-400">GET</span>
                <code className="text-sm font-mono text-white">/v1/creators</code>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                List all creators on the registry. Supports pagination and sorting by project count or total installs.
              </p>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">curl example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <span className="text-white">curl &quot;https://api.bharatmcp.in/v1/creators?sort=installs&amp;limit=10&quot;</span>
              </div>
            </div>

            {/* GET /v1/creators/:username */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold bg-green-500/15 text-green-400">GET</span>
                <code className="text-sm font-mono text-white">/v1/creators/:username</code>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Get a creator&apos;s profile including their published projects, total installs, and bio.
              </p>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Response</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-[var(--color-text-secondary)]">{`{
  "data": {
    "username": "razorpay",
    "displayName": "Razorpay Engineering",
    "bio": "Official Razorpay MCP servers",
    "avatar": "https://...",
    "verified": true,
    "totalProjects": 3,
    "totalInstalls": 4200,
    "totalStars": 312,
    "projects": [
      { "slug": "razorpay-mcp", "name": "Razorpay MCP", "stars": 189 },
      { "slug": "razorpay-subscriptions-mcp", "name": "Razorpay Subscriptions", "stars": 82 }
    ],
    "joinedAt": "2025-01-10T00:00:00Z"
  }
}`}</pre>
              </div>
            </div>

            {/* POST /v1/projects */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold bg-yellow-500/15 text-yellow-400">POST</span>
                <code className="text-sm font-mono text-white">/v1/projects</code>
                <span className="text-xs text-[#FF6B00] bg-[#FF6B00]/10 px-2 py-0.5 rounded">Auth required</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Submit a new project to the registry. The project will be reviewed before being listed publicly.
              </p>
              <h4 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-3">Request Body</h4>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-4 overflow-x-auto">
                <pre className="text-[var(--color-text-secondary)]">{`{
  "name": "My Weather MCP",
  "slug": "my-weather-mcp",
  "description": "Weather data for 500+ Indian cities",
  "type": "mcp",
  "category": "utilities",
  "country": "india",
  "repository": "https://github.com/user/my-weather-mcp",
  "tags": ["weather", "india", "cities"],
  "version": "1.0.0",
  "license": "MIT"
}`}</pre>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">curl example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-[var(--color-text-secondary)]">{`curl -X POST https://api.bharatmcp.in/v1/projects \\
  -H "Authorization: Bearer bmcp_sk_live_abc123" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My Weather MCP",
    "slug": "my-weather-mcp",
    "description": "Weather data for Indian cities",
    "type": "mcp",
    "category": "utilities"
  }'`}</pre>
              </div>
            </div>

            {/* POST /v1/stars */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold bg-yellow-500/15 text-yellow-400">POST</span>
                <code className="text-sm font-mono text-white">/v1/stars</code>
                <span className="text-xs text-[#FF6B00] bg-[#FF6B00]/10 px-2 py-0.5 rounded">Auth required</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Toggle a star on a project. If already starred, removes the star. Returns the new star state.
              </p>
              <h4 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-3">Request Body</h4>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-4 overflow-x-auto">
                <pre className="text-[var(--color-text-secondary)]">{`{ "projectSlug": "razorpay-mcp" }`}</pre>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Response</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-[var(--color-text-secondary)]">{`{ "starred": true, "totalStars": 190 }`}</pre>
              </div>
            </div>

            {/* POST /v1/reviews */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold bg-yellow-500/15 text-yellow-400">POST</span>
                <code className="text-sm font-mono text-white">/v1/reviews</code>
                <span className="text-xs text-[#FF6B00] bg-[#FF6B00]/10 px-2 py-0.5 rounded">Auth required</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Submit a review for a project. One review per user per project. Rating is 1-5.
              </p>
              <h4 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-3">Request Body</h4>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-4 overflow-x-auto">
                <pre className="text-[var(--color-text-secondary)]">{`{
  "projectSlug": "razorpay-mcp",
  "rating": 5,
  "title": "Excellent integration",
  "body": "Works perfectly with Claude Desktop. Setup took 2 minutes."
}`}</pre>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Response</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-[var(--color-text-secondary)]">{`{
  "data": {
    "id": "rev_abc123",
    "rating": 5,
    "title": "Excellent integration",
    "body": "Works perfectly with Claude Desktop...",
    "author": { "username": "priya-dev" },
    "createdAt": "2025-05-20T15:30:00Z"
  }
}`}</pre>
              </div>
            </div>

            {/* POST /v1/install-event */}
            <div className="mb-0">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold bg-yellow-500/15 text-yellow-400">POST</span>
                <code className="text-sm font-mono text-white">/v1/install-event</code>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Track an install event. Used by the CLI to report installs for analytics. No authentication required but rate-limited.
              </p>
              <h4 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-3">Request Body</h4>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-[var(--color-text-secondary)]">{`{
  "projectSlug": "razorpay-mcp",
  "version": "1.3.0",
  "client": "cli",
  "os": "linux",
  "nodeVersion": "20.11.0"
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Limiting */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Rate Limiting</h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
              The API enforces rate limits to ensure fair usage. Limits are applied per IP for unauthenticated requests and per API key for authenticated requests.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-[var(--color-border)] rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[var(--color-surface)]">
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Tier</th>
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Limit</th>
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Window</th>
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  <tr><td className="px-4 py-3 text-white">Unauthenticated</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">100 requests</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">per minute</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Per IP address</td></tr>
                  <tr><td className="px-4 py-3 text-white">Authenticated (Free)</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">1,000 requests</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">per minute</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Per API key</td></tr>
                  <tr><td className="px-4 py-3 text-white">Authenticated (Pro)</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">5,000 requests</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">per minute</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Per API key</td></tr>
                  <tr><td className="px-4 py-3 text-white">Enterprise</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Custom</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">—</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Per API key</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Rate Limit Headers</h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Every response includes headers indicating your current rate limit status:
            </p>
            <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
              <span className="text-[var(--color-text-muted)]">X-RateLimit-Limit: </span><span className="text-white">1000</span>{'\n'}
              <span className="text-[var(--color-text-muted)]">X-RateLimit-Remaining: </span><span className="text-white">994</span>{'\n'}
              <span className="text-[var(--color-text-muted)]">X-RateLimit-Reset: </span><span className="text-white">1716220800</span>
            </div>
          </div>
        </section>

        {/* Error Codes */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Error Codes</h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
              The API uses standard HTTP status codes. Error responses include a JSON body with a machine-readable code and human-readable message.
            </p>
            <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-6 overflow-x-auto">
              <pre className="text-[var(--color-text-secondary)]">{`{
  "error": {
    "code": "not_found",
    "message": "Project 'nonexistent-mcp' not found",
    "status": 404
  }
}`}</pre>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[var(--color-border)] rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[var(--color-surface)]">
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Status</th>
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Code</th>
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">400</td><td className="px-4 py-3 text-white">bad_request</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Invalid request body or query parameters</td></tr>
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">401</td><td className="px-4 py-3 text-white">unauthorized</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Missing or invalid API key</td></tr>
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">403</td><td className="px-4 py-3 text-white">forbidden</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Insufficient permissions for this action</td></tr>
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">404</td><td className="px-4 py-3 text-white">not_found</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Resource does not exist</td></tr>
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">409</td><td className="px-4 py-3 text-white">conflict</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Resource already exists (duplicate slug)</td></tr>
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">429</td><td className="px-4 py-3 text-white">rate_limited</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Too many requests — slow down</td></tr>
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">500</td><td className="px-4 py-3 text-white">internal_error</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Something went wrong on our end</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pagination */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Pagination</h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
              List endpoints return paginated results. Use the <code className="text-[#FF6B00] bg-[#FF6B00]/10 px-1.5 py-0.5 rounded text-xs">page</code> and <code className="text-[#FF6B00] bg-[#FF6B00]/10 px-1.5 py-0.5 rounded text-xs">limit</code> query parameters to navigate through results.
            </p>
            <h3 className="text-lg font-semibold text-white mb-3">Offset-based Pagination</h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Standard pagination using page numbers. Suitable for most use cases.
            </p>
            <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-8 overflow-x-auto">
              <span className="text-[var(--color-text-muted)]"># Page 1 (first 20 results)</span>{'\n'}
              <span className="text-white">GET /v1/projects?page=1&amp;limit=20</span>{'\n\n'}
              <span className="text-[var(--color-text-muted)]"># Page 2 (results 21-40)</span>{'\n'}
              <span className="text-white">GET /v1/projects?page=2&amp;limit=20</span>{'\n\n'}
              <span className="text-[var(--color-text-muted)]"># Response meta object:</span>{'\n'}
              <pre className="text-[var(--color-text-secondary)]">{`{
  "meta": {
    "page": 2,
    "limit": 20,
    "total": 256,
    "totalPages": 13,
    "hasNext": true,
    "hasPrev": true
  }
}`}</pre>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Cursor-based Pagination</h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              For large datasets or real-time feeds, use cursor-based pagination for consistent results. Pass the <code className="text-[#FF6B00] bg-[#FF6B00]/10 px-1.5 py-0.5 rounded text-xs">cursor</code> from the previous response.
            </p>
            <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
              <span className="text-[var(--color-text-muted)]"># First request</span>{'\n'}
              <span className="text-white">GET /v1/projects?limit=20&amp;cursor=start</span>{'\n\n'}
              <span className="text-[var(--color-text-muted)]"># Next page (use cursor from previous response)</span>{'\n'}
              <span className="text-white">GET /v1/projects?limit=20&amp;cursor=eyJpZCI6MTIzfQ</span>{'\n\n'}
              <span className="text-[var(--color-text-muted)]"># Response includes next cursor:</span>{'\n'}
              <pre className="text-[var(--color-text-secondary)]">{`{
  "meta": {
    "cursor": "eyJpZCI6MTQzfQ",
    "hasMore": true
  }
}`}</pre>
            </div>
          </div>
        </section>

        {/* SDKs & Libraries */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">SDKs &amp; Libraries</h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Official client libraries for popular languages. These handle authentication, pagination, rate limiting, and error handling for you.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">JavaScript / TypeScript</h3>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-3 overflow-x-auto">
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-[#FF6B00]">npm install @bharatmcp/sdk</span>
                </div>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-[var(--color-text-secondary)]">{`import { BharatMCP } from "@bharatmcp/sdk";

const client = new BharatMCP({
  apiKey: "bmcp_sk_live_abc123" // optional for read-only
});

// Search projects
const results = await client.projects.search("payment", {
  type: "mcp",
  country: "india",
  limit: 10
});

// Get a specific project
const project = await client.projects.get("razorpay-mcp");

// Star a project (requires auth)
await client.stars.toggle("razorpay-mcp");

// List trending
const trending = await client.trending.list({ period: "7d" });`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Python</h3>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-3 overflow-x-auto">
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-[#FF6B00]">pip install bharatmcp</span>
                </div>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-[var(--color-text-secondary)]">{`from bharatmcp import BharatMCPClient

client = BharatMCPClient(api_key="bmcp_sk_live_abc123")

# Search projects
results = client.projects.search("payment", type="mcp", country="india")

# Get project details
project = client.projects.get("razorpay-mcp")
print(f"{project.name} — {project.stars} stars")

# List categories
categories = client.categories.list()
for cat in categories:
    print(f"{cat.name}: {cat.count} projects")`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webhooks */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Webhooks (Coming Soon)</h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Subscribe to real-time events from the registry. Get notified when projects are published, updated, or starred.
            </p>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Planned Events</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-center gap-2"><span className="text-[#FF6B00]">•</span> <code className="text-xs bg-[#0a0e1a] px-1.5 py-0.5 rounded">project.published</code> — A new project is published to the registry</li>
                <li className="flex items-center gap-2"><span className="text-[#FF6B00]">•</span> <code className="text-xs bg-[#0a0e1a] px-1.5 py-0.5 rounded">project.updated</code> — A project version is updated</li>
                <li className="flex items-center gap-2"><span className="text-[#FF6B00]">•</span> <code className="text-xs bg-[#0a0e1a] px-1.5 py-0.5 rounded">project.starred</code> — A project receives a new star</li>
                <li className="flex items-center gap-2"><span className="text-[#FF6B00]">•</span> <code className="text-xs bg-[#0a0e1a] px-1.5 py-0.5 rounded">review.created</code> — A new review is submitted</li>
                <li className="flex items-center gap-2"><span className="text-[#FF6B00]">•</span> <code className="text-xs bg-[#0a0e1a] px-1.5 py-0.5 rounded">install.recorded</code> — An install event is tracked</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
