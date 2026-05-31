/**
 * MCP Data Scraper for BharatMCP
 * 
 * Scrapes real MCP server data from:
 * 1. awesome-mcp-servers GitHub README
 * 2. GitHub API search (optional, rate-limited)
 * 
 * Run with: npx tsx scripts/scrape-mcps.ts
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

// ─── Types ───────────────────────────────────────────────────────────────────

interface RawEntry {
  name: string
  url: string
  description: string
  section: string
  subsection: string
}

interface ScrapedMCP {
  name: string
  slug: string
  description: string
  githubUrl: string
  type: 'mcp' | 'skill' | 'agent' | 'workflow'
  category: string
  categorySlug: string
  country: 'india' | 'global'
  verificationTier: 'bharatmcp_verified' | 'community_verified' | 'listed'
  tags: string[]
  owner: string
}

// ─── Constants ───────────────────────────────────────────────────────────────

const AWESOME_MCP_URL = 'https://raw.githubusercontent.com/wong2/awesome-mcp-servers/main/README.md'

const CATEGORY_KEYWORDS: Record<string, { slug: string; keywords: string[] }> = {
  'Developer Tools': {
    slug: 'developer-tools',
    keywords: ['github', 'git', 'code', 'ide', 'editor', 'lint', 'debug', 'compiler', 'terminal', 'vscode', 'vim', 'neovim', 'prettier', 'eslint', 'typescript', 'javascript', 'python', 'rust', 'go', 'java', 'ruby', 'php', 'swift', 'kotlin', 'dart', 'flutter', 'react', 'vue', 'angular', 'svelte', 'next', 'nuxt', 'webpack', 'vite', 'npm', 'yarn', 'pnpm', 'package', 'build', 'test', 'ci', 'cd', 'pipeline', 'devops', 'sdk', 'api', 'rest', 'graphql', 'grpc', 'protobuf', 'swagger', 'openapi', 'postman', 'insomnia', 'curl', 'http', 'websocket', 'regex', 'json', 'yaml', 'toml', 'xml', 'markdown', 'documentation', 'docs', 'readme', 'changelog', 'version', 'semver', 'release', 'deploy', 'hosting', 'vercel', 'netlify', 'heroku', 'railway', 'render', 'fly', 'deno', 'bun', 'node']
  },
  'Payments': {
    slug: 'payments',
    keywords: ['payment', 'stripe', 'razorpay', 'paypal', 'billing', 'invoice', 'subscription', 'checkout', 'upi', 'wallet']
  },
  'Finance': {
    slug: 'finance',
    keywords: ['stock', 'trading', 'finance', 'bank', 'crypto', 'bitcoin', 'ethereum', 'defi', 'nft', 'blockchain', 'investment', 'portfolio', 'market', 'forex', 'commodity', 'mutual fund', 'zerodha', 'nse', 'bse']
  },
  'AI & ML': {
    slug: 'ai-ml',
    keywords: ['ai', 'ml', 'openai', 'llm', 'model', 'hugging', 'anthropic', 'claude', 'gpt', 'gemini', 'ollama', 'langchain', 'embedding', 'vector', 'rag', 'transformer', 'neural', 'deep learning', 'machine learning', 'nlp', 'computer vision', 'image generation', 'stable diffusion', 'midjourney', 'dall-e', 'whisper', 'speech', 'tts', 'stt']
  },
  'Productivity': {
    slug: 'productivity',
    keywords: ['notion', 'calendar', 'task', 'project', 'productivity', 'todo', 'note', 'obsidian', 'roam', 'logseq', 'trello', 'asana', 'jira', 'linear', 'monday', 'clickup', 'airtable', 'spreadsheet', 'excel', 'google sheets', 'docs', 'word', 'pdf', 'office', 'workspace']
  },
  'Communication': {
    slug: 'communication',
    keywords: ['slack', 'email', 'discord', 'chat', 'message', 'telegram', 'whatsapp', 'teams', 'zoom', 'meet', 'video', 'call', 'sms', 'notification', 'push', 'webhook', 'gmail', 'outlook', 'imap', 'smtp']
  },
  'Government': {
    slug: 'government',
    keywords: ['government', 'aadhaar', 'pan', 'gst', 'irctc', 'digilocker', 'npci', 'india gov', 'e-governance', 'civic', 'public service']
  },
  'E-commerce': {
    slug: 'e-commerce',
    keywords: ['shop', 'ecommerce', 'e-commerce', 'store', 'product', 'cart', 'order', 'inventory', 'shopify', 'woocommerce', 'magento', 'amazon', 'flipkart', 'marketplace']
  },
  'Data & Analytics': {
    slug: 'data-analytics',
    keywords: ['database', 'sql', 'mongo', 'redis', 'data', 'analytics', 'postgres', 'mysql', 'sqlite', 'supabase', 'firebase', 'dynamodb', 'cassandra', 'elasticsearch', 'kibana', 'grafana', 'prometheus', 'metrics', 'logging', 'monitoring', 'bigquery', 'snowflake', 'dbt', 'etl', 'pipeline', 'warehouse', 'lake', 'tableau', 'power bi', 'chart', 'visualization', 'dashboard', 'report']
  },
  'Cloud & Infrastructure': {
    slug: 'cloud-infra',
    keywords: ['aws', 'cloud', 'docker', 'kubernetes', 'deploy', 'terraform', 'ansible', 'pulumi', 'cloudflare', 'gcp', 'azure', 'digitalocean', 'linode', 'vultr', 'server', 'vm', 'container', 'orchestration', 'serverless', 'lambda', 'function', 'cdn', 'dns', 'load balancer', 'nginx', 'apache', 'proxy', 'vpn', 'network']
  },
  'Security': {
    slug: 'security',
    keywords: ['security', 'auth', 'scan', 'vulnerability', 'oauth', 'jwt', 'token', 'encryption', 'ssl', 'tls', 'certificate', 'firewall', 'waf', 'ddos', 'penetration', 'pentest', 'audit', 'compliance', 'gdpr', 'soc2', 'iso', 'password', 'mfa', '2fa', 'biometric', 'identity', 'iam', 'rbac', 'acl']
  },
  'Automation': {
    slug: 'automation',
    keywords: ['automation', 'workflow', 'cron', 'schedule', 'trigger', 'zapier', 'ifttt', 'n8n', 'make', 'integromat', 'airflow', 'prefect', 'dagster', 'temporal', 'step function', 'state machine', 'event', 'queue', 'pub/sub', 'kafka', 'rabbitmq', 'sqs', 'sns']
  },
}

const INDIA_KEYWORDS = [
  'zerodha', 'razorpay', 'upi', 'irctc', 'aadhaar', 'pan', 'gst',
  'nse', 'bse', 'india', 'bharat', 'digilocker', 'npci', 'paytm',
  'phonepe', 'cred', 'groww', 'upstox', 'angel', 'swiggy', 'zomato',
  'ola', 'flipkart', 'myntra', 'nykaa', 'meesho', 'dunzo', 'bigbasket',
  'jio', 'airtel', 'vodafone', 'bsnl', 'hdfc', 'icici', 'sbi',
  'kotak', 'axis', 'bajaj', 'tata', 'reliance', 'infosys', 'wipro',
  'tcs', 'hcl', 'tech mahindra', 'delhivery', 'shiprocket'
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60)
}

function classifyType(name: string, description: string): 'mcp' | 'skill' | 'agent' | 'workflow' {
  const text = `${name} ${description}`.toLowerCase()
  if (text.includes('agent') || text.includes('autonomous') || text.includes('assistant')) return 'agent'
  if (text.includes('workflow') || text.includes('pipeline') || text.includes('orchestrat')) return 'workflow'
  if (text.includes('skill') || text.includes('capability') || text.includes('tool')) return 'skill'
  return 'mcp'
}

function classifyCategory(name: string, description: string, section: string): { name: string; slug: string } {
  const text = `${name} ${description} ${section}`.toLowerCase()

  // Check each category's keywords
  let bestMatch = { name: 'Developer Tools', slug: 'developer-tools' }
  let bestScore = 0

  for (const [catName, { slug, keywords }] of Object.entries(CATEGORY_KEYWORDS)) {
    let score = 0
    for (const keyword of keywords) {
      if (text.includes(keyword)) {
        score++
      }
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = { name: catName, slug }
    }
  }

  return bestMatch
}

function isIndian(name: string, description: string): boolean {
  const text = `${name} ${description}`.toLowerCase()
  return INDIA_KEYWORDS.some(keyword => text.includes(keyword))
}

function extractTags(name: string, description: string, section: string): string[] {
  const text = `${name} ${description} ${section}`.toLowerCase()
  const tags: string[] = []

  const tagKeywords: Record<string, string> = {
    'api': 'API',
    'rest': 'REST',
    'graphql': 'GraphQL',
    'websocket': 'WebSocket',
    'real-time': 'Real-time',
    'open source': 'Open Source',
    'self-hosted': 'Self-hosted',
    'cloud': 'Cloud',
    'docker': 'Docker',
    'kubernetes': 'Kubernetes',
    'ai': 'AI',
    'ml': 'ML',
    'llm': 'LLM',
    'database': 'Database',
    'sql': 'SQL',
    'nosql': 'NoSQL',
    'file': 'Files',
    'search': 'Search',
    'monitor': 'Monitoring',
    'log': 'Logging',
    'test': 'Testing',
    'deploy': 'Deployment',
    'ci/cd': 'CI/CD',
    'security': 'Security',
    'auth': 'Auth',
    'payment': 'Payments',
    'email': 'Email',
    'chat': 'Chat',
    'notification': 'Notifications',
    'scraping': 'Scraping',
    'browser': 'Browser',
    'automation': 'Automation',
    'india': 'India',
  }

  for (const [keyword, tag] of Object.entries(tagKeywords)) {
    if (text.includes(keyword) && !tags.includes(tag)) {
      tags.push(tag)
    }
    if (tags.length >= 5) break
  }

  if (tags.length === 0) tags.push('MCP')
  return tags
}

function extractOwner(url: string): string {
  const match = url.match(/github\.com\/([^/]+)/)
  return match ? match[1] : 'community'
}

function generateId(index: number): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let id = 'clx'
  const seed = index * 7 + 42
  for (let i = 0; i < 21; i++) {
    id += chars[(seed * (i + 1) * 13) % chars.length]
  }
  return id
}

function randomInRange(min: number, max: number, seed: number): number {
  // Simple seeded pseudo-random
  const x = Math.sin(seed * 9301 + 49297) * 49297
  const r = x - Math.floor(x)
  return Math.floor(min + r * (max - min))
}

function randomFloat(min: number, max: number, seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297
  const r = x - Math.floor(x)
  return Math.round((min + r * (max - min)) * 10) / 10
}

function randomDate(startYear: number, endYear: number, seed: number): string {
  const x = Math.sin(seed * 9301 + 49297) * 49297
  const r = x - Math.floor(x)
  const start = new Date(startYear, 0, 1).getTime()
  const end = new Date(endYear, 11, 31).getTime()
  const date = new Date(start + r * (end - start))
  return date.toISOString()
}

// ─── Markdown Parser ─────────────────────────────────────────────────────────

function parseAwesomeList(markdown: string): RawEntry[] {
  const entries: RawEntry[] = []
  let currentSection = ''
  let currentSubsection = ''

  const lines = markdown.split('\n')

  for (const line of lines) {
    // Track section headings
    const h2Match = line.match(/^## (.+)/)
    if (h2Match) {
      currentSection = h2Match[1].trim()
      currentSubsection = ''
      continue
    }

    const h3Match = line.match(/^### (.+)/)
    if (h3Match) {
      currentSubsection = h3Match[1].trim()
      continue
    }

    // Parse list items with links
    // Patterns:
    // - [Name](url) - Description
    // - **[Name](url)** - Description
    // - [Name](url): Description
    const linkPattern = /^[-*]\s+\*?\*?\[([^\]]+)\]\(([^)]+)\)\*?\*?\s*[-:–]?\s*(.*)/
    const match = line.match(linkPattern)

    if (match) {
      const [, name, url, description] = match
      
      // Only include entries with GitHub URLs or meaningful URLs
      if (url && name && (url.includes('github.com') || url.includes('gitlab.com') || url.includes('npmjs.com'))) {
        entries.push({
          name: name.trim(),
          url: url.trim(),
          description: description ? description.trim().replace(/\*\*/g, '').replace(/`/g, '') : '',
          section: currentSection,
          subsection: currentSubsection,
        })
      }
    }
  }

  return entries
}

// ─── Main Scraper ────────────────────────────────────────────────────────────

async function scrapeAwesomeMCPs(): Promise<ScrapedMCP[]> {
  console.log('📡 Fetching awesome-mcp-servers README...')
  
  const response = await fetch(AWESOME_MCP_URL)
  if (!response.ok) {
    throw new Error(`Failed to fetch awesome-mcp-servers: ${response.status} ${response.statusText}`)
  }

  const markdown = await response.text()
  console.log(`📄 Fetched ${markdown.length} bytes of markdown`)

  const rawEntries = parseAwesomeList(markdown)
  console.log(`🔍 Parsed ${rawEntries.length} raw entries from markdown`)

  // Deduplicate by URL
  const seen = new Set<string>()
  const uniqueEntries = rawEntries.filter(entry => {
    const key = entry.url.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
  console.log(`✅ ${uniqueEntries.length} unique entries after deduplication`)

  // Convert to ScrapedMCP format
  const mcps: ScrapedMCP[] = uniqueEntries.map(entry => {
    const type = classifyType(entry.name, entry.description)
    const category = classifyCategory(entry.name, entry.description, `${entry.section} ${entry.subsection}`)
    const country = isIndian(entry.name, entry.description) ? 'india' as const : 'global' as const
    const owner = extractOwner(entry.url)

    // Determine verification tier
    let verificationTier: 'bharatmcp_verified' | 'community_verified' | 'listed' = 'listed'
    const sectionLower = entry.section.toLowerCase()
    if (sectionLower.includes('official') || owner === 'modelcontextprotocol') {
      verificationTier = 'community_verified'
    }

    // Clean up name - remove common suffixes
    let cleanName = entry.name
      .replace(/[-_]mcp[-_]?server$/i, '')
      .replace(/[-_]mcp$/i, '')
      .replace(/^mcp[-_]/i, '')
      .replace(/[-_]server$/i, '')
      .trim()

    // Capitalize first letter of each word
    cleanName = cleanName
      .split(/[-_\s]+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    const slug = slugify(entry.name)
    const tags = extractTags(entry.name, entry.description, `${entry.section} ${entry.subsection}`)

    return {
      name: cleanName || entry.name,
      slug: slug || slugify(cleanName),
      description: entry.description || `${cleanName} MCP server integration`,
      githubUrl: entry.url,
      type,
      category: category.name,
      categorySlug: category.slug,
      country,
      verificationTier,
      tags,
      owner,
    }
  })

  return mcps
}

// ─── Output Generator ────────────────────────────────────────────────────────

function generateOutputJSON(mcps: ScrapedMCP[]): void {
  const dataDir = join(process.cwd(), 'data')
  if (!existsSync(dataDir)) {
    mkdirSync(dataDir, { recursive: true })
  }

  const outputPath = join(dataDir, 'mcps.json')
  writeFileSync(outputPath, JSON.stringify(mcps, null, 2))
  console.log(`💾 Saved ${mcps.length} entries to ${outputPath}`)
}

function generateMockData(mcps: ScrapedMCP[]): void {
  // Take up to 250 entries
  const entries = mcps.slice(0, 250)

  const projects = entries.map((mcp, index) => {
    const seed = index + 1
    return {
      id: generateId(index),
      slug: mcp.slug,
      name: mcp.name,
      description: mcp.description,
      creator: { username: mcp.owner, avatar_url: null },
      category: { slug: mcp.categorySlug, name: mcp.category },
      tags: mcp.tags,
      verification_tier: mcp.verificationTier,
      country: mcp.country,
      rating: randomFloat(3.5, 5.0, seed),
      review_count: randomInRange(5, 120, seed * 2),
      download_count: randomInRange(500, 50000, seed * 3),
      install_count: randomInRange(200, 30000, seed * 4),
      star_count: randomInRange(10, 2000, seed * 5),
      version: `${randomInRange(1, 3, seed * 6)}.${randomInRange(0, 9, seed * 7)}.${randomInRange(0, 9, seed * 8)}`,
      license: ['MIT', 'Apache-2.0', 'ISC', 'BSD-3-Clause', 'GPL-3.0'][randomInRange(0, 4, seed * 9)],
      repo_url: mcp.githubUrl,
      github_url: mcp.githubUrl,
      created_at: randomDate(2024, 2024, seed * 10),
      updated_at: randomDate(2025, 2025, seed * 11),
      type: mcp.type,
    }
  })

  // Calculate category counts
  const categoryCounts: Record<string, number> = {}
  for (const p of projects) {
    categoryCounts[p.category.slug] = (categoryCounts[p.category.slug] || 0) + 1
  }

  const categories = [
    { slug: 'developer-tools', name: 'Developer Tools', description: 'Code editors, version control, CI/CD, and development workflow integrations.', icon: 'code' },
    { slug: 'finance', name: 'Finance', description: 'Payment gateways, trading platforms, banking APIs, and financial data services.', icon: 'chart' },
    { slug: 'payments', name: 'Payments', description: 'Payment processing, billing, invoicing, and subscription management.', icon: 'credit-card' },
    { slug: 'communication', name: 'Communication', description: 'Messaging platforms, email services, and team collaboration tools.', icon: 'message' },
    { slug: 'productivity', name: 'Productivity', description: 'Note-taking, project management, calendars, and workflow automation.', icon: 'layers' },
    { slug: 'ai-ml', name: 'AI & ML', description: 'Machine learning models, AI APIs, data processing, and model deployment tools.', icon: 'brain' },
    { slug: 'data-analytics', name: 'Data & Analytics', description: 'Databases, data warehouses, visualization tools, and analytics platforms.', icon: 'database' },
    { slug: 'cloud-infra', name: 'Cloud & Infrastructure', description: 'Cloud providers, container orchestration, serverless, and DevOps tools.', icon: 'cloud' },
    { slug: 'security', name: 'Security', description: 'Authentication, authorization, vulnerability scanning, and compliance tools.', icon: 'shield' },
    { slug: 'automation', name: 'Automation', description: 'Workflow automation, scheduling, event-driven pipelines, and integrations.', icon: 'zap' },
    { slug: 'e-commerce', name: 'E-commerce', description: 'Online stores, marketplaces, inventory management, and order processing.', icon: 'shopping-cart' },
    { slug: 'government', name: 'Government', description: 'UPI, Aadhaar, GST, IRCTC, and other India-specific government and private APIs.', icon: 'flag' },
  ].map(cat => ({
    ...cat,
    project_count: categoryCounts[cat.slug] || 0,
  }))

  // Calculate stats
  const indiaProjects = projects.filter(p => p.country === 'india').length
  const totalDownloads = projects.reduce((sum, p) => sum + p.download_count, 0)
  const totalInstalls = projects.reduce((sum, p) => sum + p.install_count, 0)

  // Extract unique creators
  const creatorMap = new Map<string, typeof projects[0][]>()
  for (const p of projects) {
    const existing = creatorMap.get(p.creator.username) || []
    existing.push(p)
    creatorMap.set(p.creator.username, existing)
  }

  const creators = Array.from(creatorMap.entries())
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 20)
    .map(([username, userProjects], index) => ({
      username,
      display_name: username.charAt(0).toUpperCase() + username.slice(1),
      avatar_url: null,
      bio: `Creator of ${userProjects.length} MCP server${userProjects.length > 1 ? 's' : ''}`,
      project_count: userProjects.length,
      total_downloads: userProjects.reduce((sum, p) => sum + p.download_count, 0),
      total_stars: userProjects.reduce((sum, p) => sum + p.star_count, 0),
      verification_status: index < 5 ? 'verified' as const : 'unverified' as const,
      badges: index < 3 ? ['Top Creator', 'Open Source'] : index < 8 ? ['Open Source'] : [],
      created_at: randomDate(2024, 2024, index * 100),
    }))

  const stats = {
    total_projects: projects.length,
    india_projects: indiaProjects,
    total_downloads: totalDownloads,
    total_creators: creatorMap.size,
    total_installs: totalInstalls,
  }

  // Generate the mock-data.ts file content
  const mockDataContent = `// Auto-generated mock data from real MCP server sources
// Generated by: npx tsx scripts/scrape-mcps.ts
// Source: awesome-mcp-servers (https://github.com/wong2/awesome-mcp-servers)
// Last updated: ${new Date().toISOString()}

import type { Project, Category, Creator, Stats } from './types'

export const MOCK_PROJECTS: Project[] = ${JSON.stringify(projects, null, 2)}

export const MOCK_CATEGORIES: Category[] = ${JSON.stringify(categories, null, 2)}

export const MOCK_CREATORS: Creator[] = ${JSON.stringify(creators, null, 2)}

export const MOCK_STATS: Stats = ${JSON.stringify(stats, null, 2)}
`

  const mockDataPath = join(process.cwd(), 'lib', 'mock-data.ts')
  writeFileSync(mockDataPath, mockDataContent)
  console.log(`📝 Generated mock-data.ts with ${projects.length} projects`)
  console.log(`   Categories: ${categories.filter(c => c.project_count > 0).length} with entries`)
  console.log(`   India projects: ${indiaProjects}`)
  console.log(`   Creators: ${creators.length}`)
  console.log(`   Types: MCP=${projects.filter(p => p.type === 'mcp').length}, Skill=${projects.filter(p => p.type === 'skill').length}, Agent=${projects.filter(p => p.type === 'agent').length}, Workflow=${projects.filter(p => p.type === 'workflow').length}`)
}

// ─── Entry Point ─────────────────────────────────────────────────────────────

async function main() {
  console.log('🚀 BharatMCP Data Scraper')
  console.log('========================\n')

  try {
    // Step 1: Scrape awesome-mcp-servers
    const mcps = await scrapeAwesomeMCPs()

    // Step 2: Save raw data
    generateOutputJSON(mcps)

    // Step 3: Generate mock-data.ts
    generateMockData(mcps)

    console.log('\n✨ Done! Run `npm run build` to verify the build passes.')
  } catch (error) {
    console.error('❌ Scraping failed:', error)
    process.exit(1)
  }
}

main()
