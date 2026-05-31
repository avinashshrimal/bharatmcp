'use client'

import { useState } from 'react'
import IndiaMCPCard from './IndiaMCPCard'
import type { IndiaMCP } from '@/lib/india-mcps'

type TabValue = 'all' | 'official' | 'community'

const tabs: { label: string; value: TabValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Official', value: 'official' },
  { label: 'Community', value: 'community' },
]

export default function IndiaTabFilter({ mcps }: { mcps: IndiaMCP[] }) {
  const [activeTab, setActiveTab] = useState<TabValue>('all')

  const filtered = mcps.filter((mcp) => {
    if (activeTab === 'all') return true
    return mcp.ownerType === activeTab
  })

  return (
    <>
      {/* Tab bar */}
      <div className="flex items-center gap-1 p-1 rounded-[12px] bg-[var(--color-surface)] border border-[var(--color-border)] w-fit mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-5 py-2 rounded-[10px] text-[14px] font-medium transition-all duration-200 cursor-pointer ${
              activeTab === tab.value
                ? 'bg-[rgba(18,136,7,0.15)] text-[#4ade80] border border-[rgba(18,136,7,0.3)]'
                : 'text-[var(--color-text-muted)] hover:text-white border border-transparent'
            }`}
          >
            {tab.label}
            <span className="ml-1.5 text-[12px] opacity-60">
              {tab.value === 'all'
                ? mcps.length
                : mcps.filter((m) => m.ownerType === tab.value).length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((mcp) => (
          <IndiaMCPCard key={mcp.id} mcp={mcp} />
        ))}
      </div>
    </>
  )
}
