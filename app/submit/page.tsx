'use client'

import { useState } from 'react'
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
  const [repoUrl, setRepoUrl] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')
  const [tags, setTags] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const title = `[Submit] ${name || 'New MCP'}`
    const body = `## MCP Submission

**GitHub Repository:** ${repoUrl}
**Name:** ${name}
**Type:** ${type}
**Category:** ${category}
**Tags:** ${tags}

**Description:**
${description}

---
Submitted via bharatmcp.in/submit`

    const issueUrl = `https://github.com/avinashshrimal/bharatmcp/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}&labels=submission`

    window.open(issueUrl, '_blank')
  }

  return (
    <>
      <Navbar />

      <main className="relative z-[1] pt-14">
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-white mb-3">Submit an MCP Server</h1>
            <p className="text-[var(--color-text-secondary)] mb-10">
              Add your MCP server to the BharatMCP registry. This will open a GitHub Issue for review — we&apos;ll add it within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* GitHub URL */}
              <div>
                <label htmlFor="repo-url" className="block text-sm font-medium text-white mb-1.5">
                  GitHub Repository URL <span className="text-[#FF6B00]">*</span>
                </label>
                <input
                  id="repo-url"
                  type="url"
                  required
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  placeholder="https://github.com/username/repo"
                  className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-navy)] px-3 py-2.5 text-sm text-white placeholder:text-[var(--color-text-muted)] outline-none focus:border-[#FF6B00] transition-colors"
                />
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1.5">
                  Name <span className="text-[#FF6B00]">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
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
                  value={type}
                  onChange={(e) => setType(e.target.value)}
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
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="e.g. payments, india, razorpay"
                  className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-navy)] px-3 py-2.5 text-sm text-white placeholder:text-[var(--color-text-muted)] outline-none focus:border-[#FF6B00] transition-colors"
                />
                <p className="mt-1.5 text-xs text-[var(--color-text-muted)]">Comma separated</p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-md bg-[#FF6B00] py-2.5 text-sm font-medium text-white hover:bg-[#E05E00] transition-colors cursor-pointer"
              >
                Submit for Review →
              </button>

              <p className="text-xs text-[var(--color-text-muted)] text-center">
                This opens a GitHub Issue on our repo. We&apos;ll review and add your MCP within 24 hours.
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
