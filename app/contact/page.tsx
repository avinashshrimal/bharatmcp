import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="relative z-[1] pt-14">
        {/* Hero */}
        <section className="border-b border-[var(--color-border)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Contact Us</h1>
            <p className="text-[var(--color-text-secondary)] max-w-2xl">
              For enterprise inquiries, partnerships, or support — reach out and we&apos;ll respond
              within 24 hours.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@bharatmcp.in"
                    className="text-[var(--color-text-secondary)] hover:text-[#FF6B00] transition-colors"
                  >
                    hello@bharatmcp.in
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">
                    GitHub
                  </h3>
                  <a
                    href="https://github.com/bharatmcp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-[#FF6B00] transition-colors"
                  >
                    github.com/bharatmcp
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-white mb-1.5">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-navy)] px-3 py-2.5 text-sm text-white placeholder:text-[var(--color-text-muted)] outline-none focus:border-[#FF6B00] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-white mb-1.5">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-navy)] px-3 py-2.5 text-sm text-white placeholder:text-[var(--color-text-muted)] outline-none focus:border-[#FF6B00] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-white mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="How can we help?"
                      className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-navy)] px-3 py-2.5 text-sm text-white placeholder:text-[var(--color-text-muted)] outline-none focus:border-[#FF6B00] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#FF6B00] py-2.5 text-sm font-medium text-white hover:bg-[#E05E00] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
