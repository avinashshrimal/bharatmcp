import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProjectCard from '@/components/project/ProjectCard'

const mockCreators: Record<string, {
  displayName: string
  username: string
  bio: string
  projectCount: number
  totalDownloads: number
  totalStars: number
  badges: string[]
  projects: {
    name: string
    slug: string
    description: string
    creator: string
    category: string
    tags: string[]
    rating: number
    downloads: number
    verificationTier: 'bharatmcp_verified' | 'community_verified' | 'listed'
    iconColor: 'orange' | 'blue' | 'green' | 'gold' | 'purple'
  }[]
}> = {
  bharatmcp: {
    displayName: 'BharatMCP',
    username: 'bharatmcp',
    bio: 'Official BharatMCP team. Building India\'s largest registry for MCP Servers, AI Skills, Agents and Workflows.',
    projectCount: 12,
    totalDownloads: 48200,
    totalStars: 3200,
    badges: ['Official', 'Verified Publisher', 'Top Creator'],
    projects: [
      {
        name: 'GitHub MCP',
        slug: 'github-mcp',
        description: 'Seamless GitHub integration for repository management, issues, pull requests, and CI/CD workflows.',
        creator: 'BharatMCP',
        category: 'Developer Tools',
        tags: ['Git', 'CI/CD'],
        rating: 4.8,
        downloads: 12400,
        verificationTier: 'bharatmcp_verified',
        iconColor: 'blue',
      },
      {
        name: 'Slack MCP',
        slug: 'slack-mcp',
        description: 'Connect your AI workflows with Slack for messaging, channel management, and team notifications.',
        creator: 'BharatMCP',
        category: 'Communication',
        tags: ['Messaging', 'Teams'],
        rating: 4.7,
        downloads: 8200,
        verificationTier: 'bharatmcp_verified',
        iconColor: 'purple',
      },
      {
        name: 'Razorpay MCP',
        slug: 'razorpay-mcp',
        description: 'Integrate Razorpay payment gateway for processing payments, refunds, and subscription management.',
        creator: 'BharatMCP',
        category: 'Payments',
        tags: ['Payments', 'India'],
        rating: 4.7,
        downloads: 6100,
        verificationTier: 'bharatmcp_verified',
        iconColor: 'gold',
      },
      {
        name: 'Zerodha Kite MCP',
        slug: 'zerodha-kite-mcp',
        description: 'Live stock trading, portfolio tracking, and market data access via Zerodha Kite APIs.',
        creator: 'BharatMCP',
        category: 'Finance',
        tags: ['Trading', 'Stocks'],
        rating: 4.9,
        downloads: 4200,
        verificationTier: 'bharatmcp_verified',
        iconColor: 'orange',
      },
    ],
  },
  notiondev: {
    displayName: 'NotionDev',
    username: 'notiondev',
    bio: 'Building productivity tools and integrations for the Notion ecosystem. Open source contributor.',
    projectCount: 3,
    totalDownloads: 5800,
    totalStars: 420,
    badges: ['Community Contributor'],
    projects: [
      {
        name: 'Notion MCP',
        slug: 'notion-mcp',
        description: 'Access and manage Notion workspaces, databases, pages, and blocks through AI-powered workflows.',
        creator: 'NotionDev',
        category: 'Productivity',
        tags: ['Docs', 'Workspace'],
        rating: 4.6,
        downloads: 5800,
        verificationTier: 'community_verified',
        iconColor: 'blue',
      },
    ],
  },
  gmaildev: {
    displayName: 'GmailDev',
    username: 'gmaildev',
    bio: 'Email automation specialist. Creating tools to make email workflows smarter and more efficient.',
    projectCount: 2,
    totalDownloads: 3900,
    totalStars: 280,
    badges: ['Community Contributor'],
    projects: [
      {
        name: 'Gmail MCP',
        slug: 'gmail-mcp',
        description: 'Manage emails, drafts, labels, and threads with AI-powered Gmail integration.',
        creator: 'GmailDev',
        category: 'Communication',
        tags: ['Email', 'Google'],
        rating: 4.5,
        downloads: 3900,
        verificationTier: 'community_verified',
        iconColor: 'orange',
      },
    ],
  },
}

function getAvatarGradient(username: string): string {
  const hash = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const gradients = [
    'linear-gradient(135deg, #FF6B00, #FF8520)',
    'linear-gradient(135deg, #3B82F6, #60A5FA)',
    'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    'linear-gradient(135deg, #128807, #34A028)',
    'linear-gradient(135deg, #F59E0B, #FBBF24)',
    'linear-gradient(135deg, #06B6D4, #22D3EE)',
  ]
  return gradients[hash % gradients.length]
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

function formatNumber(count: number): string {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return count.toString()
}

export default async function CreatorPage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params

  const creator = mockCreators[username] || mockCreators['bharatmcp']

  return (
    <>
      {/* Background Mesh */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 900px 600px at 10% 20%, rgba(255,107,0,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 700px 500px at 85% 70%, rgba(18,136,7,0.06) 0%, transparent 70%)
          `,
        }}
      />

      <Navbar />

      <main className="relative z-[1] pt-16">
        <div className="max-w-[1200px] mx-auto px-8 py-10">
          {/* Profile Header */}
          <div className="flex flex-col min-[900px]:flex-row items-start gap-6 mb-12">
            {/* Avatar */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
              style={{ background: getAvatarGradient(creator.username) }}
            >
              <span className="font-heading font-[800] text-[22px] text-white">
                {getInitials(creator.displayName)}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h1 className="font-heading font-[800] text-[28px] text-white">{creator.displayName}</h1>
              <p className="text-[14px] text-[var(--color-text-muted)] mb-2">@{creator.username}</p>
              <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.6] mb-4 max-w-[600px]">
                {creator.bio}
              </p>

              {/* Stats Row */}
              <div className="flex items-center gap-6 mb-4">
                <div>
                  <span className="font-heading font-bold text-[20px] text-white">{creator.projectCount}</span>
                  <span className="text-[12px] text-[var(--color-text-muted)] ml-1.5">Projects</span>
                </div>
                <div>
                  <span className="font-heading font-bold text-[20px] text-white">{formatNumber(creator.totalDownloads)}</span>
                  <span className="text-[12px] text-[var(--color-text-muted)] ml-1.5">Downloads</span>
                </div>
                <div>
                  <span className="font-heading font-bold text-[20px] text-white">{formatNumber(creator.totalStars)}</span>
                  <span className="text-[12px] text-[var(--color-text-muted)] ml-1.5">Stars</span>
                </div>
              </div>

              {/* Follow Button + Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <button className="px-4 py-2 text-[13px] font-body text-[var(--color-text-secondary)] border border-[var(--color-border)] rounded-lg hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors cursor-pointer">
                  Follow
                </button>
                {creator.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-[11px] font-medium px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(255,107,0,0.08)',
                      color: '#FF6B00',
                      border: '1px solid rgba(255,107,0,0.2)',
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <section>
            <h2 className="font-heading font-bold text-[20px] text-white mb-6">
              Projects
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
              {creator.projects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
