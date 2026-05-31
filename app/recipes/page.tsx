import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { RECIPES, RECIPE_CATEGORIES } from '@/lib/recipes'

export const metadata: Metadata = {
  title: 'MCP Recipes — BharatMCP',
  description: 'Ready-to-use combinations of MCPs that solve real problems. Copy the config, paste the prompt, and let AI handle the rest.',
}

const difficultyStyles = {
  beginner: { bg: 'rgba(34,197,94,0.1)', text: '#4ade80', border: 'rgba(34,197,94,0.3)', label: 'Beginner' },
  intermediate: { bg: 'rgba(234,179,8,0.1)', text: '#facc15', border: 'rgba(234,179,8,0.3)', label: 'Intermediate' },
  advanced: { bg: 'rgba(239,68,68,0.1)', text: '#f87171', border: 'rgba(239,68,68,0.3)', label: 'Advanced' },
}

const countryEmoji = { india: '🇮🇳', global: '🌐', both: '🌍' }

export default function RecipesPage() {
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
        <div className="max-w-[1200px] mx-auto px-6 py-10">
          {/* Header */}
          <div className="mb-10">
            <nav className="flex items-center gap-2 text-[13px] text-[var(--color-text-muted)] mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span className="text-[var(--color-text-secondary)]">Recipes</span>
            </nav>

            <h1 className="font-heading font-[800] text-[36px] text-white mb-3">
              MCP Recipes
            </h1>
            <p className="text-[16px] text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
              Ready-to-use combinations of MCPs that solve real problems. Copy the config, paste the prompt, and let AI handle the rest.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {RECIPE_CATEGORIES.map((cat) => {
              const count = cat === 'All' ? RECIPES.length : RECIPES.filter((r) => r.category === cat).length
              return (
                <span
                  key={cat}
                  className="text-[13px] px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[rgba(255,153,51,0.4)] hover:text-white transition-colors cursor-default"
                >
                  {cat} <span className="text-[var(--color-text-muted)]">({count})</span>
                </span>
              )
            })}
          </div>
          {/* Recipe Grid */}
          <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 gap-4">
            {RECIPES.map((recipe) => {
              const badge = difficultyStyles[recipe.difficulty]
              return (
                <Link
                  key={recipe.id}
                  href={`/recipes/${recipe.slug}`}
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
                    <div className="flex items-center gap-2">
                      <span className="text-[12px]">{countryEmoji[recipe.country]}</span>
                      <span className="text-[11px] text-[var(--color-text-muted)]">
                        {recipe.mcps.length} MCP{recipe.mcps.length > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-[15px] text-white mb-2 truncate">
                    {recipe.title}
                  </h3>
                  <p className="text-[13px] text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
                    {recipe.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {recipe.mcps.slice(0, 3).map((mcp) => (
                      <span
                        key={mcp.slug}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(255,153,51,0.06)] text-[#FFB366]/70 border border-[rgba(255,153,51,0.15)]"
                      >
                        {mcp.name}
                      </span>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
