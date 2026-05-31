'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

const popularTags = ['Razorpay', 'GitHub', 'Zerodha', 'WhatsApp', 'IRCTC', 'Notion', 'Stripe']

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  // "/" keyboard shortcut to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/browse?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch()
    if (e.key === 'Escape') {
      setQuery('')
      inputRef.current?.blur()
    }
  }

  const handleTagClick = (tag: string) => {
    router.push(`/browse?q=${encodeURIComponent(tag)}`)
  }

  return (
    <div className="w-full max-w-[800px] mx-auto px-8 pb-[60px]">
      <div
        className="flex items-center rounded-[14px] transition-all duration-200"
        style={{
          background: 'var(--color-surface)',
          border: isFocused ? '1px solid var(--color-saffron)' : '1px solid var(--color-border-light)',
          padding: '6px 6px 6px 20px',
          boxShadow: isFocused ? '0 0 0 3px rgba(255, 107, 0, 0.15)' : 'none',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder="Search MCPs, Skills, Agents..."
          className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-[var(--color-text-muted)] mx-3"
          style={{ fontSize: '16px' }}
        />

        {/* "/" shortcut hint */}
        {!isFocused && !query && (
          <span className="hidden sm:flex items-center justify-center w-6 h-6 rounded border border-[var(--color-border)] text-[11px] text-[var(--color-text-muted)] mr-2 font-mono">/</span>
        )}

        <button
          onClick={handleSearch}
          className="shrink-0 text-white font-medium cursor-pointer transition-opacity duration-200 hover:opacity-90"
          style={{
            background: 'linear-gradient(135deg, #FF6B00 0%, #FF8520 100%)',
            padding: '10px 24px',
            borderRadius: '10px',
            border: 'none',
            fontSize: '14px',
          }}
        >
          Search
        </button>
      </div>

      {/* Popular Tags */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <span className="text-[13px] text-[var(--color-text-muted)]">Popular:</span>
        {popularTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className="cursor-pointer text-[12px] text-[var(--color-text-secondary)] transition-all duration-200 hover:border-saffron-500 hover:text-saffron-500"
            style={{
              padding: '4px 12px',
              borderRadius: '100px',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
