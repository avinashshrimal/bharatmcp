import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import SearchBar from '@/components/search/SearchBar'
import IndiaSpotlight from '@/components/home/IndiaSpotlight'
import TrendingSection from '@/components/home/TrendingSection'
import CategoriesGrid from '@/components/home/CategoriesGrid'
import RecipesPreview from '@/components/home/RecipesPreview'
import Footer from '@/components/layout/Footer'
import { COMPUTED_STATS, COMPUTED_CATEGORIES } from '@/lib/all-projects'
import { INDIA_MCPS } from '@/lib/india-mcps'
import { RECIPES } from '@/lib/recipes'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="pt-14">
        {/* Hero */}
        <Hero />

        {/* Search */}
        <section className="border-b border-[var(--color-border)] py-10">
          <SearchBar />
        </section>

        {/* India Spotlight */}
        <section className="border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <IndiaSpotlight />
          </div>
        </section>

        {/* Trending */}
        <section className="border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <TrendingSection />
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <CategoriesGrid />
          </div>
        </section>

        {/* Recipes Preview */}
        <section className="border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <RecipesPreview />
          </div>
        </section>

        {/* Stats - clean, no heavy styling */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <div>
                <div className="text-3xl font-semibold text-white">{COMPUTED_STATS.total_projects}+</div>
                <div className="mt-1 text-sm text-[var(--color-text-muted)]">MCP Servers</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-[#FF6B00]">{INDIA_MCPS.length}</div>
                <div className="mt-1 text-sm text-[var(--color-text-muted)]">India MCPs</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">{RECIPES.length}</div>
                <div className="mt-1 text-sm text-[var(--color-text-muted)]">Recipes</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">{COMPUTED_CATEGORIES.length}</div>
                <div className="mt-1 text-sm text-[var(--color-text-muted)]">Categories</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tricolor divider */}
        <div className="h-[3px]" style={{ background: 'linear-gradient(to right, #FF6B00 33.33%, #FFFFFF 33.33% 66.66%, #128807 66.66%)' }} />
      </main>

      <Footer />
    </>
  )
}
