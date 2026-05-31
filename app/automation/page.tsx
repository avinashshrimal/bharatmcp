import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { AUTOMATION_MCPS } from '@/lib/automation-mcps'

export const metadata: Metadata = {
  title: 'Automation MCPs — BharatMCP',
  description: 'Platform automation tools — from social media management to trading bots. Each tool is labeled with a risk level.',
}

const riskBadgeStyles = {
  'safe': {
    bg: 'rgba(34,197,94,0.1)',
    text: '#4ade80',
    border: 'rgba(34,197,94,0.3)',
    label: 'Safe',
  },
  'caution': {
    bg: 'rgba(234,179,8,0.1)',
    text: '#facc15',
    border: 'rgba(234,179,8,0.3)',
    label: 'Caution',
  },
  'grey-area': {
    bg: 'rgba(239,68,68,0.1)',
    text: '#f87171',
    border: 'rgba(239,68,68,0.3)',
    label: 'Grey Area',
  },
}

export default function AutomationPage() {
  const indiaMCPs = AUTOMATION_MCPS.filter((m) => m.country === 'india')
  const globalMCPs = AUTOMATION_MCPS.filter((m) => m.country === 'global')

  return (
    <>
      {/* Background Mesh */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 900px 600px at 10% 20%, rgba(255,153,51,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 700px 500px at 85% 70%, rgba(255,153,51,0.04) 0%, transparent 70%)
          `,
        }}
      />

      <Navbar />

      <main className="relative z-[1] pt-16">
        <div className="max-w-[1200px] mx-auto px-6 py-10">
          {/* Header */}
          <div className="mb-10">
            <nav className="flex items-center gap-2 text-[13px] text-[var(--color-text-muted)] mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span className="text-[var(--color-text-secondary)]">Automation MCPs</span>
            </nav>

            <h1 className="font-heading font-[800] text-[36px] text-white mb-3">
              Automation MCPs
            </h1>
            <p className="text-[16px] text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
              Platform automation tools — from social media management to trading bots. Each tool is labeled with a risk level to help you make informed decisions.
            </p>
          </div>

          {/* Global Disclaimer */}
          <div className="rounded-lg bg-yellow-500/5 border border-yellow-500/20 p-4 mb-10">
            <div className="flex items-start gap-3">
              <span className="text-lg text-yellow-400 shrink-0 mt-0.5">⚠</span>
              <div>
                <h4 className="text-sm font-semibold text-yellow-400">Disclaimer</h4>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                  BharatMCP lists these tools for informational and educational purposes only. We do not endorse or encourage violation of any platform&apos;s Terms of Service. Users are solely responsible for compliance with applicable laws and service agreements.
                </p>
              </div>
            </div>
          </div>

          {/* Risk Level Legend */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
              <span className="text-[13px] text-[var(--color-text-secondary)]">Safe — Official API</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="text-[13px] text-[var(--color-text-secondary)]">Caution — Automation risks</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="text-[13px] text-[var(--color-text-secondary)]">Grey Area — ToS violation possible</span>
            </div>
          </div>

          {/* India Automation Section */}
          <section className="mb-12">
            <h2 className="font-heading font-bold text-[22px] text-white mb-2 flex items-center gap-2">
              🇮🇳 India Automation
            </h2>
            <p className="text-[14px] text-[var(--color-text-muted)] mb-6">
              Automation tools for Indian platforms and services
            </p>
            <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 gap-4">
              {indiaMCPs.map((mcp) => {
                const badge = riskBadgeStyles[mcp.riskLevel]
                return (
                  <Link
                    key={mcp.id}
                    href={`/automation/${mcp.slug}`}
                    className="rounded-[14px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all duration-200 hover:border-[rgba(255,153,51,0.4)] hover:translate-y-[-2px]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: badge.bg,
                          color: badge.text,
                          border: `1px solid ${badge.border}`,
                        }}
                      >
                        {badge.label}
                      </span>
                      <span className="text-[11px] text-[var(--color-text-muted)]">⭐ {mcp.stars}</span>
                    </div>
                    <h3 className="font-heading font-bold text-[15px] text-white mb-2 truncate">{mcp.name}</h3>
                    <p className="text-[13px] text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">{mcp.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {mcp.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(255,153,51,0.06)] text-[#FFB366]/70 border border-[rgba(255,153,51,0.15)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* Global Automation Section */}
          <section className="mb-12">
            <h2 className="font-heading font-bold text-[22px] text-white mb-2 flex items-center gap-2">
              🌐 Global Platform Automation
            </h2>
            <p className="text-[14px] text-[var(--color-text-muted)] mb-6">
              Automation tools for global platforms — social media, productivity, and more
            </p>
            <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 gap-4">
              {globalMCPs.map((mcp) => {
                const badge = riskBadgeStyles[mcp.riskLevel]
                return (
                  <Link
                    key={mcp.id}
                    href={`/automation/${mcp.slug}`}
                    className="rounded-[14px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all duration-200 hover:border-[rgba(255,153,51,0.4)] hover:translate-y-[-2px]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: badge.bg,
                          color: badge.text,
                          border: `1px solid ${badge.border}`,
                        }}
                      >
                        {badge.label}
                      </span>
                      <span className="text-[11px] text-[var(--color-text-muted)]">⭐ {mcp.stars}</span>
                    </div>
                    <h3 className="font-heading font-bold text-[15px] text-white mb-2 truncate">{mcp.name}</h3>
                    <p className="text-[13px] text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">{mcp.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {mcp.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(255,153,51,0.06)] text-[#FFB366]/70 border border-[rgba(255,153,51,0.15)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
