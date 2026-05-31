#!/usr/bin/env node

/**
 * BharatMCP CLI
 * India's MCP registry — search, discover, and install MCP servers
 * 
 * Usage:
 *   bharatmcp search <query>     Search the registry
 *   bharatmcp info <slug>        Get details about an MCP
 *   bharatmcp install <slug>     Install an MCP server
 *   bharatmcp trending           Show trending MCPs
 *   bharatmcp india              Show India-specific MCPs
 *   bharatmcp help               Show this help
 */

const API_BASE = 'https://bharatmcp-cyan.vercel.app/api/v1'
const VERSION = '1.0.0'

// ─── Colors (no dependencies) ────────────────────────────────────────────────

const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  orange: '\x1b[38;5;208m',
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function fetchAPI(path) {
  try {
    const res = await fetch(`${API_BASE}${path}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error(`${c.red}Error:${c.reset} Could not reach BharatMCP API`)
    console.error(`${c.dim}  ${err.message}${c.reset}`)
    console.error(`${c.dim}  Make sure you have internet access${c.reset}`)
    process.exit(1)
  }
}

function truncate(str, len) {
  if (!str) return ''
  return str.length > len ? str.slice(0, len - 1) + '…' : str
}

function padRight(str, len) {
  return (str || '').padEnd(len)
}

function formatStars(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

function tierBadge(tier) {
  if (tier === 'bharatmcp_verified') return `${c.green}✓ verified${c.reset}`
  if (tier === 'community_verified') return `${c.blue}◆ community${c.reset}`
  return `${c.dim}○ listed${c.reset}`
}

// ─── Commands ────────────────────────────────────────────────────────────────

async function cmdSearch(query) {
  if (!query) {
    console.error(`${c.red}Usage:${c.reset} bharatmcp search <query>`)
    console.error(`${c.dim}  Example: bharatmcp search "razorpay"${c.reset}`)
    process.exit(1)
  }

  console.log(`${c.dim}Searching for "${query}"...${c.reset}\n`)

  const { data, meta } = await fetchAPI(`/search?q=${encodeURIComponent(query)}&limit=10`)

  if (!data || data.length === 0) {
    console.log(`${c.yellow}No results found for "${query}"${c.reset}`)
    console.log(`${c.dim}Try a different search term${c.reset}`)
    return
  }

  console.log(`${c.green}Found ${meta.total} results:${c.reset}\n`)

  // Header
  console.log(`  ${c.dim}${padRight('NAME', 28)} ${padRight('TYPE', 8)} ${padRight('STARS', 7)} VERIFIED${c.reset}`)
  console.log(`  ${c.dim}${'─'.repeat(65)}${c.reset}`)

  // Results
  for (const p of data) {
    const name = padRight(truncate(p.name, 26), 28)
    const type = padRight(p.type || 'mcp', 8)
    const stars = padRight('★ ' + formatStars(p.star_count), 7)
    const badge = tierBadge(p.verification_tier)
    console.log(`  ${c.white}${name}${c.reset} ${c.dim}${type}${c.reset} ${c.yellow}${stars}${c.reset} ${badge}`)
  }

  if (meta.total > 10) {
    console.log(`\n  ${c.dim}...and ${meta.total - 10} more. Visit bharatmcp.in for full results${c.reset}`)
  }

  console.log(`\n${c.dim}Run ${c.white}bharatmcp info <name>${c.dim} for details${c.reset}`)
}

async function cmdInfo(slug) {
  if (!slug) {
    console.error(`${c.red}Usage:${c.reset} bharatmcp info <slug>`)
    console.error(`${c.dim}  Example: bharatmcp info razorpay-mcp${c.reset}`)
    process.exit(1)
  }

  const { data, error } = await fetchAPI(`/projects/${encodeURIComponent(slug)}`)

  if (error) {
    console.error(`${c.red}Not found:${c.reset} "${slug}"`)
    console.error(`${c.dim}  Try: bharatmcp search "${slug}"${c.reset}`)
    process.exit(1)
  }

  console.log()
  console.log(`  ${c.orange}${c.bold}${data.name}${c.reset}`)
  console.log(`  ${c.dim}${data.description}${c.reset}`)
  console.log()
  console.log(`  ${c.dim}Author:${c.reset}     ${data.creator?.username || 'unknown'}`)
  console.log(`  ${c.dim}Category:${c.reset}   ${data.category?.name || 'unknown'}`)
  console.log(`  ${c.dim}Type:${c.reset}       ${data.type || 'mcp'}`)
  console.log(`  ${c.dim}Stars:${c.reset}      ${c.yellow}★ ${data.star_count}${c.reset}`)
  console.log(`  ${c.dim}Downloads:${c.reset}  ${data.download_count?.toLocaleString() || '—'}`)
  console.log(`  ${c.dim}License:${c.reset}    ${data.license || '—'}`)
  console.log(`  ${c.dim}Verified:${c.reset}   ${tierBadge(data.verification_tier)}`)
  console.log(`  ${c.dim}Country:${c.reset}    ${data.country === 'india' ? '🇮🇳 India' : '🌐 Global'}`)

  if (data.repo_url) {
    console.log(`  ${c.dim}GitHub:${c.reset}     ${c.cyan}${data.repo_url}${c.reset}`)
  }

  if (data.tags && data.tags.length > 0) {
    console.log(`  ${c.dim}Tags:${c.reset}       ${data.tags.join(', ')}`)
  }

  console.log()
  console.log(`  ${c.dim}View on web: ${c.cyan}https://bharatmcp.in/project/${slug}${c.reset}`)
  console.log()
}

async function cmdInstall(slug) {
  if (!slug) {
    console.error(`${c.red}Usage:${c.reset} bharatmcp install <slug>`)
    process.exit(1)
  }

  const { data, error } = await fetchAPI(`/projects/${encodeURIComponent(slug)}`)

  if (error) {
    console.error(`${c.red}Not found:${c.reset} "${slug}"`)
    process.exit(1)
  }

  console.log()
  console.log(`  ${c.orange}${data.name}${c.reset}`)
  console.log()

  if (data.repo_url) {
    console.log(`  ${c.green}To install this MCP server:${c.reset}`)
    console.log()

    // Try to guess the install command from the repo
    if (data.repo_url.includes('modelcontextprotocol/servers')) {
      const serverName = slug.replace(/-mcp$/, '')
      console.log(`  ${c.white}npx @modelcontextprotocol/server-${serverName}${c.reset}`)
    } else if (data.repo_url.includes('github.com')) {
      console.log(`  ${c.dim}# Clone and run:${c.reset}`)
      console.log(`  ${c.white}git clone ${data.repo_url}${c.reset}`)
      console.log(`  ${c.white}cd ${slug}${c.reset}`)
      console.log(`  ${c.white}npm install && npm start${c.reset}`)
    }

    console.log()
    console.log(`  ${c.dim}Full instructions: ${c.cyan}${data.repo_url}${c.reset}`)
  } else {
    console.log(`  ${c.yellow}No install command available.${c.reset}`)
    console.log(`  ${c.dim}Visit: https://bharatmcp.in/project/${slug}${c.reset}`)
  }
  console.log()
}

async function cmdTrending() {
  console.log(`${c.dim}Fetching trending MCPs...${c.reset}\n`)

  const { data } = await fetchAPI('/trending?limit=10')

  console.log(`${c.orange}${c.bold}Trending MCPs${c.reset} ${c.dim}— most popular this week${c.reset}\n`)

  console.log(`  ${c.dim}${padRight('#', 4)} ${padRight('NAME', 28)} ${padRight('CATEGORY', 18)} ${padRight('STARS', 7)} VERIFIED${c.reset}`)
  console.log(`  ${c.dim}${'─'.repeat(75)}${c.reset}`)

  data.forEach((p, i) => {
    const num = padRight(String(i + 1) + '.', 4)
    const name = padRight(truncate(p.name, 26), 28)
    const cat = padRight(truncate(p.category?.name || '', 16), 18)
    const stars = padRight('★ ' + formatStars(p.star_count), 7)
    const badge = tierBadge(p.verification_tier)
    console.log(`  ${c.white}${num}${c.reset} ${c.white}${name}${c.reset} ${c.dim}${cat}${c.reset} ${c.yellow}${stars}${c.reset} ${badge}`)
  })

  console.log(`\n${c.dim}Run ${c.white}bharatmcp info <name>${c.dim} for details${c.reset}`)
}

async function cmdIndia() {
  console.log(`${c.dim}Fetching India MCPs...${c.reset}\n`)

  const { data } = await fetchAPI('/projects?country=india&limit=20')

  console.log(`${c.green}${c.bold}🇮🇳 India MCPs${c.reset} ${c.dim}— built for Indian services${c.reset}\n`)

  console.log(`  ${c.dim}${padRight('NAME', 30)} ${padRight('CATEGORY', 20)} VERIFIED${c.reset}`)
  console.log(`  ${c.dim}${'─'.repeat(65)}${c.reset}`)

  for (const p of data) {
    const name = padRight(truncate(p.name, 28), 30)
    const cat = padRight(truncate(p.category?.name || '', 18), 20)
    const badge = tierBadge(p.verification_tier)
    console.log(`  ${c.white}${name}${c.reset} ${c.dim}${cat}${c.reset} ${badge}`)
  }

  console.log(`\n${c.dim}View all: ${c.cyan}https://bharatmcp.in/category/india${c.reset}`)
}

function cmdHelp() {
  console.log(`
  ${c.orange}${c.bold}bharatmcp${c.reset} ${c.dim}v${VERSION}${c.reset}
  ${c.dim}India's MCP registry — search, discover, and install MCP servers${c.reset}

  ${c.bold}USAGE${c.reset}

    bharatmcp ${c.cyan}<command>${c.reset} [options]

  ${c.bold}COMMANDS${c.reset}

    ${c.cyan}search${c.reset} <query>     Search the registry for MCPs
    ${c.cyan}info${c.reset} <slug>        Get details about a specific MCP
    ${c.cyan}install${c.reset} <slug>     Show install instructions for an MCP
    ${c.cyan}trending${c.reset}           Show trending MCPs this week
    ${c.cyan}india${c.reset}              Show India-specific MCPs
    ${c.cyan}help${c.reset}               Show this help message

  ${c.bold}EXAMPLES${c.reset}

    ${c.dim}# Search for payment MCPs${c.reset}
    bharatmcp search "razorpay"

    ${c.dim}# Get info about a specific MCP${c.reset}
    bharatmcp info zerodha-kite-mcp

    ${c.dim}# Show trending MCPs${c.reset}
    bharatmcp trending

    ${c.dim}# Show all India MCPs${c.reset}
    bharatmcp india

  ${c.bold}MORE INFO${c.reset}

    Website:  ${c.cyan}https://bharatmcp.in${c.reset}
    API:      ${c.cyan}https://bharatmcp.in/api/v1${c.reset}
    GitHub:   ${c.cyan}https://github.com/bharatmcp${c.reset}
`)
}

// ─── Main ────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2)
const command = args[0]
const param = args.slice(1).join(' ')

switch (command) {
  case 'search':
  case 's':
    await cmdSearch(param)
    break
  case 'info':
  case 'i':
    await cmdInfo(param)
    break
  case 'install':
    await cmdInstall(param)
    break
  case 'trending':
  case 't':
    await cmdTrending()
    break
  case 'india':
    await cmdIndia()
    break
  case 'help':
  case '--help':
  case '-h':
    cmdHelp()
    break
  case '--version':
  case '-v':
    console.log(`bharatmcp v${VERSION}`)
    break
  default:
    if (!command) {
      cmdHelp()
    } else {
      console.error(`${c.red}Unknown command:${c.reset} ${command}`)
      console.error(`${c.dim}Run "bharatmcp help" for available commands${c.reset}`)
      process.exit(1)
    }
}
