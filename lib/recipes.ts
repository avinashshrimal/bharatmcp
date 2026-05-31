export interface Recipe {
  id: string
  slug: string
  title: string
  description: string
  problem: string
  mcps: { name: string; slug: string; role: string }[]
  config: string
  prompt: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  country: 'india' | 'global' | 'both'
  tags: string[]
}

export const RECIPE_CATEGORIES = [
  'All',
  'Finance',
  'E-commerce',
  'Productivity',
  'Social Media',
  'Government',
  'Developer',
  'Communication',
] as const

export type RecipeCategory = (typeof RECIPE_CATEGORIES)[number]

export const RECIPES: Recipe[] = [
  // ===== FINANCE & TRADING (6) =====
  {
    id: 'recipe-1',
    slug: 'stock-price-alert-bot',
    title: 'Stock Price Alert Bot',
    description: 'Get WhatsApp alerts when your tracked stocks hit target prices on NSE/BSE.',
    problem: 'Manually checking stock prices throughout the day is distracting and inefficient. You miss entry/exit points because you were busy with work. This recipe monitors your watchlist and sends instant WhatsApp alerts when prices cross your defined thresholds.',
    mcps: [
      { name: 'Zerodha MCP', slug: 'zerodha', role: 'Fetches real-time stock prices and portfolio data from your Zerodha account' },
      { name: 'WhatsApp MCP', slug: 'whatsapp', role: 'Sends price alert notifications to your WhatsApp number' },
    ],
    config: JSON.stringify({
      mcpServers: {
        zerodha: {
          command: 'npx',
          args: ['@bharatmcp/zerodha-mcp'],
          env: { ZERODHA_API_KEY: 'your_api_key', ZERODHA_SECRET: 'your_secret' },
        },
        whatsapp: {
          command: 'npx',
          args: ['whatsapp-mcp'],
          env: { WHATSAPP_NUMBER: 'your_number' },
        },
      },
    }, null, 2),
    prompt: 'Monitor my Zerodha watchlist every 5 minutes. If any stock crosses above ₹2000 or drops below ₹1500, send me a WhatsApp message with the stock name, current price, and percentage change from yesterday\'s close.',
    category: 'Finance',
    difficulty: 'intermediate',
    country: 'india',
    tags: ['stocks', 'alerts', 'zerodha', 'whatsapp', 'nse', 'bse', 'trading'],
  },
  {
    id: 'recipe-2',
    slug: 'portfolio-daily-summary',
    title: 'Portfolio Daily Summary',
    description: 'Receive a daily email summarizing your portfolio performance with gains/losses.',
    problem: 'Tracking portfolio performance across multiple holdings is tedious. You want a clean daily summary showing what moved, total P&L, and sector-wise breakdown without logging into multiple apps. This recipe compiles your NSE/BSE holdings into a formatted email every evening.',
    mcps: [
      { name: 'NSE/BSE MCP', slug: 'nse-bse', role: 'Fetches end-of-day prices, market data, and index performance' },
      { name: 'Gmail MCP', slug: 'gmail', role: 'Sends the formatted portfolio summary email to your inbox' },
    ],
    config: JSON.stringify({
      mcpServers: {
        'nse-india': {
          command: 'npx',
          args: ['@bharatmcp/nse-mcp'],
          env: { NSE_API_KEY: 'your_key' },
        },
        gmail: {
          command: 'npx',
          args: ['@anthropic/gmail-mcp'],
          env: { GMAIL_CREDENTIALS: './credentials.json' },
        },
      },
    }, null, 2),
    prompt: 'At 4:30 PM IST every weekday, fetch closing prices for all stocks in my portfolio (RELIANCE, TCS, INFY, HDFC, ICICI). Calculate daily P&L for each, total portfolio value, and percentage change. Send me an email with a clean table showing stock name, buy price, current price, day change %, and total gain/loss.',
    category: 'Finance',
    difficulty: 'intermediate',
    country: 'india',
    tags: ['portfolio', 'nse', 'bse', 'email', 'daily-summary', 'stocks'],
  },
  {
    id: 'recipe-3',
    slug: 'sip-reminder-tracker',
    title: 'SIP Reminder & Tracker',
    description: 'Track your SIP investments and get Telegram reminders before debit dates.',
    problem: 'Missing SIP dates means missed NAV opportunities. You forget which SIPs are due when, and tracking returns across multiple mutual funds is scattered across apps. This recipe sends you reminders 2 days before each SIP date and tracks your overall mutual fund returns.',
    mcps: [
      { name: 'Groww MCP', slug: 'groww', role: 'Fetches your SIP schedule, mutual fund NAVs, and investment history' },
      { name: 'Telegram MCP', slug: 'telegram', role: 'Sends SIP reminders and monthly performance updates' },
    ],
    config: JSON.stringify({
      mcpServers: {
        groww: {
          command: 'npx',
          args: ['@bharatmcp/groww-mcp'],
          env: { GROWW_TOKEN: 'your_token' },
        },
        telegram: {
          command: 'npx',
          args: ['telegram-mcp'],
          env: { TELEGRAM_BOT_TOKEN: 'your_bot_token', TELEGRAM_CHAT_ID: 'your_chat_id' },
        },
      },
    }, null, 2),
    prompt: 'Check my Groww account for upcoming SIP dates in the next 3 days. For each upcoming SIP, send me a Telegram message with the fund name, SIP amount, expected debit date, and current NAV. Also include the fund\'s 1-month and 1-year returns.',
    category: 'Finance',
    difficulty: 'beginner',
    country: 'india',
    tags: ['sip', 'mutual-funds', 'groww', 'telegram', 'reminders', 'investments'],
  },
  {
    id: 'recipe-4',
    slug: 'crypto-price-monitor',
    title: 'Crypto Price Monitor',
    description: 'Monitor cryptocurrency prices and get Telegram alerts on significant movements.',
    problem: 'Crypto markets run 24/7 and prices can swing 10%+ while you sleep. Constantly checking charts is unsustainable. This recipe watches your crypto portfolio and alerts you on Telegram when any coin moves beyond your defined threshold, so you never miss a major move.',
    mcps: [
      { name: 'CoinGecko MCP', slug: 'coingecko', role: 'Fetches real-time crypto prices, market cap, and 24h volume data' },
      { name: 'Telegram MCP', slug: 'telegram', role: 'Sends price movement alerts and daily portfolio summaries' },
    ],
    config: JSON.stringify({
      mcpServers: {
        coingecko: {
          command: 'npx',
          args: ['coingecko-mcp'],
          env: { COINGECKO_API_KEY: 'your_key' },
        },
        telegram: {
          command: 'npx',
          args: ['telegram-mcp'],
          env: { TELEGRAM_BOT_TOKEN: 'your_bot_token', TELEGRAM_CHAT_ID: 'your_chat_id' },
        },
      },
    }, null, 2),
    prompt: 'Monitor BTC, ETH, SOL, and MATIC prices every 10 minutes. If any coin moves more than 5% in either direction within the last hour, send me a Telegram alert with the coin name, current price, percentage change, and 24h volume. Also send a daily summary at 9 AM with all portfolio values.',
    category: 'Finance',
    difficulty: 'beginner',
    country: 'global',
    tags: ['crypto', 'bitcoin', 'ethereum', 'telegram', 'alerts', 'portfolio'],
  },
  {
    id: 'recipe-5',
    slug: 'invoice-payment-tracker',
    title: 'Invoice Payment Tracker',
    description: 'Track unpaid Razorpay invoices and send WhatsApp payment reminders automatically.',
    problem: 'Chasing unpaid invoices manually wastes hours every week. You lose track of which clients owe what, and awkward follow-up emails get ignored. This recipe checks your Razorpay dashboard for overdue invoices and sends polite WhatsApp reminders with payment links.',
    mcps: [
      { name: 'Razorpay MCP', slug: 'razorpay', role: 'Fetches invoice status, payment history, and generates payment links' },
      { name: 'Google Sheets MCP', slug: 'google-sheets', role: 'Logs all payment reminders and tracks invoice aging in a spreadsheet' },
    ],
    config: JSON.stringify({
      mcpServers: {
        razorpay: {
          command: 'npx',
          args: ['@razorpay/mcp-server'],
          env: { RAZORPAY_KEY_ID: 'your_key', RAZORPAY_KEY_SECRET: 'your_secret' },
        },
        'google-sheets': {
          command: 'npx',
          args: ['@anthropic/google-sheets-mcp'],
          env: { GOOGLE_CREDENTIALS: './credentials.json' },
        },
      },
    }, null, 2),
    prompt: 'Check my Razorpay dashboard for invoices unpaid for more than 7 days. For each overdue invoice, log it in my "Payment Tracking" Google Sheet with client name, amount, days overdue, and last reminder date. Generate a payment link for each and prepare a polite reminder message.',
    category: 'Finance',
    difficulty: 'intermediate',
    country: 'india',
    tags: ['razorpay', 'invoices', 'payments', 'google-sheets', 'reminders', 'billing'],
  },
  {
    id: 'recipe-6',
    slug: 'expense-categorizer',
    title: 'Expense Categorizer',
    description: 'Automatically categorize expenses from email receipts into a Google Sheet.',
    problem: 'Expense tracking is boring and you never do it consistently. Receipts pile up in your inbox uncategorized, making tax time a nightmare. This recipe scans your Gmail for purchase receipts, extracts amounts and vendors, categorizes them, and logs everything in a structured spreadsheet.',
    mcps: [
      { name: 'Gmail MCP', slug: 'gmail', role: 'Scans inbox for purchase receipts, transaction alerts, and subscription emails' },
      { name: 'Google Sheets MCP', slug: 'google-sheets', role: 'Maintains the expense tracker with categories, amounts, and monthly totals' },
    ],
    config: JSON.stringify({
      mcpServers: {
        gmail: {
          command: 'npx',
          args: ['@anthropic/gmail-mcp'],
          env: { GMAIL_CREDENTIALS: './credentials.json' },
        },
        'google-sheets': {
          command: 'npx',
          args: ['@anthropic/google-sheets-mcp'],
          env: { GOOGLE_CREDENTIALS: './credentials.json', SHEET_ID: 'your_sheet_id' },
        },
      },
    }, null, 2),
    prompt: 'Scan my Gmail for all purchase receipts and transaction alert emails from the last week. For each transaction, extract the vendor name, amount, date, and payment method. Categorize each expense (Food, Transport, Shopping, Subscriptions, Utilities, Other) and add a row to my "2024 Expenses" Google Sheet. Update the monthly totals at the bottom.',
    category: 'Finance',
    difficulty: 'beginner',
    country: 'global',
    tags: ['expenses', 'gmail', 'google-sheets', 'budgeting', 'automation', 'receipts'],
  },
  // ===== E-COMMERCE & SHOPPING (4) =====
  {
    id: 'recipe-7',
    slug: 'price-drop-alert',
    title: 'Price Drop Alert',
    description: 'Get WhatsApp notifications when products on your Flipkart wishlist drop in price.',
    problem: 'You add items to your Flipkart wishlist waiting for a sale, but miss the actual price drops because you forget to check. This recipe monitors your wishlist items and instantly alerts you on WhatsApp when prices fall below your target, so you can grab deals before they expire.',
    mcps: [
      { name: 'Firecrawl MCP', slug: 'firecrawl', role: 'Scrapes Flipkart product pages for current prices and availability' },
      { name: 'WhatsApp MCP', slug: 'whatsapp', role: 'Sends price drop alerts with product links and savings amount' },
    ],
    config: JSON.stringify({
      mcpServers: {
        firecrawl: {
          command: 'npx',
          args: ['firecrawl-mcp'],
          env: { FIRECRAWL_API_KEY: 'your_key' },
        },
        whatsapp: {
          command: 'npx',
          args: ['whatsapp-mcp'],
          env: { WHATSAPP_NUMBER: 'your_number' },
        },
      },
    }, null, 2),
    prompt: 'Check these Flipkart product URLs every 6 hours for price changes: [list your URLs]. If any product drops more than 10% from the last recorded price, send me a WhatsApp message with the product name, old price, new price, percentage discount, and a direct link to buy.',
    category: 'E-commerce',
    difficulty: 'intermediate',
    country: 'india',
    tags: ['flipkart', 'price-tracking', 'whatsapp', 'deals', 'shopping', 'alerts'],
  },
  {
    id: 'recipe-8',
    slug: 'order-tracking-dashboard',
    title: 'Order Tracking Dashboard',
    description: 'Track all your Swiggy and Zomato orders in one place with WhatsApp updates.',
    problem: 'When you order from multiple food delivery apps, tracking ETAs across Swiggy and Zomato is annoying — especially when ordering for a group. This recipe consolidates all active orders into one view and sends WhatsApp updates when orders are out for delivery or delayed.',
    mcps: [
      { name: 'Swiggy MCP', slug: 'swiggy', role: 'Fetches active Swiggy orders, ETAs, and delivery partner details' },
      { name: 'Zomato MCP', slug: 'zomato', role: 'Fetches active Zomato orders, restaurant status, and delivery tracking' },
      { name: 'WhatsApp MCP', slug: 'whatsapp', role: 'Sends consolidated order status updates and delay notifications' },
    ],
    config: JSON.stringify({
      mcpServers: {
        swiggy: {
          command: 'npx',
          args: ['@bharatmcp/swiggy-mcp'],
          env: { SWIGGY_TOKEN: 'your_token' },
        },
        zomato: {
          command: 'npx',
          args: ['@bharatmcp/zomato-mcp'],
          env: { ZOMATO_TOKEN: 'your_token' },
        },
        whatsapp: {
          command: 'npx',
          args: ['whatsapp-mcp'],
          env: { WHATSAPP_NUMBER: 'your_number' },
        },
      },
    }, null, 2),
    prompt: 'Check my active orders on both Swiggy and Zomato. Give me a consolidated status update with restaurant name, items ordered, current status, and ETA for each. If any order is delayed by more than 10 minutes from the original ETA, send me a WhatsApp alert.',
    category: 'E-commerce',
    difficulty: 'beginner',
    country: 'india',
    tags: ['swiggy', 'zomato', 'food-delivery', 'whatsapp', 'tracking', 'orders'],
  },
  {
    id: 'recipe-9',
    slug: 'product-research-agent',
    title: 'Product Research Agent',
    description: 'Research products across multiple sites and compile comparison data in Google Sheets.',
    problem: 'Comparing products across Amazon, Best Buy, and niche sites takes hours of tab-switching and manual note-taking. This recipe crawls multiple product pages, extracts specs, prices, and reviews, then compiles everything into a structured comparison spreadsheet for easy decision-making.',
    mcps: [
      { name: 'Firecrawl MCP', slug: 'firecrawl', role: 'Crawls product pages across multiple e-commerce sites for specs and prices' },
      { name: 'Google Sheets MCP', slug: 'google-sheets', role: 'Creates a structured comparison table with all product data' },
    ],
    config: JSON.stringify({
      mcpServers: {
        firecrawl: {
          command: 'npx',
          args: ['firecrawl-mcp'],
          env: { FIRECRAWL_API_KEY: 'your_key' },
        },
        'google-sheets': {
          command: 'npx',
          args: ['@anthropic/google-sheets-mcp'],
          env: { GOOGLE_CREDENTIALS: './credentials.json' },
        },
      },
    }, null, 2),
    prompt: 'I\'m researching wireless earbuds under $100. Crawl the top 5 results from Amazon and Best Buy for "wireless earbuds." For each product, extract: name, price, battery life, driver size, noise cancellation (yes/no), rating, and number of reviews. Put all this in a Google Sheet with one product per row, sorted by rating.',
    category: 'E-commerce',
    difficulty: 'intermediate',
    country: 'global',
    tags: ['product-research', 'firecrawl', 'google-sheets', 'comparison', 'shopping'],
  },
  {
    id: 'recipe-10',
    slug: 'competitor-price-monitor',
    title: 'Competitor Price Monitor',
    description: 'Track competitor pricing changes and get Slack alerts when they adjust prices.',
    problem: 'Your competitors change prices without notice, and by the time you find out, you\'ve already lost customers. Manually checking competitor sites daily doesn\'t scale. This recipe monitors competitor product pages and alerts your team on Slack whenever pricing changes are detected.',
    mcps: [
      { name: 'Firecrawl MCP', slug: 'firecrawl', role: 'Scrapes competitor websites for product prices and detects changes' },
      { name: 'Slack MCP', slug: 'slack', role: 'Posts price change alerts to your team\'s pricing channel' },
    ],
    config: JSON.stringify({
      mcpServers: {
        firecrawl: {
          command: 'npx',
          args: ['firecrawl-mcp'],
          env: { FIRECRAWL_API_KEY: 'your_key' },
        },
        slack: {
          command: 'npx',
          args: ['@anthropic/slack-mcp'],
          env: { SLACK_BOT_TOKEN: 'xoxb-your-token', SLACK_CHANNEL: '#pricing-alerts' },
        },
      },
    }, null, 2),
    prompt: 'Check these competitor product pages daily: [list URLs]. Compare current prices against yesterday\'s prices. If any product price changed by more than 2%, post a Slack message to #pricing-alerts with: competitor name, product, old price, new price, percentage change, and a link to the page.',
    category: 'E-commerce',
    difficulty: 'advanced',
    country: 'global',
    tags: ['competitor-analysis', 'pricing', 'firecrawl', 'slack', 'monitoring', 'business'],
  },
  // ===== PRODUCTIVITY & WORK (6) =====
  {
    id: 'recipe-11',
    slug: 'meeting-notes-to-notion',
    title: 'Meeting Notes to Notion',
    description: 'Extract action items from meeting emails and create structured Notion pages.',
    problem: 'Meeting notes get buried in email threads and action items are forgotten. Nobody goes back to read the full notes, and tasks fall through the cracks. This recipe extracts key decisions and action items from meeting recap emails and creates organized Notion pages with assignees and deadlines.',
    mcps: [
      { name: 'Gmail MCP', slug: 'gmail', role: 'Reads meeting recap emails and calendar invites with notes' },
      { name: 'Notion MCP', slug: 'notion', role: 'Creates structured meeting pages with action items, decisions, and follow-ups' },
    ],
    config: JSON.stringify({
      mcpServers: {
        gmail: {
          command: 'npx',
          args: ['@anthropic/gmail-mcp'],
          env: { GMAIL_CREDENTIALS: './credentials.json' },
        },
        notion: {
          command: 'npx',
          args: ['notion-mcp'],
          env: { NOTION_API_KEY: 'your_key', NOTION_DATABASE_ID: 'your_db_id' },
        },
      },
    }, null, 2),
    prompt: 'Search my Gmail for emails with subject containing "meeting notes" or "meeting recap" from the last 24 hours. For each one, extract: meeting title, date, attendees, key decisions made, and action items with owners. Create a new page in my Notion "Meetings" database with all this structured information. Tag action items with due dates if mentioned.',
    category: 'Productivity',
    difficulty: 'beginner',
    country: 'global',
    tags: ['meetings', 'notion', 'gmail', 'action-items', 'productivity', 'notes'],
  },
  {
    id: 'recipe-12',
    slug: 'daily-standup-reporter',
    title: 'Daily Standup Reporter',
    description: 'Auto-generate standup updates from your Linear tickets and post to Slack.',
    problem: 'Writing daily standups is repetitive and you often forget what you worked on yesterday. Digging through Linear to reconstruct your day wastes 10 minutes every morning. This recipe reads your recent Linear activity and generates a formatted standup update posted directly to your team\'s Slack channel.',
    mcps: [
      { name: 'Linear MCP', slug: 'linear', role: 'Fetches your assigned tickets, status changes, and comments from the last 24 hours' },
      { name: 'Slack MCP', slug: 'slack', role: 'Posts the formatted standup update to your team channel' },
    ],
    config: JSON.stringify({
      mcpServers: {
        linear: {
          command: 'npx',
          args: ['linear-mcp'],
          env: { LINEAR_API_KEY: 'your_key' },
        },
        slack: {
          command: 'npx',
          args: ['@anthropic/slack-mcp'],
          env: { SLACK_BOT_TOKEN: 'xoxb-your-token', SLACK_CHANNEL: '#standups' },
        },
      },
    }, null, 2),
    prompt: 'Look at my Linear activity from the last 24 hours. Find all tickets I moved, commented on, or completed. Generate a standup update in this format:\n\n✅ Yesterday: [completed tasks]\n🔄 Today: [in-progress tasks]\n🚫 Blockers: [any blocked tickets]\n\nPost this to #standups on Slack.',
    category: 'Productivity',
    difficulty: 'beginner',
    country: 'global',
    tags: ['standup', 'linear', 'slack', 'daily-update', 'engineering', 'team'],
  },
  {
    id: 'recipe-13',
    slug: 'email-inbox-summarizer',
    title: 'Email Inbox Summarizer',
    description: 'Get a daily Slack digest of important emails so you can skip inbox zero.',
    problem: 'Your inbox has 50+ unread emails every morning and most are noise. Scanning through all of them to find the 5 that actually matter wastes your first productive hour. This recipe summarizes your unread emails, highlights urgent ones, and posts a clean digest to Slack so you start your day informed.',
    mcps: [
      { name: 'Gmail MCP', slug: 'gmail', role: 'Reads unread emails, extracts senders, subjects, and key content' },
      { name: 'Slack MCP', slug: 'slack', role: 'Posts the daily email digest to your personal Slack channel' },
    ],
    config: JSON.stringify({
      mcpServers: {
        gmail: {
          command: 'npx',
          args: ['@anthropic/gmail-mcp'],
          env: { GMAIL_CREDENTIALS: './credentials.json' },
        },
        slack: {
          command: 'npx',
          args: ['@anthropic/slack-mcp'],
          env: { SLACK_BOT_TOKEN: 'xoxb-your-token', SLACK_CHANNEL: '#my-digest' },
        },
      },
    }, null, 2),
    prompt: 'Read all my unread Gmail messages from the last 12 hours. Categorize them as: 🔴 Urgent (needs response today), 🟡 Important (needs response this week), 🟢 FYI (no action needed), 🗑️ Skip (newsletters, promotions). For urgent and important emails, include a 1-line summary. Post this digest to my #my-digest Slack channel.',
    category: 'Productivity',
    difficulty: 'beginner',
    country: 'global',
    tags: ['email', 'gmail', 'slack', 'digest', 'inbox-zero', 'productivity'],
  },
  {
    id: 'recipe-14',
    slug: 'auto-organize-google-drive',
    title: 'Auto-organize Google Drive',
    description: 'Automatically sort new Google Drive files into folders based on content and sender.',
    problem: 'Your Google Drive is a mess — files dumped in the root, shared documents with no organization, and you can never find that one PDF from last month. This recipe watches for new files, analyzes their content and source, and moves them into the right folders automatically.',
    mcps: [
      { name: 'Google Drive MCP', slug: 'google-drive', role: 'Monitors new files, reads metadata, and moves files to appropriate folders' },
      { name: 'Gmail MCP', slug: 'gmail', role: 'Identifies file sources from email attachments and shared links' },
    ],
    config: JSON.stringify({
      mcpServers: {
        'google-drive': {
          command: 'npx',
          args: ['google-drive-mcp'],
          env: { GOOGLE_CREDENTIALS: './credentials.json' },
        },
        gmail: {
          command: 'npx',
          args: ['@anthropic/gmail-mcp'],
          env: { GMAIL_CREDENTIALS: './credentials.json' },
        },
      },
    }, null, 2),
    prompt: 'Check my Google Drive root folder for any files added in the last 24 hours that aren\'t in a subfolder. For each file, analyze the filename and content type, then move it to the appropriate folder: Invoices/ for bills and receipts, Documents/ for PDFs and docs, Images/ for photos, Projects/ for code-related files. Create the folders if they don\'t exist. Give me a summary of what was moved where.',
    category: 'Productivity',
    difficulty: 'intermediate',
    country: 'global',
    tags: ['google-drive', 'organization', 'automation', 'files', 'productivity'],
  },
  {
    id: 'recipe-15',
    slug: 'weekly-report-generator',
    title: 'Weekly Report Generator',
    description: 'Generate weekly engineering reports from GitHub activity and save to Notion.',
    problem: 'Writing weekly reports for your manager is tedious — you have to remember what PRs you merged, what issues you closed, and what reviews you did. This recipe pulls all your GitHub activity for the week and generates a professional report saved directly to Notion.',
    mcps: [
      { name: 'GitHub MCP', slug: 'github', role: 'Fetches PRs merged, issues closed, code reviews, and commit history for the week' },
      { name: 'Notion MCP', slug: 'notion', role: 'Creates a formatted weekly report page in your reports database' },
    ],
    config: JSON.stringify({
      mcpServers: {
        github: {
          command: 'npx',
          args: ['@anthropic/github-mcp'],
          env: { GITHUB_TOKEN: 'ghp_your_token' },
        },
        notion: {
          command: 'npx',
          args: ['notion-mcp'],
          env: { NOTION_API_KEY: 'your_key', NOTION_DATABASE_ID: 'your_db_id' },
        },
      },
    }, null, 2),
    prompt: 'Pull my GitHub activity for the last 7 days across all my repositories. Summarize: PRs merged (with titles and repos), PRs reviewed, issues closed, and total commits. Generate a weekly report with sections for Accomplishments, In Progress, and Next Week\'s Focus. Save it as a new page in my Notion "Weekly Reports" database with today\'s date as the title.',
    category: 'Productivity',
    difficulty: 'intermediate',
    country: 'global',
    tags: ['github', 'notion', 'weekly-report', 'engineering', 'productivity'],
  },
  {
    id: 'recipe-16',
    slug: 'calendar-conflict-resolver',
    title: 'Calendar Conflict Resolver',
    description: 'Detect scheduling conflicts in Google Calendar and suggest resolutions via Slack.',
    problem: 'Double-bookings happen when multiple people schedule meetings without checking your calendar. By the time you notice, it\'s awkward to reschedule. This recipe proactively detects conflicts in your upcoming schedule and suggests which meeting to move, posting options to Slack for quick decisions.',
    mcps: [
      { name: 'Google Calendar MCP', slug: 'google-calendar', role: 'Reads your calendar events, detects overlaps, and finds free slots' },
      { name: 'Slack MCP', slug: 'slack', role: 'Posts conflict alerts with suggested resolution options' },
    ],
    config: JSON.stringify({
      mcpServers: {
        'google-calendar': {
          command: 'npx',
          args: ['google-calendar-mcp'],
          env: { GOOGLE_CREDENTIALS: './credentials.json' },
        },
        slack: {
          command: 'npx',
          args: ['@anthropic/slack-mcp'],
          env: { SLACK_BOT_TOKEN: 'xoxb-your-token', SLACK_CHANNEL: '#my-schedule' },
        },
      },
    }, null, 2),
    prompt: 'Check my Google Calendar for the next 5 business days. Find any overlapping meetings or back-to-back meetings with no break. For each conflict, suggest which meeting to reschedule (prefer moving the one with fewer attendees) and find 3 alternative time slots that work. Post the conflicts and suggestions to my #my-schedule Slack channel.',
    category: 'Productivity',
    difficulty: 'intermediate',
    country: 'global',
    tags: ['calendar', 'scheduling', 'conflicts', 'slack', 'google-calendar', 'productivity'],
  },
  // ===== SOCIAL MEDIA & MARKETING (5) =====
  {
    id: 'recipe-17',
    slug: 'content-scheduler',
    title: 'Content Scheduler',
    description: 'Schedule and cross-post content across Instagram, Twitter, and LinkedIn.',
    problem: 'Posting the same content across 3 platforms means logging into each one, adapting the format, and posting at optimal times for each. This recipe takes your content, adapts it for each platform\'s format and character limits, and schedules posts at the best engagement times.',
    mcps: [
      { name: 'Instagram MCP', slug: 'instagram', role: 'Formats and schedules Instagram posts with hashtags and image sizing' },
      { name: 'Twitter MCP', slug: 'twitter', role: 'Adapts content to tweet format with thread support for longer content' },
      { name: 'LinkedIn MCP', slug: 'linkedin', role: 'Formats professional posts with appropriate tone and hashtags' },
    ],
    config: JSON.stringify({
      mcpServers: {
        instagram: {
          command: 'npx',
          args: ['instagram-mcp'],
          env: { INSTAGRAM_ACCESS_TOKEN: 'your_token' },
        },
        twitter: {
          command: 'npx',
          args: ['twitter-mcp'],
          env: { TWITTER_API_KEY: 'your_key', TWITTER_API_SECRET: 'your_secret' },
        },
        linkedin: {
          command: 'npx',
          args: ['linkedin-mcp'],
          env: { LINKEDIN_ACCESS_TOKEN: 'your_token' },
        },
      },
    }, null, 2),
    prompt: 'I have this content to post: [your content here]. Adapt it for each platform: Twitter (max 280 chars, casual tone, 2-3 hashtags), Instagram (engaging caption, 15-20 relevant hashtags, emoji), and LinkedIn (professional tone, industry hashtags, call-to-action). Schedule Twitter for 10 AM, Instagram for 12 PM, and LinkedIn for 9 AM tomorrow.',
    category: 'Social Media',
    difficulty: 'intermediate',
    country: 'global',
    tags: ['social-media', 'content', 'scheduling', 'instagram', 'twitter', 'linkedin'],
  },
  {
    id: 'recipe-18',
    slug: 'social-media-analytics',
    title: 'Social Media Analytics',
    description: 'Pull Instagram engagement metrics and track growth trends in Google Sheets.',
    problem: 'Instagram\'s built-in analytics are limited and don\'t let you track long-term trends easily. You want to see which content types perform best, track follower growth over time, and identify your best posting times. This recipe pulls your metrics weekly and builds a historical analytics spreadsheet.',
    mcps: [
      { name: 'Instagram MCP', slug: 'instagram', role: 'Fetches post engagement, follower count, reach, and impressions data' },
      { name: 'Google Sheets MCP', slug: 'google-sheets', role: 'Maintains historical analytics data and calculates growth trends' },
    ],
    config: JSON.stringify({
      mcpServers: {
        instagram: {
          command: 'npx',
          args: ['instagram-mcp'],
          env: { INSTAGRAM_ACCESS_TOKEN: 'your_token' },
        },
        'google-sheets': {
          command: 'npx',
          args: ['@anthropic/google-sheets-mcp'],
          env: { GOOGLE_CREDENTIALS: './credentials.json', SHEET_ID: 'your_sheet_id' },
        },
      },
    }, null, 2),
    prompt: 'Pull my Instagram analytics for the last 7 days: total followers (new vs lost), top 5 posts by engagement rate, average likes/comments per post, best performing content type (reel vs carousel vs single), and peak engagement hours. Add this week\'s data as a new row in my "IG Analytics" Google Sheet and calculate week-over-week growth percentage.',
    category: 'Social Media',
    difficulty: 'intermediate',
    country: 'global',
    tags: ['instagram', 'analytics', 'google-sheets', 'growth', 'engagement', 'metrics'],
  },
  {
    id: 'recipe-19',
    slug: 'hashtag-research-agent',
    title: 'Hashtag Research Agent',
    description: 'Research trending and niche hashtags for your content using web crawling.',
    problem: 'Finding the right hashtag mix (trending + niche + branded) is time-consuming research. Using only popular hashtags means your content gets buried, while only niche ones limit reach. This recipe researches optimal hashtag combinations for your content niche by analyzing top-performing posts.',
    mcps: [
      { name: 'Instagram MCP', slug: 'instagram', role: 'Analyzes hashtag performance, post counts, and engagement rates' },
      { name: 'Firecrawl MCP', slug: 'firecrawl', role: 'Crawls hashtag research sites and competitor profiles for hashtag strategies' },
    ],
    config: JSON.stringify({
      mcpServers: {
        instagram: {
          command: 'npx',
          args: ['instagram-mcp'],
          env: { INSTAGRAM_ACCESS_TOKEN: 'your_token' },
        },
        firecrawl: {
          command: 'npx',
          args: ['firecrawl-mcp'],
          env: { FIRECRAWL_API_KEY: 'your_key' },
        },
      },
    }, null, 2),
    prompt: 'I\'m posting about [your niche, e.g., "Indian street food photography"]. Research the best hashtag strategy: find 5 high-volume hashtags (1M+ posts), 10 medium hashtags (100K-1M posts), and 10 niche hashtags (10K-100K posts) relevant to my content. Also check what hashtags my top 3 competitors are using. Give me 3 different hashtag sets I can rotate between posts.',
    category: 'Social Media',
    difficulty: 'advanced',
    country: 'global',
    tags: ['hashtags', 'instagram', 'research', 'firecrawl', 'content-strategy', 'growth'],
  },
  {
    id: 'recipe-20',
    slug: 'youtube-video-summarizer',
    title: 'YouTube Video Summarizer',
    description: 'Summarize YouTube videos and save structured notes to Notion automatically.',
    problem: 'You save YouTube videos to "Watch Later" but never actually watch them all. Long tutorials and conference talks have 10 minutes of useful content buried in 60 minutes of video. This recipe extracts transcripts, creates concise summaries with timestamps, and saves them to Notion for quick reference.',
    mcps: [
      { name: 'YouTube MCP', slug: 'youtube', role: 'Fetches video transcripts, metadata, chapters, and key timestamps' },
      { name: 'Notion MCP', slug: 'notion', role: 'Creates structured summary pages with key points, timestamps, and tags' },
    ],
    config: JSON.stringify({
      mcpServers: {
        youtube: {
          command: 'npx',
          args: ['youtube-mcp'],
          env: { YOUTUBE_API_KEY: 'your_key' },
        },
        notion: {
          command: 'npx',
          args: ['notion-mcp'],
          env: { NOTION_API_KEY: 'your_key', NOTION_DATABASE_ID: 'your_db_id' },
        },
      },
    }, null, 2),
    prompt: 'Summarize this YouTube video: [URL]. Extract the transcript and create a Notion page with: video title, channel, duration, a 3-sentence TL;DR, 5-7 key takeaways with timestamps, any tools/resources mentioned, and relevant tags. Save it to my "Video Notes" Notion database.',
    category: 'Social Media',
    difficulty: 'beginner',
    country: 'global',
    tags: ['youtube', 'notion', 'summaries', 'learning', 'notes', 'transcripts'],
  },
  {
    id: 'recipe-21',
    slug: 'linkedin-job-alert',
    title: 'LinkedIn Job Alert',
    description: 'Get WhatsApp alerts for new LinkedIn job postings matching your criteria.',
    problem: 'LinkedIn\'s built-in job alerts are noisy and often delayed. By the time you see a perfect role, 200 people have already applied. This recipe monitors LinkedIn for jobs matching your exact criteria and sends instant WhatsApp alerts so you can apply early when it matters most.',
    mcps: [
      { name: 'LinkedIn MCP', slug: 'linkedin', role: 'Searches for new job postings matching your title, location, and company preferences' },
      { name: 'WhatsApp MCP', slug: 'whatsapp', role: 'Sends instant alerts for matching jobs with apply links' },
    ],
    config: JSON.stringify({
      mcpServers: {
        linkedin: {
          command: 'npx',
          args: ['linkedin-mcp'],
          env: { LINKEDIN_ACCESS_TOKEN: 'your_token' },
        },
        whatsapp: {
          command: 'npx',
          args: ['whatsapp-mcp'],
          env: { WHATSAPP_NUMBER: 'your_number' },
        },
      },
    }, null, 2),
    prompt: 'Search LinkedIn for new job postings in the last 6 hours matching: "Senior Frontend Engineer" OR "Staff Engineer" in Bangalore, Mumbai, or Remote India. Filter for companies with 100+ employees. For each match, send me a WhatsApp message with: job title, company name, location, posted time, and the apply link. Skip jobs that require 10+ years experience.',
    category: 'Social Media',
    difficulty: 'intermediate',
    country: 'both',
    tags: ['linkedin', 'jobs', 'whatsapp', 'career', 'alerts', 'job-search'],
  },
  // ===== GOVERNMENT & COMPLIANCE (India) (5) =====
  {
    id: 'recipe-22',
    slug: 'gst-invoice-validator',
    title: 'GST Invoice Validator',
    description: 'Validate GST invoices against government records and log results in Google Sheets.',
    problem: 'Manually verifying GSTIN numbers and invoice details against the GST portal is slow and error-prone. Invalid invoices mean lost input tax credit during filing. This recipe batch-validates your vendor invoices against India Stack GST APIs and flags discrepancies in a spreadsheet.',
    mcps: [
      { name: 'India Stack MCP', slug: 'india-stack', role: 'Validates GSTIN numbers, checks filing status, and verifies invoice details against GST portal' },
      { name: 'Google Sheets MCP', slug: 'google-sheets', role: 'Reads invoice data and logs validation results with pass/fail status' },
    ],
    config: JSON.stringify({
      mcpServers: {
        'india-stack': {
          command: 'npx',
          args: ['@bharatmcp/india-stack-mcp'],
          env: { INDIA_STACK_API_KEY: 'your_key', GST_API_KEY: 'your_gst_key' },
        },
        'google-sheets': {
          command: 'npx',
          args: ['@anthropic/google-sheets-mcp'],
          env: { GOOGLE_CREDENTIALS: './credentials.json', SHEET_ID: 'your_sheet_id' },
        },
      },
    }, null, 2),
    prompt: 'Read all invoices from my "Vendor Invoices" Google Sheet (columns: vendor name, GSTIN, invoice number, amount, date). For each row, validate the GSTIN against the GST portal — check if it\'s active, if the trade name matches, and if the filing status is current. Add validation columns: GSTIN Valid (yes/no), Trade Name Match (yes/no), Filing Status, and flag any mismatches in red.',
    category: 'Government',
    difficulty: 'advanced',
    country: 'india',
    tags: ['gst', 'india-stack', 'invoices', 'compliance', 'tax', 'validation'],
  },
  {
    id: 'recipe-23',
    slug: 'pan-aadhaar-kyc-checker',
    title: 'PAN/Aadhaar KYC Checker',
    description: 'Verify customer KYC documents using India Stack APIs with Slack notifications.',
    problem: 'Manual KYC verification is a bottleneck for onboarding new customers. Checking PAN and Aadhaar details one by one against government databases takes your ops team hours. This recipe batch-verifies KYC documents and notifies your team on Slack about verification results.',
    mcps: [
      { name: 'India Stack MCP', slug: 'india-stack', role: 'Verifies PAN numbers, validates Aadhaar (masked), and checks KYC status' },
      { name: 'Slack MCP', slug: 'slack', role: 'Posts verification results and flags failed KYC checks to your ops channel' },
    ],
    config: JSON.stringify({
      mcpServers: {
        'india-stack': {
          command: 'npx',
          args: ['@bharatmcp/india-stack-mcp'],
          env: { INDIA_STACK_API_KEY: 'your_key', PAN_VERIFICATION_KEY: 'your_pan_key' },
        },
        slack: {
          command: 'npx',
          args: ['@anthropic/slack-mcp'],
          env: { SLACK_BOT_TOKEN: 'xoxb-your-token', SLACK_CHANNEL: '#kyc-verification' },
        },
      },
    }, null, 2),
    prompt: 'I have a batch of customer KYC submissions to verify. For each customer, validate their PAN number format and check if it\'s linked to an active account. Verify the name on PAN matches the submitted name. Post results to #kyc-verification on Slack: ✅ for verified customers, ❌ for failed with reason (invalid PAN, name mismatch, inactive). Summarize: X verified, Y failed.',
    category: 'Government',
    difficulty: 'advanced',
    country: 'india',
    tags: ['kyc', 'pan', 'aadhaar', 'india-stack', 'verification', 'compliance'],
  },
  {
    id: 'recipe-24',
    slug: 'train-availability-monitor',
    title: 'Train Availability Monitor',
    description: 'Monitor IRCTC train seat availability and get WhatsApp alerts when seats open up.',
    problem: 'Popular trains on Indian Railways are always waitlisted, and seats open up randomly due to cancellations. Constantly refreshing IRCTC is frustrating and you miss the window. This recipe monitors your preferred trains and instantly alerts you on WhatsApp when confirmed seats become available.',
    mcps: [
      { name: 'Indian Railways MCP', slug: 'indian-railways', role: 'Checks real-time seat availability, waitlist status, and PNR status' },
      { name: 'WhatsApp MCP', slug: 'whatsapp', role: 'Sends instant alerts when seat availability changes from waitlisted to available' },
    ],
    config: JSON.stringify({
      mcpServers: {
        'indian-railways': {
          command: 'npx',
          args: ['@bharatmcp/indian-railways-mcp'],
          env: { IRCTC_API_KEY: 'your_key' },
        },
        whatsapp: {
          command: 'npx',
          args: ['whatsapp-mcp'],
          env: { WHATSAPP_NUMBER: 'your_number' },
        },
      },
    }, null, 2),
    prompt: 'Monitor seat availability for train 12301 (Rajdhani Express) from New Delhi to Kolkata on [date] in 3AC class. Check every 30 minutes. If status changes from waitlisted to RAC or confirmed, or if tatkal quota opens, send me a WhatsApp message immediately with: train name, class, current availability status, and a reminder to book on IRCTC.',
    category: 'Government',
    difficulty: 'beginner',
    country: 'india',
    tags: ['irctc', 'trains', 'indian-railways', 'whatsapp', 'availability', 'travel'],
  },
  {
    id: 'recipe-25',
    slug: 'flight-price-tracker',
    title: 'Flight Price Tracker',
    description: 'Track domestic flight prices and get Telegram alerts when fares drop.',
    problem: 'Indian domestic flight prices fluctuate wildly — the same route can vary by ₹3000+ within a day. You never know if you\'re getting a good deal or should wait. This recipe tracks prices for your routes and alerts you on Telegram when fares drop below your budget, with historical price context.',
    mcps: [
      { name: 'India Flights MCP', slug: 'india-flights', role: 'Searches flight prices across airlines for domestic Indian routes' },
      { name: 'Telegram MCP', slug: 'telegram', role: 'Sends price drop alerts with fare comparison and booking recommendations' },
    ],
    config: JSON.stringify({
      mcpServers: {
        'india-flights': {
          command: 'npx',
          args: ['@bharatmcp/flights-mcp'],
          env: { FLIGHTS_API_KEY: 'your_key' },
        },
        telegram: {
          command: 'npx',
          args: ['telegram-mcp'],
          env: { TELEGRAM_BOT_TOKEN: 'your_bot_token', TELEGRAM_CHAT_ID: 'your_chat_id' },
        },
      },
    }, null, 2),
    prompt: 'Track flight prices for BLR→DEL on [date range]. Check prices 3 times daily (6 AM, 12 PM, 8 PM). If any flight drops below ₹4000 or drops more than 20% from yesterday\'s lowest price, send me a Telegram alert with: airline, departure time, current price, price 24h ago, and whether I should book now or wait based on the trend.',
    category: 'Government',
    difficulty: 'intermediate',
    country: 'india',
    tags: ['flights', 'price-tracking', 'telegram', 'travel', 'india', 'airlines'],
  },
  {
    id: 'recipe-26',
    slug: 'tax-calculation-assistant',
    title: 'Tax Calculation Assistant',
    description: 'Calculate income tax under old and new regime with deduction optimization suggestions.',
    problem: 'Every year you struggle to decide between old and new tax regime. Calculating tax with all deductions (80C, 80D, HRA, NPS) is complex and you\'re never sure you\'re claiming everything you\'re eligible for. This recipe calculates your tax both ways and suggests which deductions to maximize.',
    mcps: [
      { name: 'India Stack MCP', slug: 'india-stack', role: 'Provides current tax slabs, deduction limits, and surcharge calculations for both regimes' },
    ],
    config: JSON.stringify({
      mcpServers: {
        'india-stack': {
          command: 'npx',
          args: ['@bharatmcp/india-stack-mcp'],
          env: { INDIA_STACK_API_KEY: 'your_key' },
        },
      },
    }, null, 2),
    prompt: 'My annual salary is ₹18,00,000. I have these deductions: 80C (PPF: ₹1,50,000), 80D (health insurance: ₹25,000), HRA (rent: ₹20,000/month in Bangalore), NPS (₹50,000). Calculate my tax liability under both old and new regime for FY 2024-25. Show me the breakup, which regime saves more, and suggest any additional deductions I might be missing. Include cess and surcharge.',
    category: 'Government',
    difficulty: 'beginner',
    country: 'india',
    tags: ['income-tax', 'india-stack', 'tax-planning', 'deductions', 'finance'],
  },
  // ===== DEVELOPER & DEVOPS (4) =====
  {
    id: 'recipe-27',
    slug: 'pr-review-reminder',
    title: 'PR Review Reminder',
    description: 'Remind team members about pending PR reviews via Slack after 24 hours.',
    problem: 'Pull requests sit unreviewed for days, blocking deployments and frustrating developers. People forget or deprioritize reviews. This recipe checks for PRs awaiting review for more than 24 hours and sends polite Slack reminders to the assigned reviewers with context about the PR.',
    mcps: [
      { name: 'GitHub MCP', slug: 'github', role: 'Fetches open PRs, review assignments, and time since last activity' },
      { name: 'Slack MCP', slug: 'slack', role: 'Sends review reminders to assigned reviewers with PR context' },
    ],
    config: JSON.stringify({
      mcpServers: {
        github: {
          command: 'npx',
          args: ['@anthropic/github-mcp'],
          env: { GITHUB_TOKEN: 'ghp_your_token' },
        },
        slack: {
          command: 'npx',
          args: ['@anthropic/slack-mcp'],
          env: { SLACK_BOT_TOKEN: 'xoxb-your-token', SLACK_CHANNEL: '#engineering' },
        },
      },
    }, null, 2),
    prompt: 'Check all open PRs in my organization\'s repositories. Find PRs that have been waiting for review for more than 24 hours. For each one, post a message to #engineering on Slack with: PR title, author, repo, hours waiting, number of files changed, and tag the assigned reviewers. Sort by longest waiting first. Skip draft PRs.',
    category: 'Developer',
    difficulty: 'beginner',
    country: 'global',
    tags: ['github', 'pull-requests', 'code-review', 'slack', 'engineering', 'reminders'],
  },
  {
    id: 'recipe-28',
    slug: 'deployment-notifier',
    title: 'Deployment Notifier',
    description: 'Get Slack notifications when Vercel deployments succeed or fail with details.',
    problem: 'You push code and context-switch to something else, then forget to check if the deployment succeeded. Failed deployments sit unnoticed for hours. This recipe monitors your Vercel deployments and posts real-time status updates to Slack with build logs for failures.',
    mcps: [
      { name: 'Vercel MCP', slug: 'vercel', role: 'Monitors deployment status, build times, and fetches error logs for failures' },
      { name: 'Slack MCP', slug: 'slack', role: 'Posts deployment status updates with success/failure details and links' },
    ],
    config: JSON.stringify({
      mcpServers: {
        vercel: {
          command: 'npx',
          args: ['vercel-mcp'],
          env: { VERCEL_TOKEN: 'your_token', VERCEL_TEAM_ID: 'your_team_id' },
        },
        slack: {
          command: 'npx',
          args: ['@anthropic/slack-mcp'],
          env: { SLACK_BOT_TOKEN: 'xoxb-your-token', SLACK_CHANNEL: '#deployments' },
        },
      },
    }, null, 2),
    prompt: 'Check my Vercel project deployments from the last hour. For each new deployment, post to #deployments on Slack: ✅ or ❌ status, project name, branch, commit message, build duration, and deployment URL. For failed deployments, include the last 10 lines of the build log and tag me. For successful production deployments, include the live URL.',
    category: 'Developer',
    difficulty: 'beginner',
    country: 'global',
    tags: ['vercel', 'deployments', 'slack', 'ci-cd', 'devops', 'monitoring'],
  },
  {
    id: 'recipe-29',
    slug: 'error-alert-responder',
    title: 'Error Alert Responder',
    description: 'When Sentry catches errors, create GitHub issues and alert the team on Slack.',
    problem: 'Production errors get logged in Sentry but nobody acts on them until users complain. The gap between error detection and developer awareness is too long. This recipe bridges Sentry alerts to your workflow — creating GitHub issues for new errors and alerting the responsible team on Slack with context.',
    mcps: [
      { name: 'Sentry MCP', slug: 'sentry', role: 'Fetches new error events, stack traces, affected users count, and error frequency' },
      { name: 'Slack MCP', slug: 'slack', role: 'Posts error alerts to the engineering channel with severity and context' },
      { name: 'GitHub MCP', slug: 'github', role: 'Creates issues for new errors with stack traces and reproduction steps' },
    ],
    config: JSON.stringify({
      mcpServers: {
        sentry: {
          command: 'npx',
          args: ['sentry-mcp'],
          env: { SENTRY_AUTH_TOKEN: 'your_token', SENTRY_ORG: 'your_org', SENTRY_PROJECT: 'your_project' },
        },
        slack: {
          command: 'npx',
          args: ['@anthropic/slack-mcp'],
          env: { SLACK_BOT_TOKEN: 'xoxb-your-token', SLACK_CHANNEL: '#alerts' },
        },
        github: {
          command: 'npx',
          args: ['@anthropic/github-mcp'],
          env: { GITHUB_TOKEN: 'ghp_your_token' },
        },
      },
    }, null, 2),
    prompt: 'Check Sentry for new unresolved errors in the last hour. For errors affecting more than 10 users or occurring more than 50 times, create a GitHub issue with: error title, stack trace, affected users count, first/last seen, and browser/OS breakdown. Post a summary to #alerts on Slack with severity (🔴 critical if 100+ users, 🟡 warning if 10-100 users) and link to the GitHub issue.',
    category: 'Developer',
    difficulty: 'advanced',
    country: 'global',
    tags: ['sentry', 'error-tracking', 'github', 'slack', 'devops', 'monitoring', 'incidents'],
  },
  {
    id: 'recipe-30',
    slug: 'dependency-update-checker',
    title: 'Dependency Update Checker',
    description: 'Check for outdated dependencies weekly and track update status in Notion.',
    problem: 'Dependencies go stale silently — security vulnerabilities accumulate, and major version upgrades become painful when you fall too far behind. This recipe checks your repos weekly for outdated packages, flags security issues, and maintains an update tracker in Notion so nothing falls through the cracks.',
    mcps: [
      { name: 'GitHub MCP', slug: 'github', role: 'Reads package.json/requirements.txt, checks for Dependabot alerts and outdated packages' },
      { name: 'Notion MCP', slug: 'notion', role: 'Maintains a dependency update tracker with priority, status, and changelog links' },
    ],
    config: JSON.stringify({
      mcpServers: {
        github: {
          command: 'npx',
          args: ['@anthropic/github-mcp'],
          env: { GITHUB_TOKEN: 'ghp_your_token' },
        },
        notion: {
          command: 'npx',
          args: ['notion-mcp'],
          env: { NOTION_API_KEY: 'your_key', NOTION_DATABASE_ID: 'your_db_id' },
        },
      },
    }, null, 2),
    prompt: 'Check my GitHub repositories for outdated dependencies. For each repo, identify packages that are more than 1 major version behind or have known security vulnerabilities. Create/update entries in my Notion "Dependency Updates" database with: package name, current version, latest version, severity (critical/high/medium/low), changelog link, and whether it\'s a breaking change. Sort by severity.',
    category: 'Developer',
    difficulty: 'intermediate',
    country: 'global',
    tags: ['dependencies', 'github', 'notion', 'security', 'maintenance', 'devops'],
  },
  // ===== COMMUNICATION & CRM (2) =====
  {
    id: 'recipe-31',
    slug: 'customer-support-auto-reply',
    title: 'Customer Support Auto-Reply',
    description: 'Auto-respond to common WhatsApp customer queries using your Notion knowledge base.',
    problem: 'Your support team answers the same 20 questions repeatedly on WhatsApp — shipping times, return policy, pricing. Response times suffer during peak hours. This recipe reads incoming WhatsApp messages, matches them against your Notion knowledge base, and sends accurate auto-replies for common queries.',
    mcps: [
      { name: 'WhatsApp MCP', slug: 'whatsapp', role: 'Reads incoming customer messages and sends formatted replies' },
      { name: 'Notion MCP', slug: 'notion', role: 'Searches your FAQ/knowledge base for relevant answers to customer queries' },
    ],
    config: JSON.stringify({
      mcpServers: {
        whatsapp: {
          command: 'npx',
          args: ['whatsapp-mcp'],
          env: { WHATSAPP_BUSINESS_TOKEN: 'your_token', WHATSAPP_PHONE_ID: 'your_phone_id' },
        },
        notion: {
          command: 'npx',
          args: ['notion-mcp'],
          env: { NOTION_API_KEY: 'your_key', NOTION_DATABASE_ID: 'your_faq_db_id' },
        },
      },
    }, null, 2),
    prompt: 'Read the latest unread WhatsApp messages from customers. For each message, search my Notion "FAQ" database for a matching answer. If confidence is high (clear match to a documented question), send an auto-reply with the answer formatted nicely for WhatsApp. If the query is complex or doesn\'t match any FAQ, reply with "Our team will get back to you within 2 hours" and flag it for human review.',
    category: 'Communication',
    difficulty: 'advanced',
    country: 'india',
    tags: ['whatsapp', 'customer-support', 'notion', 'auto-reply', 'crm', 'business'],
  },
  {
    id: 'recipe-32',
    slug: 'lead-follow-up-agent',
    title: 'Lead Follow-up Agent',
    description: 'Track LinkedIn leads and automate personalized follow-up emails via Gmail.',
    problem: 'You connect with potential leads on LinkedIn but forget to follow up. By the time you remember, the conversation is cold. This recipe tracks new LinkedIn connections, researches their profile, and sends personalized follow-up emails at the right time — logging everything in a CRM spreadsheet.',
    mcps: [
      { name: 'LinkedIn MCP', slug: 'linkedin', role: 'Monitors new connections, reads profiles, and tracks conversation history' },
      { name: 'Gmail MCP', slug: 'gmail', role: 'Sends personalized follow-up emails based on LinkedIn profile context' },
      { name: 'Google Sheets MCP', slug: 'google-sheets', role: 'Maintains a simple CRM with lead status, follow-up dates, and notes' },
    ],
    config: JSON.stringify({
      mcpServers: {
        linkedin: {
          command: 'npx',
          args: ['linkedin-mcp'],
          env: { LINKEDIN_ACCESS_TOKEN: 'your_token' },
        },
        gmail: {
          command: 'npx',
          args: ['@anthropic/gmail-mcp'],
          env: { GMAIL_CREDENTIALS: './credentials.json' },
        },
        'google-sheets': {
          command: 'npx',
          args: ['@anthropic/google-sheets-mcp'],
          env: { GOOGLE_CREDENTIALS: './credentials.json', SHEET_ID: 'your_sheet_id' },
        },
      },
    }, null, 2),
    prompt: 'Check my LinkedIn for new connections from the last 48 hours. For each new connection, read their profile (title, company, recent posts). Draft a personalized follow-up email referencing something specific from their profile or recent activity. Log each lead in my "Sales CRM" Google Sheet with: name, company, title, connection date, email status, and next follow-up date (7 days from now). Show me the draft emails before sending.',
    category: 'Communication',
    difficulty: 'advanced',
    country: 'global',
    tags: ['linkedin', 'gmail', 'sales', 'crm', 'follow-up', 'leads', 'outreach'],
  },
]

// Helper functions
export function getRecipeBySlug(slug: string): Recipe | undefined {
  return RECIPES.find((r) => r.slug === slug)
}

export function getRecipesByCategory(category: string): Recipe[] {
  if (category === 'All') return RECIPES
  return RECIPES.filter((r) => r.category === category)
}

export function getFeaturedRecipes(): Recipe[] {
  return [
    RECIPES[0],  // Stock Price Alert Bot
    RECIPES[10], // Meeting Notes to Notion
    RECIPES[4],  // Invoice Payment Tracker
    RECIPES[26], // PR Review Reminder
  ]
}
