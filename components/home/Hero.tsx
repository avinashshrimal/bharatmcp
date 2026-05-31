'use client'

import Link from 'next/link'
import { useState } from 'react'
import HeroTerminal from './HeroTerminal'

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install -g bharatmcp')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative border-b border-[var(--color-border)]">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 -z-10 dot-grid-bg" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          {/* Left Column */}
          <div className="min-w-0">
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-normal text-white">
              India&apos;s registry for{' '}
              <span className="text-[#FF6B00]">MCP servers</span>.
            </h1>

            <p className="mt-5 max-w-lg text-lg text-[var(--color-text-secondary)]">
              Discover, install, and publish MCP Servers, AI Skills, Agents and Workflows. 250+ servers indexed. Open source.
            </p>

            {/* Terminal install block */}
            <div className="mt-8 w-full max-w-lg rounded-lg border border-white/15 bg-[#0d1117] p-3 shadow-xl">
              <div className="mb-2 flex items-center justify-between text-xs text-white/50">
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                    <path d="m7 11 2-2-2-2" />
                    <path d="M11 13h4" />
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  </svg>
                  <span>Install CLI</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 rounded px-1.5 py-0.5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  )}
                  <span className="text-[11px]">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <code className="block font-mono text-sm leading-relaxed text-white">
                npm install -g bharatmcp
              </code>
            </div>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/browse"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#FF6B00] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#FF6B00]/80 transition-colors"
              >
                Browse registry
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/category/india"
                className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] bg-transparent px-4 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition-colors"
              >
                India MCPs
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[var(--color-text-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[#4ade80]" />
                250+ servers
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[#FF6B00]" />
                12 India MCPs
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[#60a5fa]" />
                Open source
              </span>
            </div>
          </div>

          {/* Right Column - Animated terminal */}
          <div className="hidden lg:block">
            <HeroTerminal />
          </div>
        </div>
      </div>
    </section>
  )
}
