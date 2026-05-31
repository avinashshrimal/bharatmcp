import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const categories = [
  'Finance & Payments',
  'Communication',
  'Developer Tools',
  'Data & Analytics',
  'AI & ML',
  'E-commerce',
  'Government & Public',
  'Healthcare',
  'Education',
  'Travel & Transport',
  'Media & Entertainment',
  'Productivity',
  'Social Media',
  'Cloud & Infrastructure',
  'Security',
  'IoT & Hardware',
  'Other',
]

const types = ['MCP Server', 'Skill', 'Agent', 'Workflow']

export default function SubmitPage() {
  return (
    <>
      <Navbar />

      <main className="relative z-[1] pt-14">
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-white mb-3">Submit an MCP Server</h1>
            <p className="text-[var(--color-text-secondary)] mb-10">
              Add your MCP server to the BharatMCP registry. We&apos;ll review it within 24 hours.
            </p>

            <form className="space-y-6">
              {/* GitHub URL */}
              <div>
                <label htmlFor="repo-url" className="block text-sm font-medium text-white mb-1.5">
                  GitHub Repository URL <span className="text-[#FF6B00]">*</span>
                </label>
                <input
                  id="repo-url"
                  type="url"
                  required
                  placeholder="https://github.com/username/repo"
                  className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-navy)] px-3 py-2.5 text-sm text-white placeholder:text-[var(--color-text-muted)] outline-none focus:border-[#FF6B00] transition-colors"
                />
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="My MCP Server"
                  className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-navy)] px-3 py-2.5 text-sm text-white placeholder:text-[var(--color-text-muted)] outline-none focus:border-[#FF6B00] transition-colors"
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-white mb-1.5">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Describe what your MCP server does..."
                  className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-navy)] px-3 py-2.5 text-sm text-white placeholder:text-[var(--color-text-muted)] outline-none focus:border-[#FF6B00] transition-colors resize-none"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-white mb-1.5">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-navy)] px-3 py-2.5 text-sm text-white outline-none focus:border-[#FF6B00] transition-colors"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type */}
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-white mb-1.5">
                  Type
                </label>
                <select
                  id="type"
                  className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-navy)] px-3 py-2.5 text-sm text-white outline-none focus:border-[#FF6B00] transition-colors"
                >
                  <option value="">Select a type</option>
                  {types.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tags */}
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-white mb-1.5">
                  Tags
                </label>
                <input
                  id="tags"
                  type="text"
                  placeholder="e.g. payments, india, razorpay"
                  className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-navy)] px-3 py-2.5 text-sm text-white placeholder:text-[var(--color-text-muted)] outline-none focus:border-[#FF6B00] transition-colors"
                />
                <p className="mt-1.5 text-xs text-[var(--color-text-muted)]">Comma separated</p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-md bg-[#FF6B00] py-2.5 text-sm font-medium text-white hover:bg-[#E05E00] transition-colors"
              >
                Submit for Review
              </button>

              <p className="text-xs text-[var(--color-text-muted)] text-center">
                By submitting, you agree to our terms of service.
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
