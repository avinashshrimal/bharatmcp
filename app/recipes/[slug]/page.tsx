import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import CopyButton from '@/components/project/CopyButton'
import { RECIPES, getRecipeBySlug } from '@/lib/recipes'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return RECIPES.map((recipe) => ({ slug: recipe.slug }))
}

const difficultyStyles = {
  beginner: { bg: 'rgba(34,197,94,0.1)', text: '#4ade80', border: 'rgba(34,197,94,0.3)', label: 'Beginner' },
  intermediate: { bg: 'rgba(234,179,8,0.1)', text: '#facc15', border: 'rgba(234,179,8,0.3)', label: 'Intermediate' },
  advanced: { bg: 'rgba(239,68,68,0.1)', text: '#f87171', border: 'rgba(239,68,68,0.3)', label: 'Advanced' },
}

const countryLabels = {
  india: { emoji: '🇮🇳', label: 'India' },
  global: { emoji: '🌐', label: 'Global' },
  both: { emoji: '🌍', label: 'India & Global' },
}

export default async function RecipeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const recipe = getRecipeBySlug(slug)
  if (!recipe) {
    notFound()
  }

  const badge = difficultyStyles[recipe.difficulty]
  const country = countryLabels[recipe.country]

  return (
    <>
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
        <div className="max-w-[900px] mx-auto px-6 py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] text-[var(--color-text-muted)] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/recipes" className="hover:text-white transition-colors">Recipes</Link>
            <span>›</span>
            <span className="text-[var(--color-text-secondary)]">{recipe.title}</span>
          </nav>
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <h1 className="font-heading font-[800] text-[32px] text-white">{recipe.title}</h1>
              <span
                className="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: badge.bg,
                  color: badge.text,
                  border: `1px solid ${badge.border}`,
                }}
              >
                {badge.label}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[rgba(255,153,51,0.1)] text-[#FFB366] border border-[rgba(255,153,51,0.3)]">
                {country.emoji} {country.label}
              </span>
            </div>
            <p className="text-[16px] text-[var(--color-text-secondary)] leading-relaxed">
              {recipe.description}
            </p>
          </div>

          {/* Problem Section */}
          <section className="mb-10">
            <h2 className="font-heading font-bold text-[20px] text-white mb-4">The Problem</h2>
            <div className="rounded-[14px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.8]">
                {recipe.problem}
              </p>
            </div>
          </section>

          {/* MCPs Used Section */}
          <section className="mb-10">
            <h2 className="font-heading font-bold text-[20px] text-white mb-4">MCPs Used</h2>
            <div className="space-y-3">
              {recipe.mcps.map((mcp) => (
                <div
                  key={mcp.slug}
                  className="rounded-[14px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 bg-gradient-to-br from-[#FF6B00] to-[#FF9933]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/mcp/${mcp.slug}`}
                      className="font-heading font-bold text-[15px] text-white hover:text-[#FFB366] transition-colors"
                    >
                      {mcp.name}
                    </Link>
                    <p className="text-[13px] text-[var(--color-text-muted)] mt-1 leading-relaxed">
                      {mcp.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Configuration Section */}
          <section className="mb-10">
            <h2 className="font-heading font-bold text-[20px] text-white mb-4">Configuration</h2>
            <p className="text-[13px] text-[var(--color-text-muted)] mb-3">
              Add this to your Claude Desktop or Cursor MCP config:
            </p>
            <div className="rounded-[14px] border border-[rgba(255,255,255,0.12)] bg-[#050A14] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(255,255,255,0.06)]">
                <span className="text-[12px] text-[var(--color-text-muted)] font-mono">mcp-config.json</span>
                <CopyButton text={recipe.config} />
              </div>
              <pre className="px-5 py-4 overflow-x-auto">
                <code className="text-[13px] font-mono text-[var(--color-text-secondary)] leading-relaxed">
                  {recipe.config}
                </code>
              </pre>
            </div>
          </section>

          {/* How to Use Section */}
          <section className="mb-10">
            <h2 className="font-heading font-bold text-[20px] text-white mb-4">How to Use</h2>
            <p className="text-[13px] text-[var(--color-text-muted)] mb-3">
              After configuring the MCPs above, use this prompt with Claude:
            </p>
            <div className="rounded-[14px] border border-[rgba(255,153,51,0.3)] bg-[rgba(255,153,51,0.04)] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(255,153,51,0.15)]">
                <span className="text-[12px] text-[#FFB366] font-medium">Prompt</span>
                <CopyButton text={recipe.prompt} />
              </div>
              <div className="px-5 py-4">
                <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.8] whitespace-pre-wrap">
                  {recipe.prompt}
                </p>
              </div>
            </div>
          </section>

          {/* Tags Section */}
          <section className="mb-10">
            <h2 className="font-heading font-bold text-[20px] text-white mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] px-3 py-1 rounded-full bg-[rgba(255,153,51,0.06)] text-[#FFB366]/70 border border-[rgba(255,153,51,0.15)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Back link */}
          <div className="pt-6 border-t border-[var(--color-border)]">
            <Link
              href="/recipes"
              className="text-[14px] text-[#FFB366] hover:text-[#FFD699] transition-colors"
            >
              ← Back to all recipes
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
