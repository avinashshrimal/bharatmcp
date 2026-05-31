import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import ProjectCard from '@/components/project/ProjectCard'
import { ALL_PROJECTS, COMPUTED_CATEGORIES } from '@/lib/all-projects'

const iconColors: Array<'orange' | 'blue' | 'green' | 'gold' | 'purple'> = ['orange', 'blue', 'green', 'gold', 'purple']

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = COMPUTED_CATEGORIES.find(c => c.slug === slug)
  return {
    title: category ? `${category.name} MCPs` : 'Category',
    description: category?.description || 'Browse MCPs by category',
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const category = COMPUTED_CATEGORIES.find(c => c.slug === slug)
  const projects = ALL_PROJECTS.filter(p => p.category.slug === slug)
    .sort((a, b) => (b.download_count * b.rating) - (a.download_count * a.rating))

  return (
    <>
      <Navbar />

      <main className="relative z-[1] pt-16">
        <div className="max-w-[1200px] mx-auto px-6 py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[13px] text-[var(--color-text-muted)] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/browse" className="hover:text-white transition-colors">Browse</Link>
            <span>›</span>
            <span className="text-[var(--color-text-secondary)]">{category?.name || slug}</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-semibold text-white mb-3">
              {category?.name || slug}
            </h1>
            <p className="text-[var(--color-text-secondary)] max-w-2xl">
              {category?.description || `Browse all MCPs in the ${slug} category.`}
            </p>
            <p className="text-sm text-[var(--color-text-muted)] mt-3">
              {projects.length} {projects.length === 1 ? 'server' : 'servers'} available
            </p>
          </div>

          {/* Results Grid */}
          {projects.length > 0 ? (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
              {projects.map((project, index) => (
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
          ) : (
            <div className="text-center py-16">
              <h3 className="text-lg font-semibold text-white mb-2">No MCPs in this category yet</h3>
              <p className="text-[var(--color-text-muted)] text-sm mb-6">
                Be the first to submit an MCP in this category.
              </p>
              <Link
                href="/submit"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#FF6B00] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#FF6B00]/80 transition-colors"
              >
                Submit MCP
              </Link>
            </div>
          )}

          {/* Other Categories */}
          <div className="mt-16 pt-10 border-t border-[var(--color-border)]">
            <h2 className="text-lg font-semibold text-white mb-4">Other Categories</h2>
            <div className="flex flex-wrap gap-2">
              {COMPUTED_CATEGORIES.filter(c => c.slug !== slug && c.project_count > 0).map(c => (
                <Link
                  key={c.slug}
                  href={`/category/${c.slug}`}
                  className="text-[13px] px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[#FF6B00] hover:text-white transition-colors"
                >
                  {c.name} ({c.project_count})
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
