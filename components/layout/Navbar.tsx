'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Browse', href: '/browse' },
  { label: 'India MCPs', href: '/category/india' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'Automation', href: '/automation' },
  { label: 'Docs', href: '/api-docs' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-14 border-b border-[var(--color-border)] bg-[#0A0F1E]/92 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - simple text */}
        <Link href="/" className="flex items-center gap-1.5 shrink-0">
          <span className="text-base font-semibold leading-none">
            <span className="text-white">Bharat</span>
            <span className="text-[#FF6B00]">MCP</span>
          </span>
        </Link>

        {/* Center nav links */}
        <div className="hidden min-[768px]:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden min-[768px]:flex items-center gap-3">
          <Link
            href="/submit"
            className="rounded-md border border-[var(--color-border)] px-3.5 py-1.5 text-sm font-medium text-white hover:bg-white/5 transition-colors"
          >
            Submit MCP
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="min-[768px]:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${
              mobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-opacity duration-200 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="min-[768px]:hidden absolute top-14 left-0 right-0 border-b border-[var(--color-border)] bg-[#0A0F1E]/95 backdrop-blur-md py-4 px-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors py-2 px-2 rounded-md hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-[var(--color-border)] my-2" />
            <Link
              href="/submit"
              className="text-sm font-medium text-white py-2 px-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Submit MCP
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
