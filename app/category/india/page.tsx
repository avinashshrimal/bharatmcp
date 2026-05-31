import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import IndiaTabFilter from '@/components/india/IndiaTabFilter'
import { INDIA_MCPS, OFFICIAL_INDIA_MCPS, COMMUNITY_INDIA_MCPS } from '@/lib/india-mcps'

export const metadata = {
  title: 'India MCPs — BharatMCP',
  description: 'MCPs built by and for Indian developers. Official and community-built MCP servers for Indian services, APIs, and platforms.',
}

export default function IndiaMCPsPage() {
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
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          {/* Page Header */}
          <div className="mb-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-[11px] font-semibold text-[#4ade80] uppercase tracking-[0.1em]">
                India Focus
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading font-[800] text-[36px] text-white mb-3">
              India MCPs
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] text-[var(--color-text-secondary)] mb-5 max-w-xl">
              MCPs built by and for Indian developers. From stock trading to food delivery, payments to AI translation.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
                <span className="text-[14px] text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-white">{OFFICIAL_INDIA_MCPS.length}</span> Official
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#60a5fa]" />
                <span className="text-[14px] text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-white">{COMMUNITY_INDIA_MCPS.length}</span> Community
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-text-muted)]" />
                <span className="text-[14px] text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-white">{INDIA_MCPS.length}</span> Total
                </span>
              </div>
            </div>
          </div>

          {/* Tab Filter + Grid */}
          <IndiaTabFilter mcps={INDIA_MCPS} />
        </div>
      </main>

      <Footer />
    </>
  )
}
