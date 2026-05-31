'use client'

import Link from 'next/link'

interface ProjectCardProps {
  name: string
  slug: string
  description: string
  creator: string
  category: string
  tags: string[]
  rating: number
  downloads: number
  verificationTier: 'bharatmcp_verified' | 'community_verified' | 'listed'
  iconColor: 'orange' | 'blue' | 'green' | 'gold' | 'purple'
}

const iconGradients: Record<ProjectCardProps['iconColor'], string> = {
  orange: 'linear-gradient(135deg, #FF6B00, #FF8520)',
  blue: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
  green: 'linear-gradient(135deg, #128807, #34A028)',
  gold: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
  purple: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
}

const verificationStyles: Record<
  ProjectCardProps['verificationTier'],
  { bg: string; text: string; border: string; label: string }
> = {
  bharatmcp_verified: {
    bg: 'rgba(255,107,0,0.1)',
    text: '#FF6B00',
    border: 'rgba(255,107,0,0.3)',
    label: 'Verified',
  },
  community_verified: {
    bg: 'rgba(18,136,7,0.1)',
    text: '#4ade80',
    border: 'rgba(18,136,7,0.3)',
    label: 'Community',
  },
  listed: {
    bg: 'rgba(255,255,255,0.05)',
    text: '#94A3B8',
    border: 'rgba(255,255,255,0.1)',
    label: 'Listed',
  },
}

function formatDownloads(count: number): string {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return count.toString()
}

export default function ProjectCard({
  name,
  slug,
  description,
  creator,
  category,
  tags,
  rating,
  downloads,
  verificationTier,
  iconColor,
}: ProjectCardProps) {
  const badge = verificationStyles[verificationTier]

  return (
    <Link
      href={`/project/${slug}`}
      className="group block rounded-[16px] border border-[#2A3654] bg-[#141C2E] p-5 transition-all duration-200 hover:border-[#FF6B00] hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(255,107,0,0.12)]"
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-[44px] h-[44px] rounded-[10px] flex items-center justify-center shrink-0"
          style={{ background: iconGradients[iconColor] }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-heading font-bold text-[16px] text-white truncate">
              {name}
            </h3>
            {/* Verification Badge */}
            <span
              className="shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{
                background: badge.bg,
                color: badge.text,
                border: `1px solid ${badge.border}`,
              }}
            >
              {badge.label}
            </span>
          </div>
          <p className="text-[12px] text-[#64748B]">{creator}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-[13px] text-[#94A3B8] leading-[1.5] line-clamp-2 mb-4">
        {description}
      </p>

      {/* Footer */}
      <div className="border-t border-[#2A3654] pt-3 flex items-center justify-between">
        {/* Tags */}
        <div className="flex gap-1.5 overflow-hidden">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full bg-[rgba(255,255,255,0.05)] text-[#94A3B8] border border-[rgba(255,255,255,0.08)] whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Rating */}
          <span className="flex items-center gap-1 text-[12px] text-[#94A3B8]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {rating}
          </span>
          {/* Downloads */}
          <span className="flex items-center gap-1 text-[12px] text-[#64748B]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {formatDownloads(downloads)}
          </span>
        </div>
      </div>
    </Link>
  )
}
