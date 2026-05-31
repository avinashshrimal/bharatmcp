import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // --- Categories ---
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'developer-tools' },
      update: {},
      create: {
        name: 'Developer Tools',
        slug: 'developer-tools',
        description: 'Tools for software development, version control, CI/CD, and code management',
        color: '#3B82F6',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'finance' },
      update: {},
      create: {
        name: 'Finance',
        slug: 'finance',
        description: 'Stock trading, portfolio management, and financial data services',
        color: '#10B981',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'payments' },
      update: {},
      create: {
        name: 'Payments',
        slug: 'payments',
        description: 'Payment gateways, UPI, and transaction processing tools',
        color: '#8B5CF6',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'ai-ml' },
      update: {},
      create: {
        name: 'AI & ML',
        slug: 'ai-ml',
        description: 'Artificial intelligence, machine learning models, and inference APIs',
        color: '#F59E0B',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'productivity' },
      update: {},
      create: {
        name: 'Productivity',
        slug: 'productivity',
        description: 'Note-taking, project management, and workflow automation tools',
        color: '#EC4899',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'communication' },
      update: {},
      create: {
        name: 'Communication',
        slug: 'communication',
        description: 'Messaging, email, and team collaboration platforms',
        color: '#06B6D4',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'government' },
      update: {},
      create: {
        name: 'Government',
        slug: 'government',
        description: 'Government services, public data, and civic technology integrations',
        color: '#F97316',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'e-commerce' },
      update: {},
      create: {
        name: 'E-commerce',
        slug: 'e-commerce',
        description: 'Online shopping, inventory management, and marketplace integrations',
        color: '#EF4444',
      },
    }),
  ])

  const [devTools, finance, payments, aiMl, productivity, communication, government] = categories

  console.log(`✅ Created ${categories.length} categories`)

  // --- Tags ---
  const tagNames = [
    'git', 'payments', 'india', 'trading', 'stocks',
    'email', 'messaging', 'automation', 'api', 'government',
    'upi', 'fintech', 'ai', 'productivity', 'open-source',
  ]

  const tags: Record<string, { id: string }> = {}
  for (const name of tagNames) {
    const tag = await prisma.tag.upsert({
      where: { slug: name },
      update: {},
      create: { name, slug: name },
    })
    tags[name] = tag
  }

  console.log(`✅ Created ${tagNames.length} tags`)

  // --- Admin User ---
  const adminUser = await prisma.user.upsert({
    where: { username: 'bharatmcp' },
    update: {},
    create: {
      username: 'bharatmcp',
      email: 'admin@bharatmcp.in',
      name: 'BharatMCP',
      role: 'ADMIN',
      bio: 'Official BharatMCP admin account. Curating the best MCPs for Indian developers.',
    },
  })

  console.log(`✅ Created admin user: ${adminUser.username}`)

  // --- Projects ---
  const projectsData = [
    {
      name: 'GitHub MCP',
      slug: 'github-mcp',
      description: 'Model Context Protocol server for GitHub. Manage repositories, issues, pull requests, and code reviews directly from your AI assistant.',
      longDescription: 'The GitHub MCP provides seamless integration with GitHub APIs, allowing AI assistants to create repos, manage issues, review PRs, and automate workflows. Perfect for developers who want to streamline their GitHub workflow.',
      githubUrl: 'https://github.com/modelcontextprotocol/servers',
      installCommand: 'npx @modelcontextprotocol/server-github',
      version: '1.2.0',
      license: 'MIT',
      type: 'MCP' as const,
      country: 'global',
      verificationTier: 'BHARATMCP_VERIFIED' as const,
      downloadCount: 15000,
      installCount: 12500,
      starCount: 890,
      rating: 4.8,
      reviewCount: 124,
      isVerified: true,
      isFeatured: true,
      status: 'APPROVED' as const,
      categoryId: devTools.id,
      tagSlugs: ['git', 'api', 'open-source', 'automation'],
    },
    {
      name: 'Slack MCP',
      slug: 'slack-mcp',
      description: 'Connect your AI assistant to Slack. Send messages, manage channels, and automate team communication workflows.',
      longDescription: 'The Slack MCP enables AI assistants to interact with Slack workspaces. Send and read messages, create channels, manage users, and build powerful automation workflows for team communication.',
      githubUrl: 'https://github.com/modelcontextprotocol/servers',
      installCommand: 'npx @modelcontextprotocol/server-slack',
      version: '1.0.3',
      license: 'MIT',
      type: 'MCP' as const,
      country: 'global',
      verificationTier: 'BHARATMCP_VERIFIED' as const,
      downloadCount: 9800,
      installCount: 8200,
      starCount: 560,
      rating: 4.6,
      reviewCount: 89,
      isVerified: true,
      isFeatured: true,
      status: 'APPROVED' as const,
      categoryId: communication.id,
      tagSlugs: ['messaging', 'automation', 'api'],
    },
    {
      name: 'Razorpay MCP',
      slug: 'razorpay-mcp',
      description: 'Integrate Razorpay payment gateway with your AI assistant. Process payments, manage refunds, and track transactions for Indian businesses.',
      longDescription: 'The Razorpay MCP brings India\'s leading payment gateway to AI assistants. Handle UPI payments, manage subscriptions, process refunds, and generate payment links — all through natural language commands.',
      githubUrl: 'https://github.com/bharatmcp/razorpay-mcp',
      installCommand: 'npx @bharatmcp/razorpay-mcp',
      version: '0.9.1',
      license: 'MIT',
      type: 'MCP' as const,
      country: 'india',
      verificationTier: 'BHARATMCP_VERIFIED' as const,
      downloadCount: 7500,
      installCount: 6100,
      starCount: 420,
      rating: 4.7,
      reviewCount: 67,
      isVerified: true,
      isFeatured: true,
      status: 'APPROVED' as const,
      categoryId: payments.id,
      tagSlugs: ['payments', 'india', 'upi', 'fintech', 'api'],
    },
    {
      name: 'Notion MCP',
      slug: 'notion-mcp',
      description: 'Access and manage your Notion workspace through AI. Create pages, update databases, and organize your knowledge base effortlessly.',
      longDescription: 'The Notion MCP connects AI assistants to your Notion workspace. Create and edit pages, query databases, manage properties, and build automated workflows for your team\'s knowledge management.',
      githubUrl: 'https://github.com/modelcontextprotocol/servers',
      installCommand: 'npx @modelcontextprotocol/server-notion',
      version: '1.1.0',
      license: 'MIT',
      type: 'MCP' as const,
      country: 'global',
      verificationTier: 'COMMUNITY_VERIFIED' as const,
      downloadCount: 11200,
      installCount: 9400,
      starCount: 670,
      rating: 4.5,
      reviewCount: 98,
      isVerified: false,
      isFeatured: false,
      status: 'APPROVED' as const,
      categoryId: productivity.id,
      tagSlugs: ['productivity', 'automation', 'api'],
    },
    {
      name: 'Zerodha Kite MCP',
      slug: 'zerodha-kite-mcp',
      description: 'Trade stocks on Zerodha Kite through your AI assistant. Place orders, track portfolio, and get real-time market data from NSE/BSE.',
      longDescription: 'The Zerodha Kite MCP enables AI-powered stock trading on India\'s largest discount broker. Place buy/sell orders, monitor your portfolio, set alerts, and access real-time market data from NSE and BSE exchanges.',
      githubUrl: 'https://github.com/bharatmcp/zerodha-kite-mcp',
      installCommand: 'npx @bharatmcp/zerodha-kite-mcp',
      version: '0.8.0',
      license: 'Apache-2.0',
      type: 'MCP' as const,
      country: 'india',
      verificationTier: 'BHARATMCP_VERIFIED' as const,
      downloadCount: 5200,
      installCount: 4100,
      starCount: 380,
      rating: 4.9,
      reviewCount: 52,
      isVerified: true,
      isFeatured: true,
      status: 'APPROVED' as const,
      categoryId: finance.id,
      tagSlugs: ['trading', 'stocks', 'india', 'fintech', 'api'],
    },
    {
      name: 'Gmail MCP',
      slug: 'gmail-mcp',
      description: 'Manage your Gmail inbox with AI. Read, compose, and organize emails without leaving your development environment.',
      longDescription: 'The Gmail MCP provides full access to Gmail functionality through AI assistants. Read and search emails, compose and send messages, manage labels, and automate email workflows for improved productivity.',
      githubUrl: 'https://github.com/modelcontextprotocol/servers',
      installCommand: 'npx @modelcontextprotocol/server-gmail',
      version: '1.0.1',
      license: 'MIT',
      type: 'MCP' as const,
      country: 'global',
      verificationTier: 'COMMUNITY_VERIFIED' as const,
      downloadCount: 8900,
      installCount: 7300,
      starCount: 510,
      rating: 4.3,
      reviewCount: 76,
      isVerified: false,
      isFeatured: false,
      status: 'APPROVED' as const,
      categoryId: communication.id,
      tagSlugs: ['email', 'automation', 'productivity', 'api'],
    },
    {
      name: 'NSE Live Data MCP',
      slug: 'nse-live-data-mcp',
      description: 'Get real-time stock market data from the National Stock Exchange of India. Track indices, stock prices, and market trends.',
      longDescription: 'The NSE Live Data MCP provides real-time and historical market data from the National Stock Exchange. Access live stock prices, index values, option chains, and corporate announcements for informed trading decisions.',
      githubUrl: 'https://github.com/bharatmcp/nse-live-mcp',
      installCommand: 'npx @bharatmcp/nse-live-mcp',
      version: '0.7.2',
      license: 'MIT',
      type: 'MCP' as const,
      country: 'india',
      verificationTier: 'COMMUNITY_VERIFIED' as const,
      downloadCount: 4300,
      installCount: 3500,
      starCount: 290,
      rating: 4.4,
      reviewCount: 41,
      isVerified: false,
      isFeatured: false,
      status: 'APPROVED' as const,
      categoryId: finance.id,
      tagSlugs: ['stocks', 'trading', 'india', 'fintech'],
    },
    {
      name: 'IRCTC MCP',
      slug: 'irctc-mcp',
      description: 'Check train availability, PNR status, and live running status through Indian Railways IRCTC integration.',
      longDescription: 'The IRCTC MCP connects to Indian Railways services. Check seat availability, get PNR status updates, view live train running status, and search for trains between stations — all through your AI assistant.',
      githubUrl: 'https://github.com/bharatmcp/irctc-mcp',
      installCommand: 'npx @bharatmcp/irctc-mcp',
      version: '0.5.0',
      license: 'MIT',
      type: 'MCP' as const,
      country: 'india',
      verificationTier: 'LISTED' as const,
      downloadCount: 3100,
      installCount: 2400,
      starCount: 210,
      rating: 4.1,
      reviewCount: 33,
      isVerified: false,
      isFeatured: false,
      status: 'APPROVED' as const,
      categoryId: government.id,
      tagSlugs: ['india', 'government', 'api'],
    },
    {
      name: 'Stripe MCP',
      slug: 'stripe-mcp',
      description: 'Process payments globally with Stripe through your AI assistant. Manage subscriptions, invoices, and customer billing.',
      longDescription: 'The Stripe MCP enables AI assistants to interact with Stripe\'s payment infrastructure. Create payment intents, manage subscriptions, handle refunds, and generate invoices for global businesses.',
      githubUrl: 'https://github.com/modelcontextprotocol/servers',
      installCommand: 'npx @modelcontextprotocol/server-stripe',
      version: '1.3.0',
      license: 'MIT',
      type: 'MCP' as const,
      country: 'global',
      verificationTier: 'BHARATMCP_VERIFIED' as const,
      downloadCount: 13500,
      installCount: 11000,
      starCount: 780,
      rating: 4.7,
      reviewCount: 112,
      isVerified: true,
      isFeatured: true,
      status: 'APPROVED' as const,
      categoryId: payments.id,
      tagSlugs: ['payments', 'api', 'automation'],
    },
    {
      name: 'DigiLocker MCP',
      slug: 'digilocker-mcp',
      description: 'Access DigiLocker documents through AI. Retrieve Aadhaar, PAN, driving license, and other government-issued documents.',
      longDescription: 'The DigiLocker MCP integrates with India\'s digital document wallet. Access and verify government-issued documents like Aadhaar, PAN card, driving license, and educational certificates through your AI assistant.',
      githubUrl: 'https://github.com/bharatmcp/digilocker-mcp',
      installCommand: 'npx @bharatmcp/digilocker-mcp',
      version: '0.4.0',
      license: 'MIT',
      type: 'MCP' as const,
      country: 'india',
      verificationTier: 'LISTED' as const,
      downloadCount: 2100,
      installCount: 1600,
      starCount: 150,
      rating: 4.0,
      reviewCount: 22,
      isVerified: false,
      isFeatured: false,
      status: 'APPROVED' as const,
      categoryId: government.id,
      tagSlugs: ['india', 'government', 'api'],
    },
    {
      name: 'UPI Payment MCP',
      slug: 'upi-payment-mcp',
      description: 'Send and receive UPI payments through AI. Generate payment links, check transaction status, and manage VPAs.',
      longDescription: 'The UPI Payment MCP enables AI-powered UPI transactions. Generate QR codes, create payment links, verify VPAs, check transaction status, and manage collect requests — built for India\'s digital payment ecosystem.',
      githubUrl: 'https://github.com/bharatmcp/upi-mcp',
      installCommand: 'npx @bharatmcp/upi-mcp',
      version: '0.6.1',
      license: 'MIT',
      type: 'MCP' as const,
      country: 'india',
      verificationTier: 'COMMUNITY_VERIFIED' as const,
      downloadCount: 4800,
      installCount: 3900,
      starCount: 320,
      rating: 4.2,
      reviewCount: 45,
      isVerified: false,
      isFeatured: false,
      status: 'APPROVED' as const,
      categoryId: payments.id,
      tagSlugs: ['upi', 'payments', 'india', 'fintech'],
    },
    {
      name: 'OpenAI MCP',
      slug: 'openai-mcp',
      description: 'Access OpenAI models and APIs through MCP. Generate text, images, embeddings, and use function calling capabilities.',
      longDescription: 'The OpenAI MCP provides access to OpenAI\'s suite of AI models. Generate completions with GPT-4, create images with DALL-E, compute embeddings, and leverage function calling — all through the Model Context Protocol.',
      githubUrl: 'https://github.com/modelcontextprotocol/servers',
      installCommand: 'npx @modelcontextprotocol/server-openai',
      version: '1.1.2',
      license: 'MIT',
      type: 'MCP' as const,
      country: 'global',
      verificationTier: 'BHARATMCP_VERIFIED' as const,
      downloadCount: 14200,
      installCount: 11800,
      starCount: 920,
      rating: 4.8,
      reviewCount: 135,
      isVerified: true,
      isFeatured: true,
      status: 'APPROVED' as const,
      categoryId: aiMl.id,
      tagSlugs: ['ai', 'api', 'open-source', 'automation'],
    },
  ]

  for (const projectData of projectsData) {
    const { tagSlugs, ...data } = projectData

    const project = await prisma.project.upsert({
      where: { slug: data.slug },
      update: {},
      create: {
        ...data,
        authorId: adminUser.id,
      },
    })

    // Connect tags
    for (const slug of tagSlugs) {
      const tag = tags[slug]
      if (tag) {
        await prisma.tagsOnProjects.upsert({
          where: {
            projectId_tagId: {
              projectId: project.id,
              tagId: tag.id,
            },
          },
          update: {},
          create: {
            projectId: project.id,
            tagId: tag.id,
          },
        })
      }
    }
  }

  console.log(`✅ Created ${projectsData.length} projects with tags`)
  console.log('🎉 Seeding complete!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
