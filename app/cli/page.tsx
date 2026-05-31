import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function CLIPage() {
  return (
    <>
      <Navbar />

      <main className="relative z-[1] pt-14">
        {/* Hero */}
        <section className="border-b border-[var(--color-border)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">BharatMCP CLI</h1>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mb-6">
              The official command-line interface for the BharatMCP registry. Search, install, manage, and publish MCP servers directly from your terminal.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-[#FF6B00]/10 px-3 py-1 text-xs font-medium text-[#FF6B00]">v2.4.1 — Latest</span>
              <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">MIT License</span>
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">Node.js 18+</span>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Installation</h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Install the BharatMCP CLI globally using your preferred package manager. Requires Node.js 18 or higher.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">npm (recommended)</p>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm">
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-[#FF6B00]">npm install -g bharatmcp</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">bun</p>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm">
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-[#FF6B00]">bun add -g bharatmcp</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">yarn</p>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm">
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-[#FF6B00]">yarn global add bharatmcp</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-6">
              Verify your installation:
            </p>
            <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mt-3">
              <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp --version</span>{'\n'}
              <span className="text-[var(--color-text-secondary)]">bharatmcp/2.4.1 node/v20.11.0 linux-x64</span>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Quick Start</h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Get up and running in 5 steps. From installation to your first MCP server running locally.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold flex items-center justify-center">1</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Install the CLI</h3>
                  <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm">
                    <span className="text-[var(--color-text-muted)]">$</span> <span className="text-[#FF6B00]">npm install -g bharatmcp</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold flex items-center justify-center">2</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Authenticate (optional)</h3>
                  <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm">
                    <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp auth login</span>{'\n'}
                    <span className="text-[var(--color-text-secondary)]">✓ Opened browser for authentication{'\n'}✓ Logged in as @yourname</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold flex items-center justify-center">3</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Search for an MCP server</h3>
                  <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                    <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp search &quot;razorpay&quot;</span>{'\n\n'}
                    <span className="text-[var(--color-text-muted)]">  NAME              TYPE   STARS  VERIFIED{'\n'}</span>
                    <span className="text-white">  razorpay-mcp      mcp    189    ✓ official{'\n'}</span>
                    <span className="text-white">  upi-payment-mcp   mcp    64     community{'\n'}</span>
                    <span className="text-white">  stripe-india-mcp  mcp    42     listed</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold flex items-center justify-center">4</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Install a server</h3>
                  <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm">
                    <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp install razorpay-mcp</span>{'\n'}
                    <span className="text-[var(--color-text-secondary)]">✓ Installed razorpay-mcp@1.2.0{'\n'}✓ Added to ~/.bharatmcp/servers.json</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold flex items-center justify-center">5</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Use with your AI client</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3">The server is now available to any MCP-compatible client (Claude Desktop, Cursor, VS Code, etc.)</p>
                  <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm">
                    <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp list</span>{'\n'}
                    <span className="text-[var(--color-text-secondary)]">  razorpay-mcp  v1.2.0  ● running</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commands Reference */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-3">Commands Reference</h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-10">
              Complete reference for all available CLI commands, flags, and options.
            </p>

            {/* search */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-white mb-3">bharatmcp search</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Search the BharatMCP registry for MCP servers, skills, and agents. Supports filtering by type, category, and country of origin.
              </p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-4 overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">Usage:</span>{'\n'}
                <span className="text-white">  bharatmcp search &lt;query&gt; [options]</span>{'\n\n'}
                <span className="text-[var(--color-text-muted)]">Options:</span>{'\n'}
                <span className="text-[#FF6B00]">  --type</span>      <span className="text-[var(--color-text-secondary)]">&lt;string&gt;   Filter by type: mcp, skill, agent, workflow</span>{'\n'}
                <span className="text-[#FF6B00]">  --category</span>  <span className="text-[var(--color-text-secondary)]">&lt;string&gt;   Filter by category: finance, health, dev-tools...</span>{'\n'}
                <span className="text-[#FF6B00]">  --country</span>   <span className="text-[var(--color-text-secondary)]">&lt;string&gt;   Filter by country of origin (default: all)</span>{'\n'}
                <span className="text-[#FF6B00]">  --limit</span>     <span className="text-[var(--color-text-secondary)]">&lt;number&gt;   Max results to show (default: 20)</span>{'\n'}
                <span className="text-[#FF6B00]">  --json</span>      <span className="text-[var(--color-text-secondary)]">           Output results as JSON</span>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp search &quot;payment&quot; --type mcp --country india --limit 5</span>{'\n\n'}
                <span className="text-[var(--color-text-muted)]">  NAME              TYPE   STARS  VERIFIED{'\n'}</span>
                <span className="text-white">  razorpay-mcp      mcp    189    ✓ official{'\n'}</span>
                <span className="text-white">  upi-payment-mcp   mcp    64     community{'\n'}</span>
                <span className="text-white">  paytm-mcp         mcp    51     ✓ official{'\n'}</span>
                <span className="text-white">  phonepe-mcp       mcp    38     community{'\n'}</span>
                <span className="text-white">  stripe-india-mcp  mcp    42     listed</span>
              </div>
            </div>

            {/* install */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-white mb-3">bharatmcp install</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Install an MCP server from the registry to your local environment. Servers are stored in ~/.bharatmcp/servers/ and automatically registered with compatible AI clients.
              </p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-4 overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">Usage:</span>{'\n'}
                <span className="text-white">  bharatmcp install &lt;name&gt; [options]</span>{'\n\n'}
                <span className="text-[var(--color-text-muted)]">Options:</span>{'\n'}
                <span className="text-[#FF6B00]">  --global</span>    <span className="text-[var(--color-text-secondary)]">           Install globally (default behavior)</span>{'\n'}
                <span className="text-[#FF6B00]">  --save</span>      <span className="text-[var(--color-text-secondary)]">           Add to project&apos;s bharatmcp.json</span>{'\n'}
                <span className="text-[#FF6B00]">  --version</span>   <span className="text-[var(--color-text-secondary)]">&lt;string&gt;   Install a specific version (default: latest)</span>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp install razorpay-mcp --version 1.2.0</span>{'\n'}
                <span className="text-green-400">✓ Downloaded razorpay-mcp@1.2.0 (2.1 MB){'\n'}✓ Verified checksum{'\n'}✓ Installed to ~/.bharatmcp/servers/razorpay-mcp{'\n'}✓ Registered with Claude Desktop</span>
              </div>
            </div>

            {/* remove */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-white mb-3">bharatmcp remove</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Remove an installed MCP server from your local environment. This unregisters it from all AI clients and deletes local files.
              </p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-4 overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">Usage:</span>{'\n'}
                <span className="text-white">  bharatmcp remove &lt;name&gt; [options]</span>{'\n\n'}
                <span className="text-[var(--color-text-muted)]">Options:</span>{'\n'}
                <span className="text-[#FF6B00]">  --force</span>     <span className="text-[var(--color-text-secondary)]">           Skip confirmation prompt</span>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp remove razorpay-mcp</span>{'\n'}
                <span className="text-[var(--color-text-secondary)]">? Are you sure you want to remove razorpay-mcp? (y/N) </span><span className="text-white">y</span>{'\n'}
                <span className="text-green-400">✓ Removed razorpay-mcp{'\n'}✓ Unregistered from Claude Desktop</span>
              </div>
            </div>

            {/* list */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-white mb-3">bharatmcp list</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                List all MCP servers installed in your local environment with their status and version information.
              </p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-4 overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">Usage:</span>{'\n'}
                <span className="text-white">  bharatmcp list [options]</span>{'\n\n'}
                <span className="text-[var(--color-text-muted)]">Options:</span>{'\n'}
                <span className="text-[#FF6B00]">  --json</span>      <span className="text-[var(--color-text-secondary)]">           Output as JSON array</span>{'\n'}
                <span className="text-[#FF6B00]">  --verbose</span>   <span className="text-[var(--color-text-secondary)]">           Show detailed info (path, config, size)</span>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp list --verbose</span>{'\n\n'}
                <span className="text-[var(--color-text-muted)]">  NAME              VERSION  STATUS     SIZE    PATH{'\n'}</span>
                <span className="text-white">  razorpay-mcp      1.2.0    ● running   2.1MB   ~/.bharatmcp/servers/razorpay-mcp{'\n'}</span>
                <span className="text-white">  zerodha-mcp       0.9.1    ○ stopped   1.8MB   ~/.bharatmcp/servers/zerodha-mcp{'\n'}</span>
                <span className="text-white">  irctc-mcp         1.0.3    ● running   3.2MB   ~/.bharatmcp/servers/irctc-mcp</span>
              </div>
            </div>

            {/* update */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-white mb-3">bharatmcp update</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Update installed MCP servers to their latest versions. Can update a specific server or all servers at once.
              </p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-4 overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">Usage:</span>{'\n'}
                <span className="text-white">  bharatmcp update [name] [options]</span>{'\n\n'}
                <span className="text-[var(--color-text-muted)]">Options:</span>{'\n'}
                <span className="text-[#FF6B00]">  --all</span>       <span className="text-[var(--color-text-secondary)]">           Update all installed servers</span>{'\n'}
                <span className="text-[#FF6B00]">  --check</span>     <span className="text-[var(--color-text-secondary)]">           Check for updates without installing</span>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp update --all</span>{'\n'}
                <span className="text-green-400">✓ razorpay-mcp: 1.2.0 → 1.3.0{'\n'}</span>
                <span className="text-[var(--color-text-secondary)]">  zerodha-mcp: already up to date (0.9.1){'\n'}</span>
                <span className="text-green-400">✓ irctc-mcp: 1.0.3 → 1.1.0{'\n\n'}</span>
                <span className="text-[var(--color-text-secondary)]">Updated 2 of 3 servers.</span>
              </div>
            </div>

            {/* publish */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-white mb-3">bharatmcp publish</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Publish your MCP server to the BharatMCP registry. Requires authentication. Your server must include a valid bharatmcp.json manifest file.
              </p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-4 overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">Usage:</span>{'\n'}
                <span className="text-white">  bharatmcp publish [options]</span>{'\n\n'}
                <span className="text-[var(--color-text-muted)]">Requirements:</span>{'\n'}
                <span className="text-[var(--color-text-secondary)]">  • Must be authenticated (bharatmcp auth login){'\n'}</span>
                <span className="text-[var(--color-text-secondary)]">  • Must have a valid bharatmcp.json in project root{'\n'}</span>
                <span className="text-[var(--color-text-secondary)]">  • Package must pass validation checks</span>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp publish</span>{'\n'}
                <span className="text-[var(--color-text-secondary)]">Publishing my-awesome-mcp@1.0.0...{'\n'}</span>
                <span className="text-green-400">✓ Validated bharatmcp.json{'\n'}✓ Ran security checks{'\n'}✓ Packaged (4.2 MB){'\n'}✓ Uploaded to registry{'\n'}✓ Published my-awesome-mcp@1.0.0{'\n\n'}</span>
                <span className="text-[var(--color-text-secondary)]">View at: https://bharatmcp.in/project/my-awesome-mcp</span>
              </div>
            </div>

            {/* info */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-white mb-3">bharatmcp info</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Display detailed information about a specific MCP server from the registry, including version history, dependencies, and compatibility.
              </p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-4 overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">Usage:</span>{'\n'}
                <span className="text-white">  bharatmcp info &lt;name&gt;</span>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp info razorpay-mcp</span>{'\n\n'}
                <span className="text-[#FF6B00]">razorpay-mcp</span> <span className="text-[var(--color-text-muted)]">v1.3.0</span>{'\n'}
                <span className="text-[var(--color-text-secondary)]">Official Razorpay MCP server for payment processing{'\n\n'}</span>
                <span className="text-[var(--color-text-muted)]">Author:      </span><span className="text-white">Razorpay Engineering{'\n'}</span>
                <span className="text-[var(--color-text-muted)]">License:     </span><span className="text-white">MIT{'\n'}</span>
                <span className="text-[var(--color-text-muted)]">Stars:       </span><span className="text-white">189{'\n'}</span>
                <span className="text-[var(--color-text-muted)]">Installs:    </span><span className="text-white">2,340{'\n'}</span>
                <span className="text-[var(--color-text-muted)]">Category:    </span><span className="text-white">Finance{'\n'}</span>
                <span className="text-[var(--color-text-muted)]">Verified:    </span><span className="text-green-400">✓ Official{'\n'}</span>
                <span className="text-[var(--color-text-muted)]">Compatible:  </span><span className="text-white">Claude Desktop, Cursor, VS Code{'\n'}</span>
                <span className="text-[var(--color-text-muted)]">Homepage:    </span><span className="text-blue-400">https://bharatmcp.in/project/razorpay-mcp</span>
              </div>
            </div>

            {/* config */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-white mb-3">bharatmcp config</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                View or modify CLI configuration. Settings are stored in ~/.bharatmcp/config.json.
              </p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-4 overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">Usage:</span>{'\n'}
                <span className="text-white">  bharatmcp config get &lt;key&gt;</span>{'\n'}
                <span className="text-white">  bharatmcp config set &lt;key&gt; &lt;value&gt;</span>{'\n'}
                <span className="text-white">  bharatmcp config list</span>{'\n'}
                <span className="text-white">  bharatmcp config reset</span>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp config list</span>{'\n\n'}
                <span className="text-[var(--color-text-muted)]">  registry   </span><span className="text-white">https://registry.bharatmcp.in{'\n'}</span>
                <span className="text-[var(--color-text-muted)]">  format     </span><span className="text-white">table{'\n'}</span>
                <span className="text-[var(--color-text-muted)]">  autoupdate </span><span className="text-white">true{'\n'}</span>
                <span className="text-[var(--color-text-muted)]">  telemetry  </span><span className="text-white">false</span>
              </div>
            </div>

            {/* auth */}
            <div className="mb-0">
              <h3 className="text-lg font-semibold text-white mb-3">bharatmcp auth</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Manage authentication with the BharatMCP registry. Required for publishing and accessing private servers.
              </p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-4 overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">Usage:</span>{'\n'}
                <span className="text-white">  bharatmcp auth login</span>    <span className="text-[var(--color-text-muted)]">  # Opens browser for OAuth</span>{'\n'}
                <span className="text-white">  bharatmcp auth logout</span>   <span className="text-[var(--color-text-muted)]">  # Clear stored credentials</span>{'\n'}
                <span className="text-white">  bharatmcp auth status</span>   <span className="text-[var(--color-text-muted)]">  # Show current auth state</span>{'\n'}
                <span className="text-white">  bharatmcp auth token</span>    <span className="text-[var(--color-text-muted)]">  # Print current token (for CI)</span>
              </div>
              <p className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Example</p>
              <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp auth login</span>{'\n'}
                <span className="text-[var(--color-text-secondary)]">Opening browser for authentication...{'\n'}</span>
                <span className="text-green-400">✓ Authenticated as @priya-dev{'\n'}✓ Token stored in ~/.bharatmcp/credentials</span>
              </div>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Configuration</h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
              The CLI stores its configuration at <code className="text-[#FF6B00] bg-[#FF6B00]/10 px-1.5 py-0.5 rounded text-xs">~/.bharatmcp/config.json</code>. You can edit this file directly or use the <code className="text-[#FF6B00] bg-[#FF6B00]/10 px-1.5 py-0.5 rounded text-xs">bharatmcp config</code> command.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">Config File Structure</h3>
            <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm mb-8 overflow-x-auto">
              <pre className="text-[var(--color-text-secondary)]">{`{
  "registry": "https://registry.bharatmcp.in",
  "format": "table",
  "autoupdate": true,
  "telemetry": false,
  "defaultType": "mcp",
  "installPath": "~/.bharatmcp/servers"
}`}</pre>
            </div>

            <h3 className="text-lg font-semibold text-white mb-3">Available Settings</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[var(--color-border)] rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[var(--color-surface)]">
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Setting</th>
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Default</th>
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">registry</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">https://registry.bharatmcp.in</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Registry URL for all API calls</td></tr>
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">format</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">table</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Default output format (table, json, minimal)</td></tr>
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">autoupdate</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">true</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Auto-check for CLI updates on startup</td></tr>
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">telemetry</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">false</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Send anonymous usage statistics</td></tr>
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">installPath</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">~/.bharatmcp/servers</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Where servers are installed locally</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mb-3 mt-8">Environment Variables</h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Environment variables override config file settings. Useful for CI/CD pipelines.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[var(--color-border)] rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[var(--color-surface)]">
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Variable</th>
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">BHARATMCP_TOKEN</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Authentication token (overrides stored credentials)</td></tr>
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">BHARATMCP_REGISTRY</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Custom registry URL (for enterprise/self-hosted)</td></tr>
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">BHARATMCP_NO_TELEMETRY</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Disable telemetry (set to &quot;1&quot; or &quot;true&quot;)</td></tr>
                  <tr><td className="px-4 py-3 text-[#FF6B00] font-mono">BHARATMCP_CONFIG_DIR</td><td className="px-4 py-3 text-[var(--color-text-secondary)]">Custom config directory path</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Real-World Examples</h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Search and install a payment MCP</h3>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                  <span className="text-[var(--color-text-muted)]"># Find payment-related MCPs for India</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp search &quot;payment&quot; --country india --type mcp</span>{'\n\n'}
                  <span className="text-[var(--color-text-muted)]"># Get details on the one you want</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp info razorpay-mcp</span>{'\n\n'}
                  <span className="text-[var(--color-text-muted)]"># Install it</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp install razorpay-mcp</span>{'\n'}
                  <span className="text-green-400">✓ Installed razorpay-mcp@1.3.0</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Publish your first MCP server</h3>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                  <span className="text-[var(--color-text-muted)]"># Login first</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp auth login</span>{'\n\n'}
                  <span className="text-[var(--color-text-muted)]"># Make sure you have a bharatmcp.json in your project</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">cat bharatmcp.json</span>{'\n'}
                  <span className="text-[var(--color-text-secondary)]">{`{
  "name": "my-weather-mcp",
  "version": "1.0.0",
  "description": "Weather data for Indian cities",
  "type": "mcp",
  "category": "utilities",
  "country": "india",
  "entry": "./dist/index.js"
}`}</span>{'\n\n'}
                  <span className="text-[var(--color-text-muted)]"># Publish to the registry</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp publish</span>{'\n'}
                  <span className="text-green-400">✓ Published my-weather-mcp@1.0.0</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Use with Claude Desktop</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                  After installing an MCP server, it&apos;s automatically registered with Claude Desktop if detected. You can also manually configure it:
                </p>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                  <span className="text-[var(--color-text-muted)]"># Install and auto-register with Claude Desktop</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp install razorpay-mcp</span>{'\n'}
                  <span className="text-green-400">✓ Installed razorpay-mcp@1.3.0{'\n'}✓ Auto-detected Claude Desktop{'\n'}✓ Added to ~/Library/Application Support/Claude/claude_desktop_config.json</span>{'\n\n'}
                  <span className="text-[var(--color-text-muted)]"># Verify it&apos;s registered</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp list</span>{'\n'}
                  <span className="text-[var(--color-text-secondary)]">  razorpay-mcp  v1.3.0  ● running  (Claude Desktop)</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Use with Cursor</h3>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                  <span className="text-[var(--color-text-muted)]"># Install with Cursor integration</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp install zerodha-mcp</span>{'\n'}
                  <span className="text-green-400">✓ Installed zerodha-mcp@0.9.1{'\n'}✓ Auto-detected Cursor{'\n'}✓ Added to ~/.cursor/mcp.json</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Use with VS Code</h3>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                  <span className="text-[var(--color-text-muted)]"># Install with VS Code MCP extension support</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp install irctc-mcp</span>{'\n'}
                  <span className="text-green-400">✓ Installed irctc-mcp@1.0.3{'\n'}✓ Auto-detected VS Code{'\n'}✓ Added to .vscode/mcp.json</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Troubleshooting</h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Common issues and their solutions. If you&apos;re still stuck, open an issue on GitHub or reach out on Discord.
            </p>

            <div className="space-y-6">
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Command not found: bharatmcp</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                  This usually means the global npm bin directory isn&apos;t in your PATH.
                </p>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                  <span className="text-[var(--color-text-muted)]"># Check where npm installs global packages</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">npm config get prefix</span>{'\n\n'}
                  <span className="text-[var(--color-text-muted)]"># Add to your shell profile (~/.bashrc, ~/.zshrc)</span>{'\n'}
                  <span className="text-white">export PATH=&quot;$(npm config get prefix)/bin:$PATH&quot;</span>
                </div>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <h3 className="text-lg font-semibold text-white mb-2">EACCES: permission denied</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                  Permission errors when installing globally. Don&apos;t use sudo — fix npm permissions instead.
                </p>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                  <span className="text-[var(--color-text-muted)]"># Option 1: Change npm&apos;s default directory</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">mkdir ~/.npm-global</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">npm config set prefix &apos;~/.npm-global&apos;</span>{'\n\n'}
                  <span className="text-[var(--color-text-muted)]"># Option 2: Use a Node version manager (nvm, fnm)</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">curl -fsSL https://fnm.vercel.app/install | bash</span>
                </div>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Network timeout / ETIMEDOUT</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                  Connection issues when reaching the registry. Check your network or configure a proxy.
                </p>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                  <span className="text-[var(--color-text-muted)]"># Set HTTP proxy</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp config set proxy http://proxy.company.com:8080</span>{'\n\n'}
                  <span className="text-[var(--color-text-muted)]"># Or use environment variable</span>{'\n'}
                  <span className="text-white">export HTTPS_PROXY=http://proxy.company.com:8080</span>
                </div>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Version conflict: server requires newer runtime</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                  Some MCP servers require a specific Node.js version. Check compatibility before installing.
                </p>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                  <span className="text-[var(--color-text-muted)]"># Check server requirements</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp info some-mcp | grep &quot;Node&quot;</span>{'\n'}
                  <span className="text-[var(--color-text-secondary)]">  Node.js:  &gt;=20.0.0</span>{'\n\n'}
                  <span className="text-[var(--color-text-muted)]"># Update Node.js if needed</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">fnm install 20</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">fnm use 20</span>
                </div>
              </div>

              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Authentication failed</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                  Token expired or invalid. Re-authenticate to get a fresh token.
                </p>
                <div className="rounded-lg border border-[var(--color-border)] bg-[#0a0e1a] p-4 font-mono text-sm overflow-x-auto">
                  <span className="text-[var(--color-text-muted)]"># Clear old credentials and re-login</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp auth logout</span>{'\n'}
                  <span className="text-[var(--color-text-muted)]">$</span> <span className="text-white">bharatmcp auth login</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
