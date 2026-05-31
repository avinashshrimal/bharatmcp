import Link from 'next/link'
import ProjectCard from '@/components/project/ProjectCard'
import { TRENDING_PROJECTS } from '@/lib/all-projects'

const iconColors: Array<'orange' | 'blue' | 'green' | 'gold' | 'purple'> = [
  'orange', 'blue', 'green', 'gold', 'purple'
]

export default function TrendingSection() {
  const top6 = TRENDING_PROJECTS.slice(0, 6)
  return (
    <section className="py-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-heading font-bold text-2xl text-white">
          Trending <span className="text-[#FF6B00]">MCPs</span>
        </h2>
        <Link
          href="/browse"
          className="text-[14px] text-[#94A3B8] hover:text-[#FF6B00] transition-colors"
        >
          View all →
        </Link>
      </div>
      <p className="text-[14px] text-[#64748B] mb-8">Most popular this week</p>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        {top6.map((project, index) => (
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
    </section>
  )
}
