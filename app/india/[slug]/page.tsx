import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import CopyButton from '@/components/project/CopyButton'
import { INDIA_MCPS } from '@/lib/india-mcps'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return INDIA_MCPS.map((mcp) => ({ slug: mcp.slug }))
}

export default async function IndiaMCPDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const mcp = INDIA_MCPS.find((m) => m.slug === slug)
  if (!mcp) {
    notFound()
  }

  const isOfficial = mcp.ownerType === 'official'
  const relatedMCPs = INDIA_MCPS.filter(
    (m) => m.slug !== mcp.slug && m.categorySlug === mcp.categorySlug
  ).slice(0, 3)

  // If not enough related in same category, fill from others
  const finalRelated = relatedMCPs.length >= 3
    ? relatedMCPs
    : [
        ...relatedMCPs,
        ...INDIA_MCPS.filter(
          (m) => m.slug !== mcp.slug && !relatedMCPs.find((r) => r.slug === m.slug)
        ).slice(0, 3 - relatedMCPs.length),
      ]

  return (
    <>
      {/* Background Mesh */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 900px 600px at 10% 20%, rgba(18,136,7,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 700px 500px at 85% 70%, rgba(18,136,7,0.04) 0%, transparent 70%)
          `,
        }}
      />

      <Navbar />

      <main className="relative z-[1] pt-16">
        <div className="max-w-[1200px] mx-auto px-6 py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] text-[var(--color-text-muted)] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/category/india" className="hover:text-white transition-colors">India MCPs</Link>
            <span>›</span>
            <span className="text-[var(--color-text-secondary)]">{mcp.name}</span>
          </nav>

          {/* Header */}
          <div className="flex items-start gap-5 mb-8">
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-[14px] flex items-center justify-center shrink-0"
              style={{
                background: isOfficial
                  ? 'linear-gradient(135deg, #128807, #4ade80)'
                  : 'linear-gradient(135deg, #3B82F6, #60A5FA)',
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="font-heading font-[800] text-[32px] text-white">{mcp.name}</h1>
                {isOfficial ? (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[rgba(18,136,7,0.1)] text-[#4ade80] border border-[rgba(18,136,7,0.3)]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Official
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[rgba(59,130,246,0.1)] text-[#60a5fa] border border-[rgba(59,130,246,0.3)]">
                    Community
                  </span>
                )}
              </div>
              <p className="text-[14px] text-[var(--color-text-muted)]">
                by <span className="text-[var(--color-text-secondary)]">{mcp.owner}</span> · {mcp.category}
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 min-[600px]:grid-cols-4 gap-4 rounded-[14px] bg-[var(--color-surface)] border border-[var(--color-border)] p-4 min-[600px]:px-6 min-[600px]:py-4 mb-10">
            <div className="text-center">
              <div className="font-heading font-bold text-[20px] text-white">{mcp.stars}</div>
              <div className="text-[12px] text-[var(--color-text-muted)]">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-[20px] text-white">{mcp.language}</div>
              <div className="text-[12px] text-[var(--color-text-muted)]">Language</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-[20px] text-white">{mcp.license}</div>
              <div className="text-[12px] text-[var(--color-text-muted)]">License</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-[20px] text-white">{mcp.lastUpdated}</div>
              <div className="text-[12px] text-[var(--color-text-muted)]">Last Updated</div>
            </div>
          </div>

          {/* Main Content + Sidebar */}
          <div className="flex flex-col min-[900px]:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Description */}
              <section className="mb-10">
                <h2 className="font-heading font-bold text-[20px] text-white mb-4">About</h2>
                <p className="text-[16px] text-[var(--color-text-secondary)] leading-[1.8]">
                  {mcp.longDescription}
                </p>
              </section>

              {/* Features */}
              <section className="mb-10">
                <h2 className="font-heading font-bold text-[20px] text-white mb-4">Features</h2>
                <ul className="space-y-3">
                  {mcp.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[15px] text-[var(--color-text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Use Cases */}
              <section className="mb-10">
                <h2 className="font-heading font-bold text-[20px] text-white mb-4">Use Cases</h2>
                <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-3">
                  {mcp.useCases.map((useCase) => (
                    <div
                      key={useCase}
                      className="flex items-center gap-3 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span className="text-[14px] text-[var(--color-text-secondary)]">{useCase}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Installation */}
              <section className="mb-10">
                <h2 className="font-heading font-bold text-[20px] text-white mb-4">Installation</h2>
                <div className="rounded-[14px] border border-[rgba(255,255,255,0.12)] bg-[#050A14] overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3">
                    <code className="text-[13px] font-mono">
                      <span className="text-green-400">$</span>{' '}
                      <span className="text-white">{mcp.installCommand}</span>
                    </code>
                    <CopyButton text={mcp.installCommand} />
                  </div>
                </div>
              </section>

              {/* Tags */}
              <section>
                <h2 className="font-heading font-bold text-[20px] text-white mb-4">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {mcp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] px-3 py-1 rounded-full bg-[rgba(18,136,7,0.06)] text-[#4ade80]/70 border border-[rgba(18,136,7,0.15)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="w-full min-[900px]:w-[300px] shrink-0">
              {/* GitHub Link */}
              <div className="rounded-[14px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 mb-5">
                <h3 className="font-heading font-bold text-[15px] text-white mb-3">Repository</h3>
                <a
                  href={mcp.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14px] text-[#4ade80] hover:text-[#86efac] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub →
                </a>
              </div>

              {/* Related India MCPs */}
              {finalRelated.length > 0 && (
                <div className="rounded-[14px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                  <h3 className="font-heading font-bold text-[15px] text-white mb-4">Related India MCPs</h3>
                  <div className="flex flex-col gap-3">
                    {finalRelated.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/india/${related.slug}`}
                        className="flex items-center gap-3 rounded-[10px] border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] px-3 py-3 transition-all duration-200 hover:border-[rgba(18,136,7,0.4)]"
                      >
                        <div
                          className="w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0"
                          style={{
                            background: related.ownerType === 'official'
                              ? 'linear-gradient(135deg, #128807, #4ade80)'
                              : 'linear-gradient(135deg, #3B82F6, #60A5FA)',
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[13px] font-medium text-white truncate">{related.name}</p>
                          <p className="text-[11px] text-[var(--color-text-muted)] truncate">{related.category}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
