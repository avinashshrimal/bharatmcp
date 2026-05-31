import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const posts = [
  {
    title: 'Introducing BharatMCP',
    description:
      "India's first MCP registry is live. Here's what we built and why.",
    date: 'May 2025',
    tag: 'Announcement',
  },
  {
    title: 'Top 10 India MCPs You Should Know',
    description:
      'From Razorpay to Zerodha — the best MCPs for Indian developers.',
    date: 'May 2025',
    tag: 'Guide',
  },
  {
    title: 'How to Build Your Own MCP Server',
    description:
      'A step-by-step guide to creating and publishing an MCP server.',
    date: 'Coming soon',
    tag: 'Tutorial',
  },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="relative z-[1] pt-14">
        {/* Hero */}
        <section className="border-b border-[var(--color-border)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Blog</h1>
            <p className="text-[var(--color-text-secondary)] text-lg">
              Updates, guides, and announcements from the BharatMCP team.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <a
                  key={post.title}
                  href="#"
                  className="group rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[#FF6B00]/50 transition-colors"
                >
                  <span className="inline-block text-xs font-medium text-[#FF6B00] bg-[#FF6B00]/10 px-2 py-0.5 rounded mb-3">
                    {post.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FF6B00] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--color-text-muted)]">{post.date}</span>
                    <span className="text-sm text-[#FF6B00] group-hover:translate-x-0.5 transition-transform">
                      Read more →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
