import Link from 'next/link'
import { getFeaturedRecipes } from '@/lib/recipes'

const difficultyStyles = {
  beginner: { bg: 'rgba(34,197,94,0.1)', text: '#4ade80', border: 'rgba(34,197,94,0.3)', label: 'Beginner' },
  intermediate: { bg: 'rgba(234,179,8,0.1)', text: '#facc15', border: 'rgba(234,179,8,0.3)', label: 'Intermediate' },
  advanced: { bg: 'rgba(239,68,68,0.1)', text: '#f87171', border: 'rgba(239,68,68,0.3)', label: 'Advanced' },
}

const countryEmoji = { india: '🇮🇳', global: '🌐', both: '🌍' }

export default function RecipesPreview() {
  const featured = getFeaturedRecipes()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-heading font-bold text-[22px] text-white mb-1">
            MCP Recipes
          </h2>
          <p className="text-[14px] text-[var(--color-text-muted)]">
            Combine MCPs to solve real problems — copy, paste, done.
          </p>
        </div>
        <Link
          href="/recipes"
          className="text-[14px] text-[#FFB366] hover:text-[#FFD699] transition-colors shrink-0"
        >
          View all recipes →
        </Link>
      </div>

      <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-4 gap-4">
        {featured.map((recipe) => {
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
                <span className="text-[12px]">{countryEmoji[recipe.country]}</span>
              </div>
              <h3 className="font-heading font-bold text-[14px] text-white mb-2 line-clamp-1">
                {recipe.title}
              </h3>
              <p className="text-[12px] text-[var(--color-text-muted)] line-clamp-2 leading-relaxed mb-3">
                {recipe.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {recipe.mcps.slice(0, 2).map((mcp) => (
                  <span
                    key={mcp.slug}
                    className="text-[9px] px-1.5 py-0.5 rounded-full bg-[rgba(255,153,51,0.06)] text-[#FFB366]/70 border border-[rgba(255,153,51,0.15)]"
                  >
                    {mcp.name}
                  </span>
                ))}
                {recipe.mcps.length > 2 && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[rgba(255,153,51,0.06)] text-[#FFB366]/70 border border-[rgba(255,153,51,0.15)]">
                    +{recipe.mcps.length - 2}
                  </span>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
