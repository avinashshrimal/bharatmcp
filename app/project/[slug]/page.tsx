import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import ProjectCard from '@/components/project/ProjectCard'
import CopyButton from '@/components/project/CopyButton'
import { ALL_PROJECTS } from '@/lib/all-projects'

const iconGradients: Record<string, string> = {
  orange: 'linear-gradient(135deg, #FF6B00, #FF8520)',
  blue: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
  green: 'linear-gradient(135deg, #128807, #34A028)',
  gold: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
  purple: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
}

const verificationLabels: Record<string, { label: string; color: string; bg: string; border: string }> = {
  bharatmcp_verified: { label: 'Verified', color: '#FF6B00', bg: 'rgba(255,107,0,0.1)', border: 'rgba(255,107,0,0.3)' },
  community_verified: { label: 'Community', color: '#4ade80', bg: 'rgba(18,136,7,0.1)', border: 'rgba(18,136,7,0.3)' },
  listed: { label: 'Listed', color: '#94A3B8', bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.1)' },
}

function formatCount(count: number): string {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return count.toString()
}

function getIconColor(slug: string): 'orange' | 'blue' | 'green' | 'gold' | 'purple' {
  const colors: Array<'orange' | 'blue' | 'green' | 'gold' | 'purple'> = ['orange', 'blue', 'green', 'gold', 'purple']
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash)
  }
  return colors[Math.abs(hash) % colors.length]
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return '1 day ago'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`
  return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const project = ALL_PROJECTS.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const badge = verificationLabels[project.verification_tier]
  const iconColor = getIconColor(project.slug)

  // Related projects: same category, exclude current, max 3
  const relatedProjects = ALL_PROJECTS
    .filter((p) => p.category.slug === project.category.slug && p.slug !== project.slug)
    .slice(0, 3)

  const installCommand = project.repo_url
    ? `git clone ${project.repo_url}`
    : `bharatmcp install ${project.slug}`

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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] text-[var(--color-text-muted)] mb-8">
            <Link href="/browse" className="hover:text-white transition-colors">Browse</Link>
            <span>›</span>
            <Link href={`/category/${project.category.slug}`} className="hover:text-white transition-colors">{project.category.name}</Link>
            <span>›</span>
            <span className="text-[var(--color-text-secondary)]">{project.name}</span>
          </nav>

          {/* Project Header */}
          <div className="flex items-start gap-5 mb-8">
            <div
              className="w-16 h-16 rounded-[14px] flex items-center justify-center shrink-0"
              style={{ background: iconGradients[iconColor] }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="font-heading font-[800] text-[32px] text-white">{project.name}</h1>
                <span
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider"
                  style={{
                    background: badge.bg,
                    color: badge.color,
                    border: `1px solid ${badge.border}`,
                  }}
                >
                  {badge.label}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Link
                  href={`/creator/${project.creator.username}`}
                  className="text-[14px] text-[var(--color-text-secondary)] hover:text-[#FF6B00] transition-colors"
                >
                  by {project.creator.username}
                </Link>
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] text-[var(--color-text-secondary)] border border-[var(--color-border)] rounded-lg hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors cursor-pointer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  Star ({formatCount(project.star_count)})
                </button>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 min-[600px]:grid-cols-4 gap-4 rounded-[14px] bg-[var(--color-surface)] border border-[var(--color-border)] p-4 min-[600px]:px-6 min-[600px]:py-4 mb-10">
            <div className="text-center">
              <div className="font-heading font-bold text-[20px] text-white">{formatCount(project.download_count)}</div>
              <div className="text-[12px] text-[var(--color-text-muted)]">Downloads</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-[20px] text-white">{formatCount(project.install_count)}</div>
              <div className="text-[12px] text-[var(--color-text-muted)]">Installs</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-[20px] text-white">{formatCount(project.star_count)}</div>
              <div className="text-[12px] text-[var(--color-text-muted)]">Stars</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-[20px] text-white">{project.version}</div>
              <div className="text-[12px] text-[var(--color-text-muted)]">Version</div>
            </div>
          </div>

          {/* Main Content + Sidebar */}
          <div className="flex flex-col min-[900px]:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Description */}
              <section className="mb-10">
                <h2 className="font-heading font-bold text-[20px] text-white mb-4">About</h2>
                <p className="text-[16px] text-[var(--color-text-secondary)] leading-[1.8]">
                  {project.description}
                </p>
              </section>

              {/* Installation */}
              <section className="mb-10">
                <h2 className="font-heading font-bold text-[20px] text-white mb-4">Installation</h2>
                <div className="rounded-[14px] border border-[rgba(255,255,255,0.12)] bg-[#050A14] overflow-hidden">
                  {/* git clone / install */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(255,255,255,0.07)]">
                    <code className="text-[13px] font-mono">
                      <span className="text-[#FF6B00]">$</span>{' '}
                      <span className="text-white">{installCommand}</span>
                    </code>
                    <CopyButton text={installCommand} />
                  </div>
                  {/* bharatmcp install */}
                  <div className="flex items-center justify-between px-5 py-3">
                    <code className="text-[13px] font-mono">
                      <span className="text-[#FF6B00]">$</span>{' '}
                      <span className="text-white">bharatmcp install {project.slug}</span>
                    </code>
                    <CopyButton text={`bharatmcp install ${project.slug}`} />
                  </div>
                </div>
              </section>

              {/* Tags */}
              <section className="mb-10">
                <h2 className="font-heading font-bold text-[20px] text-white mb-4">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[var(--color-text-muted)] border border-[rgba(255,255,255,0.08)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              {/* Meta Info */}
              <section>
                <h2 className="font-heading font-bold text-[20px] text-white mb-4">Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-[14px]">
                    <span className="text-[var(--color-text-muted)]">License:</span>
                    <span className="text-[var(--color-text-secondary)]">{project.license}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[14px]">
                    <span className="text-[var(--color-text-muted)]">Updated:</span>
                    <span className="text-[var(--color-text-secondary)]">{formatDate(project.updated_at)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[14px]">
                    <span className="text-[var(--color-text-muted)]">Category:</span>
                    <Link href={`/category/${project.category.slug}`} className="text-[var(--color-text-secondary)] hover:text-[#FF6B00] transition-colors">
                      {project.category.name}
                    </Link>
                  </div>
                  {project.repo_url && (
                    <div className="flex items-center gap-2 text-[14px]">
                      <span className="text-[var(--color-text-muted)]">Repository:</span>
                      <a href={project.repo_url} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[#FF6B00] transition-colors truncate">
                        GitHub
                      </a>
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="w-full min-[900px]:w-[300px] shrink-0">
              <h3 className="font-heading font-bold text-[16px] text-white mb-4">Related Projects</h3>
              <div className="flex flex-col gap-3">
                {relatedProjects.length > 0 ? (
                  relatedProjects.map((rp) => (
                    <ProjectCard
                      key={rp.slug}
                      name={rp.name}
                      slug={rp.slug}
                      description={rp.description}
                      creator={rp.creator.username}
                      category={rp.category.name}
                      tags={rp.tags}
                      rating={Math.round(rp.rating * 10) / 10}
                      downloads={rp.download_count}
                      verificationTier={rp.verification_tier}
                      iconColor={getIconColor(rp.slug)}
                    />
                  ))
                ) : (
                  <p className="text-[13px] text-[var(--color-text-muted)]">No related projects found.</p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
