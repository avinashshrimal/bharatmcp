import { MetadataRoute } from 'next'
import { ALL_PROJECTS } from '@/lib/all-projects'
import { INDIA_MCPS } from '@/lib/india-mcps'
import { FEATURED_MCPS } from '@/lib/featured-mcps'
import { AUTOMATION_MCPS } from '@/lib/automation-mcps'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bharatmcp.in'

  // Static pages
  const staticPages = [
    '', '/browse', '/about', '/pricing', '/cli', '/api-docs',
    '/contact', '/blog', '/auth', '/submit', '/search',
    '/category/india', '/automation',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  // India MCP pages
  const indiaPages = INDIA_MCPS.map(mcp => ({
    url: `${baseUrl}/india/${mcp.slug}`,
    lastModified: new Date(mcp.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Featured MCP pages
  const featuredPages = FEATURED_MCPS.map(mcp => ({
    url: `${baseUrl}/mcp/${mcp.slug}`,
    lastModified: new Date(mcp.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Automation pages
  const automationPages = AUTOMATION_MCPS.map(mcp => ({
    url: `${baseUrl}/automation/${mcp.slug}`,
    lastModified: new Date(mcp.lastUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Project pages (top 50 from scraped data)
  const projectPages = ALL_PROJECTS.slice(0, 50).map(p => ({
    url: `${baseUrl}/project/${p.slug}`,
    lastModified: new Date(p.updated_at),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...indiaPages, ...featuredPages, ...automationPages, ...projectPages]
}
