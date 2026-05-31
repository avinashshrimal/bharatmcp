import type { Metadata } from 'next'
import { Suspense } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SearchBar from '@/components/search/SearchBar'
import FilterSidebar from '@/components/search/FilterSidebar'
import BrowseResults from '@/components/search/BrowseResults'

export const metadata: Metadata = {
  title: 'Browse MCPs — BharatMCP',
  description: 'Browse and search all MCP Servers, AI Skills, Agents and Workflows in the BharatMCP registry.',
}

export default function BrowsePage() {
  return (
    <>
      {/* Background Mesh */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 900px 600px at 10% 20%, rgba(255,107,0,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 700px 500px at 85% 70%, rgba(18,136,7,0.06) 0%, transparent 70%)
          `,
        }}
      />

      <Navbar />

      <main className="relative z-[1] pt-16">
        {/* Search Section */}
        <div className="pt-10">
          <SearchBar />
        </div>

        {/* Browse Content */}
        <div className="max-w-[1200px] mx-auto px-8 pb-16">
          <div className="flex gap-0 min-[900px]:gap-6">
            {/* Filter Sidebar — hidden below 900px */}
            <div className="hidden min-[900px]:block">
              <Suspense fallback={<div className="w-[240px]" />}>
                <FilterSidebar />
              </Suspense>
            </div>

            {/* Results */}
            <div className="flex-1 min-w-0">
              <Suspense fallback={<div className="text-[var(--color-text-muted)] text-sm py-8">Loading results...</div>}>
                <BrowseResults />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
