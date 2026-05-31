import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function AuthPage() {
  return (
    <>
      <Navbar />

      <main className="relative z-[1] pt-14 flex-1 flex items-center justify-center py-16">
        <div className="mx-auto w-full max-w-sm px-4">
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h1 className="text-xl font-semibold text-white text-center mb-6">
              Sign in to BharatMCP
            </h1>

            {/* GitHub OAuth */}
            <button className="w-full flex items-center justify-center gap-2.5 rounded-md bg-white text-black py-2.5 text-sm font-medium hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Continue with GitHub
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-[var(--color-border)]" />
              <span className="text-xs text-[var(--color-text-muted)]">or</span>
              <div className="flex-1 h-px bg-[var(--color-border)]" />
            </div>

            {/* Email/Password */}
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm text-[var(--color-text-secondary)] mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-navy)] px-3 py-2 text-sm text-white placeholder:text-[var(--color-text-muted)] outline-none focus:border-[#FF6B00] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm text-[var(--color-text-secondary)] mb-1.5">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-navy)] px-3 py-2 text-sm text-white placeholder:text-[var(--color-text-muted)] outline-none focus:border-[#FF6B00] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-[#FF6B00] py-2.5 text-sm font-medium text-white hover:bg-[#E05E00] transition-colors"
              >
                Sign in
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[var(--color-text-muted)]">
              Don&apos;t have an account?{' '}
              <a href="#" className="text-[#FF6B00] hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
