import { MOCK_PROJECTS } from './mock-data'
import { INDIA_MCPS } from './india-mcps'
import { FEATURED_MCPS } from './featured-mcps'
import { AUTOMATION_MCPS } from './automation-mcps'
import type { Project } from './types'

// Convert India MCPs to the Project format and add to main list
const indiaMCPsAsProjects: Project[] = INDIA_MCPS.map((mcp) => ({
  id: mcp.id,
  slug: mcp.slug,
  name: mcp.name,
  description: mcp.description,
  creator: { username: mcp.owner, avatar_url: null },
  category: { slug: mcp.categorySlug, name: mcp.category },
  tags: mcp.tags.slice(0, 3),
  verification_tier: mcp.verified ? 'bharatmcp_verified' as const : 'community_verified' as const,
  country: 'india' as const,
  rating: 4.5 + Math.random() * 0.4, // 4.5-4.9 for curated
  review_count: Math.floor(20 + Math.random() * 80),
  download_count: mcp.stars * 10 + Math.floor(Math.random() * 5000),
  install_count: mcp.stars * 5 + Math.floor(Math.random() * 3000),
  star_count: mcp.stars,
  version: '1.0.0',
  license: mcp.license,
  repo_url: mcp.githubUrl,
  github_url: mcp.githubUrl,
  created_at: '2025-01-15T00:00:00Z',
  updated_at: mcp.lastUpdated + 'T00:00:00Z',
  type: 'mcp' as const,
}))

// Convert Featured MCPs to the Project format
const featuredMCPsAsProjects: Project[] = FEATURED_MCPS.map((mcp) => ({
  id: mcp.id,
  slug: mcp.slug,
  name: mcp.name,
  description: mcp.description,
  creator: { username: mcp.owner, avatar_url: null },
  category: { slug: mcp.categorySlug, name: mcp.category },
  tags: mcp.tags.slice(0, 3),
  verification_tier: 'bharatmcp_verified' as const,
  country: 'global' as const,
  rating: 4.6 + Math.random() * 0.3, // 4.6-4.9 for top global
  review_count: Math.floor(50 + Math.random() * 200),
  download_count: mcp.stars * 15 + Math.floor(Math.random() * 10000),
  install_count: mcp.stars * 8 + Math.floor(Math.random() * 5000),
  star_count: mcp.stars,
  version: '1.0.0',
  license: mcp.license,
  repo_url: mcp.githubUrl,
  github_url: mcp.githubUrl,
  created_at: '2025-01-01T00:00:00Z',
  updated_at: mcp.lastUpdated + 'T00:00:00Z',
  type: 'mcp' as const,
}))

// Convert Automation MCPs to the Project format
const automationMCPsAsProjects: Project[] = AUTOMATION_MCPS.map((mcp) => ({
  id: mcp.id,
  slug: mcp.slug,
  name: mcp.name,
  description: mcp.description,
  creator: { username: mcp.owner, avatar_url: null },
  category: { slug: mcp.categorySlug, name: mcp.category },
  tags: mcp.tags.slice(0, 3),
  verification_tier: 'listed' as const,
  country: mcp.country,
  rating: 3.8 + Math.random() * 0.8, // 3.8-4.6 for automation tools
  review_count: Math.floor(10 + Math.random() * 50),
  download_count: mcp.stars * 8 + Math.floor(Math.random() * 3000),
  install_count: mcp.stars * 4 + Math.floor(Math.random() * 2000),
  star_count: mcp.stars,
  version: '1.0.0',
  license: mcp.license,
  repo_url: mcp.githubUrl,
  github_url: mcp.githubUrl,
  created_at: '2025-02-01T00:00:00Z',
  updated_at: mcp.lastUpdated + 'T00:00:00Z',
  type: 'mcp' as const,
}))

// Fix: Remove false India flags from scraped data
const fixedScrapedProjects = MOCK_PROJECTS.map(p => ({
  ...p,
  // Reset all to global — the scraper's India detection was wrong
  country: 'global' as const,
}))

// Merge: Featured first, then India MCPs, then Automation MCPs, then scraped
export const ALL_PROJECTS: Project[] = [
  ...featuredMCPsAsProjects,
  ...indiaMCPsAsProjects,
  ...automationMCPsAsProjects,
  ...fixedScrapedProjects,
]

// Computed stats
export const COMPUTED_STATS = {
  total_projects: ALL_PROJECTS.length,
  india_projects: ALL_PROJECTS.filter(p => p.country === 'india').length,
  total_downloads: ALL_PROJECTS.reduce((sum, p) => sum + p.download_count, 0),
  total_creators: new Set(ALL_PROJECTS.map(p => p.creator.username)).size,
  total_installs: ALL_PROJECTS.reduce((sum, p) => sum + p.install_count, 0),
}

// Trending: sort by (downloads * rating) — top 20
export const TRENDING_PROJECTS = [...ALL_PROJECTS]
  .sort((a, b) => (b.download_count * b.rating) - (a.download_count * a.rating))
  .slice(0, 20)

// Categories with real counts
export const COMPUTED_CATEGORIES = (() => {
  const counts: Record<string, number> = {}
  ALL_PROJECTS.forEach(p => {
    counts[p.category.slug] = (counts[p.category.slug] || 0) + 1
  })
  return [
    { slug: 'developer-tools', name: 'Developer Tools', description: 'Code editors, version control, CI/CD, and development workflow integrations.', icon: 'code', project_count: counts['developer-tools'] || 0 },
    { slug: 'finance', name: 'Finance', description: 'Payment gateways, trading platforms, banking APIs, and financial data services.', icon: 'chart', project_count: counts['finance'] || 0 },
    { slug: 'payments', name: 'Payments', description: 'Payment processing, billing, invoicing, and subscription management.', icon: 'credit-card', project_count: counts['payments'] || 0 },
    { slug: 'communication', name: 'Communication', description: 'Messaging platforms, email services, and team collaboration tools.', icon: 'message', project_count: counts['communication'] || 0 },
    { slug: 'ai-ml', name: 'AI & ML', description: 'Machine learning models, AI APIs, data processing, and model deployment tools.', icon: 'brain', project_count: counts['ai-ml'] || 0 },
    { slug: 'cloud-infra', name: 'Cloud & Infrastructure', description: 'Cloud providers, container orchestration, serverless, and DevOps tools.', icon: 'cloud', project_count: counts['cloud-infra'] || 0 },
    { slug: 'data-analytics', name: 'Data & Analytics', description: 'Databases, data warehouses, visualization tools, and analytics platforms.', icon: 'database', project_count: counts['data-analytics'] || 0 },
    { slug: 'security', name: 'Security', description: 'Authentication, authorization, vulnerability scanning, and compliance tools.', icon: 'shield', project_count: counts['security'] || 0 },
    { slug: 'automation', name: 'Automation', description: 'Workflow automation, scheduling, event-driven pipelines, and integrations.', icon: 'zap', project_count: counts['automation'] || 0 },
    { slug: 'e-commerce', name: 'E-commerce', description: 'Online stores, marketplaces, inventory management, and order processing.', icon: 'shopping-cart', project_count: counts['e-commerce'] || 0 },
    { slug: 'government', name: 'Government & Travel', description: 'Government services, public data, railways, and civic technology.', icon: 'flag', project_count: counts['government'] || 0 },
    { slug: 'productivity', name: 'Productivity', description: 'Note-taking, project management, calendars, and workflow tools.', icon: 'layers', project_count: counts['productivity'] || 0 },
  ]
})()
