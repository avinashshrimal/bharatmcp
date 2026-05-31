'use client'

import { useState } from 'react'

interface DisclaimerBannerProps {
  riskLevel: 'safe' | 'caution' | 'grey-area'
  disclaimer: string
}

const riskConfig = {
  'safe': {
    bg: 'bg-green-500/5',
    border: 'border-green-500/20',
    icon: '✓',
    iconColor: 'text-green-400',
    title: 'Official API — Safe to Use',
    titleColor: 'text-green-400',
  },
  'caution': {
    bg: 'bg-yellow-500/5',
    border: 'border-yellow-500/20',
    icon: '⚠',
    iconColor: 'text-yellow-400',
    title: 'Automation Tool — Use with Caution',
    titleColor: 'text-yellow-400',
  },
  'grey-area': {
    bg: 'bg-red-500/5',
    border: 'border-red-500/20',
    icon: '⚠',
    iconColor: 'text-red-400',
    title: 'Grey Area — May Violate Terms of Service',
    titleColor: 'text-red-400',
  },
}

export default function DisclaimerBanner({ riskLevel, disclaimer }: DisclaimerBannerProps) {
  const [dismissed, setDismissed] = useState(false)
  const config = riskConfig[riskLevel]

  if (dismissed) return null

  return (
    <div className={`rounded-lg ${config.bg} border ${config.border} p-4 mb-8`}>
      <div className="flex items-start gap-3">
        <span className={`text-lg ${config.iconColor} shrink-0 mt-0.5`}>{config.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-4">
            <h4 className={`text-sm font-semibold ${config.titleColor}`}>{config.title}</h4>
            <button
              onClick={() => setDismissed(true)}
              className="text-[var(--color-text-muted)] hover:text-white text-xs shrink-0 cursor-pointer"
            >
              Dismiss
            </button>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] mt-1 leading-relaxed">
            {disclaimer}
          </p>
          {riskLevel !== 'safe' && (
            <p className="text-xs text-[var(--color-text-muted)] mt-2">
              BharatMCP lists this tool for informational purposes only. We do not endorse or encourage violation of any service&apos;s Terms of Service. Users are solely responsible for how they use these tools.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
