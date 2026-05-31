import Link from 'next/link'
import { INDIA_MCPS } from '@/lib/india-mcps'

const pills = [
  'Zerodha',
  'Razorpay',
  'Zomato',
  'BrowserStack',
  'UPI',
  'NSE/BSE',
  'WhatsApp',
  'AI4Bharat',
]

const tierStyles: Record<string, { bg: string; text: string; border: string; label: string }> = {
  official: {
    bg: 'rgba(18,136,7,0.1)',
    text: '#4ade80',
    border: 'rgba(18,136,7,0.3)',
    label: 'Official',
  },
  community: {
    bg: 'rgba(59,130,246,0.1)',
    text: '#60a5fa',
    border: 'rgba(59,130,246,0.3)',
    label: 'Community',
  },
}

export default function IndiaSpotlight() {
  // Show first 5 India MCPs
  const spotlightMCPs = INDIA_MCPS.slice(0, 5)

  return (
    <section className="py-16">
      <div
        className="relative rounded-[20px] border border-[rgba(18,136,7,0.3)] p-10 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0A1A0A, #0D2010)',
        }}
      >
        {/* Radial gradient overlay */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at right center, rgba(18,136,7,0.13), transparent 70%)',
          }}
        />

        {/* Two-column grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-[11px] font-semibold text-[#4ade80] uppercase tracking-[0.1em]">
                India Focus
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading font-extrabold text-[36px] leading-tight mb-4">
              <span className="text-white">Built for</span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #4ade80, #128807)',
                }}
              >
                Bharat First
              </span>
            </h2>

            {/* Description */}
            <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-6 max-w-md">
              Discover MCPs built specifically for Indian services, APIs, and platforms. From UPI payments to stock trading, food delivery to AI translation.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="px-3.5 py-1.5 rounded-full text-[12px] text-[#4ade80] border border-[rgba(18,136,7,0.3)] bg-[rgba(18,136,7,0.08)]"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/category/india"
              className="inline-flex items-center gap-2 w-fit px-5 py-2.5 rounded-full border border-[rgba(18,136,7,0.4)] text-[#4ade80] text-[14px] font-medium hover:bg-[rgba(18,136,7,0.1)] transition-colors"
            >
              View All India MCPs →
            </Link>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3">
            {spotlightMCPs.map((mcp) => {
              const style = tierStyles[mcp.ownerType]
              return (
                <Link
                  key={mcp.id}
                  href={`/india/${mcp.slug}`}
                  className="flex items-center gap-3.5 rounded-[12px] border border-[#2A3654] bg-[#141C2E] px-4 py-3.5 transition-all duration-200 hover:border-[rgba(18,136,7,0.5)] hover:translate-x-1"
                >
                  {/* Icon */}
                  <div
                    className="w-[36px] h-[36px] rounded-[8px] flex items-center justify-center shrink-0"
                    style={{
                      background: mcp.ownerType === 'official'
                        ? 'linear-gradient(135deg, #128807, #4ade80)'
                        : 'linear-gradient(135deg, #3B82F6, #60A5FA)',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-medium text-white truncate">
                      {mcp.name}
                    </p>
                    <p className="text-[12px] text-[#64748B] truncate">
                      {mcp.description}
                    </p>
                  </div>

                  {/* Badge */}
                  <span
                    className="shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{
                      background: style.bg,
                      color: style.text,
                      border: `1px solid ${style.border}`,
                    }}
                  >
                    {style.label}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
