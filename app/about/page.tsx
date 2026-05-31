import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="relative z-[1] pt-14">
        {/* Hero */}
        <section className="border-b border-[var(--color-border)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">About BharatMCP</h1>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-3xl leading-relaxed">
              India&apos;s largest open registry for MCP Servers, AI Skills, Agents, and Workflows. We make AI capabilities discoverable, installable, and shareable — with a focus on Indian developers and services.
            </p>
          </div>
        </section>

        {/* What is BharatMCP */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">What is BharatMCP?</h2>
            <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-4 max-w-3xl">
              <p>
                BharatMCP is a curated registry and package manager for the Model Context Protocol (MCP) ecosystem. Think of it as npm for AI integrations — a central place where developers can discover, install, and publish MCP servers that connect AI assistants to real-world tools and services.
              </p>
              <p>
                We host 250+ MCP servers across 17 categories, from payment gateways (Razorpay, Paytm, PhonePe) to government services (DigiLocker, IRCTC, Aadhaar), developer tools, healthcare APIs, and more. Every server is indexed, searchable, and installable with a single command.
              </p>
              <p>
                BharatMCP is open source, free to use, and community-driven. Our CLI tool integrates with Claude Desktop, Cursor, VS Code, and any MCP-compatible AI client. Publishers get analytics, verified badges, and visibility across the ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* What is MCP */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">What is MCP (Model Context Protocol)?</h2>
            <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-4 max-w-3xl">
              <p>
                The Model Context Protocol (MCP) is an open standard that lets AI assistants connect to external tools, APIs, and data sources. It was introduced by Anthropic and is now supported by multiple AI clients including Claude Desktop, Cursor, Windsurf, and VS Code.
              </p>
              <p>
                Without MCP, AI assistants are limited to their training data. With MCP, they can read your files, query databases, call APIs, process payments, book tickets — anything a developer builds a server for.
              </p>

              <p>
                An MCP server is a lightweight program that exposes tools and resources to AI clients via a standardized JSON-RPC protocol. For example, a Razorpay MCP server might expose tools like <code className="text-[#FF6B00] bg-[#FF6B00]/10 px-1.5 py-0.5 rounded text-xs">create_payment_link</code>, <code className="text-[#FF6B00] bg-[#FF6B00]/10 px-1.5 py-0.5 rounded text-xs">check_payment_status</code>, and <code className="text-[#FF6B00] bg-[#FF6B00]/10 px-1.5 py-0.5 rounded text-xs">list_refunds</code>.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <h3 className="text-lg font-semibold text-white mb-2">AI Client</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">Claude Desktop, Cursor, VS Code — the app you interact with</p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <h3 className="text-lg font-semibold text-white mb-2">MCP Server</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">A bridge that exposes tools and data to the AI client</p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <h3 className="text-lg font-semibold text-white mb-2">External Service</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">Razorpay, IRCTC, GitHub — the real-world API being accessed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why India needs its own registry */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Why India Needs Its Own Registry</h2>
            <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-4 max-w-3xl">
              <p>
                India has a unique digital ecosystem. UPI, Aadhaar, DigiLocker, IRCTC, GST portals, ONDC — these services don&apos;t exist anywhere else. Global MCP registries don&apos;t prioritize Indian services, and Indian developers building MCP servers for these platforms have no central place to publish and discover them.
              </p>
              <p>
                BharatMCP solves this by being India-first. We actively curate MCPs for Indian services, partner with Indian companies for official integrations, and provide a community where Indian developers can share and collaborate on AI tooling.
              </p>
              <p>
                That said, BharatMCP isn&apos;t India-only. We host MCPs from around the world. The &quot;India MCPs&quot; section is a curated spotlight, but the full registry is global.
              </p>
            </div>
          </div>
        </section>

        {/* How we source and verify */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">How We Source &amp; Verify MCPs</h2>
            <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-4 max-w-3xl mb-8">
              <p>
                We source MCPs from multiple channels: direct submissions from developers, GitHub crawling for open-source MCP servers, and partnerships with Indian companies who build official integrations.
              </p>
              <p>
                Every submission goes through a review process before being listed. We check for security issues, validate the manifest file, test basic functionality, and verify the author&apos;s identity for official badges.
              </p>
            </div>
            <h3 className="text-lg font-semibold text-white mb-4">Verification Tiers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border border-[#FF6B00]/30 bg-[#FF6B00]/5 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#FF6B00]">✓</span>
                  <h4 className="text-lg font-semibold text-white">Official</h4>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Published by the company itself (e.g., Razorpay publishing their own MCP). Verified identity, maintained by the service provider, guaranteed compatibility.
                </p>
              </div>
              <div className="rounded-lg border border-blue-500/30 bg-blue-500/5 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-400">◆</span>
                  <h4 className="text-lg font-semibold text-white">Community</h4>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Built by community developers. Code reviewed, security checked, and tested by our team. Active maintenance and responsive to issues.
                </p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[var(--color-text-muted)]">○</span>
                  <h4 className="text-lg font-semibold text-white">Listed</h4>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Passed basic validation and security checks. Not yet reviewed in depth. Use at your own discretion — check the source code before using in production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Roadmap</h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-3xl">
              BharatMCP is actively developed. Here&apos;s what we&apos;re working on next:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-green-400"></span>
                <div>
                  <h4 className="text-sm font-semibold text-white">Private registries for teams</h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">Host internal MCP servers within your organization with access controls.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-green-400"></span>
                <div>
                  <h4 className="text-sm font-semibold text-white">Webhooks &amp; event subscriptions</h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">Get notified when projects you follow are updated or new MCPs match your interests.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-yellow-400"></span>
                <div>
                  <h4 className="text-sm font-semibold text-white">MCP Playground</h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">Test MCP servers directly in the browser before installing them locally.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-yellow-400"></span>
                <div>
                  <h4 className="text-sm font-semibold text-white">Automated security scanning</h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">Continuous vulnerability scanning for all published servers with alerts to maintainers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-[var(--color-text-muted)]"></span>
                <div>
                  <h4 className="text-sm font-semibold text-white">Multi-language support</h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">Hindi, Tamil, Telugu, and other Indian language interfaces for the registry and docs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-[var(--color-text-muted)]"></span>
                <div>
                  <h4 className="text-sm font-semibold text-white">MCP Composer</h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">Visual tool to chain multiple MCP servers into workflows without writing code.</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-[var(--color-text-muted)] mt-6">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-1"></span> In progress &nbsp;
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-1"></span> Planned &nbsp;
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-text-muted)] mr-1"></span> Exploring
            </p>
          </div>
        </section>

        {/* How to Contribute */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">How to Contribute</h2>
            <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-4 max-w-3xl mb-8">
              <p>
                BharatMCP is a community project. There are many ways to contribute, whether you&apos;re a developer, designer, writer, or just someone who wants to help grow the ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <h3 className="text-lg font-semibold text-white mb-2">Publish an MCP Server</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">Built an integration for an Indian service? Publish it to the registry and help other developers.</p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <h3 className="text-lg font-semibold text-white mb-2">Report Issues</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">Found a bug in the CLI, website, or API? Open an issue on our GitHub repository.</p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <h3 className="text-lg font-semibold text-white mb-2">Write Documentation</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">Help improve guides, tutorials, and API docs. Good docs make the ecosystem accessible to everyone.</p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <h3 className="text-lg font-semibold text-white mb-2">Review &amp; Star Projects</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">Try out MCPs and leave honest reviews. Stars help surface quality projects for the community.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Contact</h2>
            <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed space-y-3">
              <p>Email: <a href="mailto:hello@bharatmcp.in" className="text-[#FF6B00] hover:underline">hello@bharatmcp.in</a></p>
              <p>GitHub: <a href="https://github.com/bharatmcp" className="text-[#FF6B00] hover:underline">github.com/bharatmcp</a></p>
              <p>Twitter: <a href="https://twitter.com/bharatmcp" className="text-[#FF6B00] hover:underline">@bharatmcp</a></p>
              <p>Discord: <a href="https://discord.gg/bharatmcp" className="text-[#FF6B00] hover:underline">discord.gg/bharatmcp</a></p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
