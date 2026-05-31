import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative z-[1] pt-14 flex-1 flex items-center justify-center py-20">
        <div className="text-center px-4">
          <div className="text-[80px] font-bold text-[var(--color-border)] leading-none mb-4">404</div>
          <h1 className="text-2xl font-semibold text-white mb-3">Page not found</h1>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-md bg-[#FF6B00] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#FF6B00]/80 transition-colors"
            >
              Go home
            </Link>
            <Link
              href="/browse"
              className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition-colors"
            >
              Browse MCPs
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
