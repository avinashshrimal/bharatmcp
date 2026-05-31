'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import ProjectCard from '@/components/project/ProjectCard'
import FilterSidebar from '@/components/search/FilterSidebar'
import { ALL_PROJECTS } from '@/lib/all-projects'

const iconColors: Array<'orange' | 'blue' | 'green' | 'gold' | 'purple'> = [
  'orange', 'blue', 'green', 'gold', 'purple'
]

const typeTabs = [
  { label: 'All', value: 'all' },
  { label: 'MCP Servers', value: 'mcp' },
  { label: 'Skills', value: 'skill' },
  { label: 'Agents', value: 'agent' },
  { label: 'Workflows', value: 'workflow' },
]

const sortOptions = ['Trending', 'Newest', 'Most Stars', 'Most Downloads']

export default function BrowseResults() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const urlQuery = searchParams.get('q') || ''

  const [searchQuery, setSearchQuery] = useState(urlQuery)
  const [sortBy, setSortBy] = useState('Trending')
  const [activeType, setActiveType] = useState('all')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [page, setPage] = useState(1)
  const perPage = 24

  // Sync search input when URL changes
  useEffect(() => {
    setSearchQuery(urlQuery)
    setPage(1)
  }, [urlQuery])

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setPage(1)
    // Update URL without full navigation for shareable links
    const params = new URLSearchParams()
    if (value.trim()) params.set('q', value.trim())
    const newUrl = params.toString() ? `/browse?${params.toString()}` : '/browse'
    router.replace(newUrl, { scroll: false })
  }

  const filteredProjects = useMemo(() => {
    let projects = [...ALL_PROJECTS]

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      projects = projects.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.category.name.toLowerCase().includes(q) ||
        p.creator.username.toLowerCase().includes(q)
      )
    }

    // Filter by type
    if (activeType !== 'all') {
      projects = projects.filter(p => p.type === activeType)
    }

    // Sort
    switch (sortBy) {
      case 'Newest':
        projects.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        break
      case 'Most Stars':
        projects.sort((a, b) => b.star_count - a.star_count)
        break
      case 'Most Downloads':
        projects.sort((a, b) => b.download_count - a.download_count)
        break
      default: // Trending - sort by a mix of downloads and rating
        projects.sort((a, b) => (b.download_count * b.rating) - (a.download_count * a.rating))
    }

    return projects
  }, [activeType, sortBy, searchQuery])

  const paginatedProjects = filteredProjects.slice(0, page * perPage)
  const hasMore = paginatedProjects.length < filteredProjects.length

  return (
    <>
      {/* Search Input */}
      <div className="mb-6">
        <div
          className="flex items-center rounded-[10px] transition-all duration-200"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border-light)',
            padding: '4px 4px 4px 14px',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Filter results..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-[var(--color-text-muted)] mx-2.5 text-[14px]"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearchChange('')}
              className="shrink-0 mr-2 text-[var(--color-text-muted)] hover:text-white transition-colors cursor-pointer"
              aria-label="Clear search"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Type Tabs */}
      <div className="flex items-center gap-1 mb-6 overflow-x-auto pb-1">
        {typeTabs.map((tab) => {
          const count = tab.value === 'all'
            ? ALL_PROJECTS.length
            : ALL_PROJECTS.filter(p => p.type === tab.value).length
          return (
            <button
              key={tab.value}
              onClick={() => { setActiveType(tab.value); setPage(1) }}
              className={`px-4 py-2 text-[13px] font-body rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeType === tab.value
                  ? 'bg-[rgba(255,107,0,0.15)] text-[#FF6B00] border border-[rgba(255,107,0,0.3)] font-semibold'
                  : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] border border-transparent'
              }`}
            >
              {tab.label}
              <span className="ml-1.5 text-[11px] opacity-70">{count}</span>
            </button>
          )
        })}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-[14px] text-[var(--color-text-secondary)]">
            <span className="font-heading font-bold text-white">{filteredProjects.length}</span> results
            {searchQuery && (
              <span className="ml-1">
                for &ldquo;<span className="text-[#FF6B00]">{searchQuery}</span>&rdquo;
              </span>
            )}
          </span>

          {/* Mobile filter button */}
          <button
            className="min-[900px]:hidden px-3 py-1.5 text-[13px] text-[var(--color-text-secondary)] border border-[var(--color-border)] rounded-lg hover:border-[#FF6B00] hover:text-white transition-colors cursor-pointer"
            onClick={() => setMobileFilterOpen(true)}
          >
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="11" y1="18" x2="13" y2="18" />
              </svg>
              Filters
            </span>
          </button>
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-[13px] font-body text-[var(--color-text-secondary)] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-3 py-1.5 outline-none focus:border-[#FF6B00] cursor-pointer"
        >
          {sortOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        {paginatedProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            name={project.name}
            slug={project.slug}
            description={project.description}
            creator={project.creator.username}
            category={project.category.name}
            tags={project.tags}
            rating={project.rating}
            downloads={project.download_count}
            verificationTier={project.verification_tier}
            iconColor={iconColors[index % iconColors.length]}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="text-[40px] mb-3">🔍</div>
          <h3 className="text-lg font-semibold text-white mb-2">No results found</h3>
          <p className="text-[var(--color-text-muted)] text-sm">
            Try a different search term or clear your filters.
          </p>
        </div>
      )}

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setPage(p => p + 1)}
            className="px-6 py-2.5 text-[14px] font-body font-semibold text-white bg-[rgba(255,107,0,0.15)] border border-[rgba(255,107,0,0.3)] rounded-lg hover:bg-[rgba(255,107,0,0.25)] transition-colors cursor-pointer"
          >
            Load More ({filteredProjects.length - paginatedProjects.length} remaining)
          </button>
        </div>
      )}

      {/* Mobile Filter Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-[200] min-[900px]:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileFilterOpen(false)}
          />
          {/* Drawer */}
          <div className="absolute left-0 top-0 bottom-0 w-[280px] bg-[var(--color-navy)] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
              <h3 className="font-heading font-bold text-[16px] text-white">Filters</h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="text-[var(--color-text-muted)] hover:text-white cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <FilterSidebar className="!w-full !border-r-0" />
          </div>
        </div>
      )}
    </>
  )
}
