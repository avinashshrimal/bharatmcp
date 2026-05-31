import Link from 'next/link'
import { COMPUTED_CATEGORIES } from '@/lib/all-projects'

// Map category slugs to their real counts
const getCategoryCount = (slug: string) => {
  const cat = COMPUTED_CATEGORIES.find(c => c.slug === slug)
  return cat?.project_count ?? 0
}

const categories = [
  {
    name: 'Developer Tools',
    count: getCategoryCount('developer-tools'),
    slug: 'developer-tools',
    color: '#3B82F6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'Finance',
    count: getCategoryCount('finance'),
    slug: 'finance',
    color: '#128807',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    name: 'Payments',
    count: getCategoryCount('payments'),
    slug: 'payments',
    color: '#F59E0B',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    name: 'AI & ML',
    count: getCategoryCount('ai-ml'),
    slug: 'ai-ml',
    color: '#8B5CF6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" />
        <path d="M9 21h6" />
        <path d="M10 17v4" />
        <path d="M14 17v4" />
      </svg>
    ),
  },
  {
    name: 'Productivity',
    count: getCategoryCount('productivity'),
    slug: 'productivity',
    color: '#FF6B00',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: 'Communication',
    count: getCategoryCount('communication'),
    slug: 'communication',
    color: '#3B82F6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    name: 'Government & Travel',
    count: getCategoryCount('government'),
    slug: 'government',
    color: '#128807',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    name: 'E-commerce',
    count: getCategoryCount('e-commerce'),
    slug: 'e-commerce',
    color: '#FF6B00',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
]

export default function CategoriesGrid() {
  return (
    <section className="py-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-heading font-bold text-2xl text-white">
          Browse by Category
        </h2>
        <Link
          href="/browse"
          className="text-[14px] text-[#94A3B8] hover:text-[#FF6B00] transition-colors"
        >
          View all →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="group flex flex-col items-center text-center rounded-[14px] border border-[#2A3654] bg-[#141C2E] px-4 py-5 transition-all duration-200 hover:border-[#FF6B00] hover:-translate-y-[2px]"
          >
            {/* Icon */}
            <div
              className="w-[44px] h-[44px] rounded-[10px] flex items-center justify-center mb-3"
              style={{
                background: `linear-gradient(135deg, ${cat.color}, ${cat.color}99)`,
                color: 'white',
              }}
            >
              {cat.icon}
            </div>
            {/* Name */}
            <span className="text-[14px] font-medium text-white mb-1">
              {cat.name}
            </span>
            {/* Count */}
            <span className="text-[12px] text-[#64748B]">
              {cat.count} MCPs
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
