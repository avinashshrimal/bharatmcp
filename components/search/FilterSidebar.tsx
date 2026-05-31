'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { COMPUTED_CATEGORIES } from '@/lib/all-projects'

const types = ['mcp', 'skill', 'agent', 'workflow']
const typeLabels: Record<string, string> = { mcp: 'MCP', skill: 'Skill', agent: 'Agent', workflow: 'Workflow' }
const verificationOptions = ['bharatmcp_verified', 'community_verified', 'listed']
const verificationLabels: Record<string, string> = { bharatmcp_verified: 'Verified', community_verified: 'Community', listed: 'Listed' }
const countryOptions = ['all', 'india', 'global']
const countryLabels: Record<string, string> = { all: 'All', india: 'India', global: 'Global' }

export default function FilterSidebar({ className = '' }: { className?: string }) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const currentType = searchParams.get('type') || ''
  const currentCategory = searchParams.get('category') || ''
  const currentVerification = searchParams.get('verified') || ''
  const currentCountry = searchParams.get('country') || 'all'

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value && value !== 'all') {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    // Keep existing q param
    router.replace(`/browse?${params.toString()}`, { scroll: false })
  }

  return (
    <aside
      className={`w-[240px] shrink-0 border-r border-[var(--color-border)] bg-[var(--color-surface)] p-5 rounded-lg ${className}`}
      style={{ minHeight: 'calc(100vh - 200px)' }}
    >
      {/* Type */}
      <div className="mb-6">
        <h4 className="font-heading font-bold text-[14px] text-white mb-3">Type</h4>
        <div className="flex flex-col gap-2">
          {types.map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer text-[13px] font-body text-[var(--color-text-secondary)] hover:text-white transition-colors"
            >
              <input
                type="radio"
                name="type"
                checked={currentType === type}
                onChange={() => updateParam('type', currentType === type ? '' : type)}
                className="w-3.5 h-3.5 accent-[#FF6B00]"
              />
              {typeLabels[type]}
            </label>
          ))}
          {currentType && (
            <button
              onClick={() => updateParam('type', '')}
              className="text-[11px] text-[#FF6B00] hover:underline cursor-pointer text-left mt-1"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="font-heading font-bold text-[14px] text-white mb-3">Category</h4>
        <div className="flex flex-col gap-1.5 max-h-[200px] overflow-y-auto">
          {COMPUTED_CATEGORIES.filter(cat => cat.project_count > 0).map((cat) => (
            <button
              key={cat.slug}
              onClick={() => updateParam('category', currentCategory === cat.slug ? '' : cat.slug)}
              className={`flex items-center justify-between text-[13px] font-body transition-colors cursor-pointer text-left px-2 py-1 rounded ${
                currentCategory === cat.slug
                  ? 'text-[#FF6B00] bg-[#FF6B00]/10'
                  : 'text-[var(--color-text-secondary)] hover:text-white'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[11px] text-[var(--color-text-muted)]">{cat.project_count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Verification */}
      <div className="mb-6">
        <h4 className="font-heading font-bold text-[14px] text-white mb-3">Verification</h4>
        <div className="flex flex-col gap-2">
          {verificationOptions.map((v) => (
            <label
              key={v}
              className="flex items-center gap-2 cursor-pointer text-[13px] font-body text-[var(--color-text-secondary)] hover:text-white transition-colors"
            >
              <input
                type="radio"
                name="verification"
                checked={currentVerification === v}
                onChange={() => updateParam('verified', currentVerification === v ? '' : v)}
                className="w-3.5 h-3.5 accent-[#FF6B00]"
              />
              {verificationLabels[v]}
            </label>
          ))}
          {currentVerification && (
            <button
              onClick={() => updateParam('verified', '')}
              className="text-[11px] text-[#FF6B00] hover:underline cursor-pointer text-left mt-1"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Country */}
      <div className="mb-6">
        <h4 className="font-heading font-bold text-[14px] text-white mb-3">Country</h4>
        <div className="flex flex-col gap-2">
          {countryOptions.map((c) => (
            <label
              key={c}
              className="flex items-center gap-2 cursor-pointer text-[13px] font-body text-[var(--color-text-secondary)] hover:text-white transition-colors"
            >
              <input
                type="radio"
                name="country"
                checked={currentCountry === c}
                onChange={() => updateParam('country', c)}
                className="w-3.5 h-3.5 accent-[#FF6B00]"
              />
              {countryLabels[c]}
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}
