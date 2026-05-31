'use client'

import { useState } from 'react'
import { COMPUTED_CATEGORIES } from '@/lib/all-projects'

const types = ['MCP', 'Skill', 'Agent', 'Workflow']
const verificationOptions = ['Verified', 'Community', 'Listed']
const countryOptions = ['All', 'India', 'Global']

export default function FilterSidebar({ className = '' }: { className?: string }) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedVerification, setSelectedVerification] = useState<string[]>([])
  const [selectedCountry, setSelectedCountry] = useState('All')

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const toggleVerification = (v: string) => {
    setSelectedVerification((prev) =>
      prev.includes(v) ? prev.filter((t) => t !== v) : [...prev, v]
    )
  }

  return (
    <aside
      className={`w-[240px] shrink-0 border-r border-[var(--color-border)] bg-[var(--color-surface)] p-5 ${className}`}
      style={{ minHeight: 'calc(100vh - 64px)' }}
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
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
                className="w-3.5 h-3.5 rounded accent-[#FF6B00]"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="font-heading font-bold text-[14px] text-white mb-3">Category</h4>
        <div className="flex flex-col gap-2">
          {COMPUTED_CATEGORIES.filter(cat => cat.project_count > 0).map((cat) => (
            <button
              key={cat.slug}
              className="flex items-center justify-between text-[13px] font-body text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer text-left"
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
                type="checkbox"
                checked={selectedVerification.includes(v)}
                onChange={() => toggleVerification(v)}
                className="w-3.5 h-3.5 rounded accent-[#FF6B00]"
              />
              {v}
            </label>
          ))}
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
                checked={selectedCountry === c}
                onChange={() => setSelectedCountry(c)}
                className="w-3.5 h-3.5 accent-[#FF6B00]"
              />
              {c}
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}
