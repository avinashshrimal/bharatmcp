import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    description: 'Get started with the BharatMCP registry at no cost. Perfect for individual developers exploring the ecosystem.',
    features: [
      'Browse & search all MCPs',
      'Install any public MCP server',
      'Community support (Discord)',
      '1 project submission',
      'Basic install analytics',
      'Public profile page',
    ],
    cta: 'Get Started — Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '₹499',
    period: '/month',
    description: 'For developers who publish regularly and want maximum visibility for their projects.',
    features: [
      'Everything in Free',
      'Unlimited project submissions',
      'Priority listing in search results',
      'Detailed analytics dashboard',
      'Verified creator badge',
      'Priority review (24h turnaround)',
      'Custom profile branding',
      'API rate limit: 5,000 req/min',
    ],
    cta: 'Join Waitlist',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For teams and organizations with advanced needs, private registries, and dedicated support.',
    features: [
      'Everything in Pro',
      'Private registry hosting',
      'SSO & team management',
      'Custom domain support',
      'Dedicated account manager',
      'SLA guarantee (99.9% uptime)',
      'Custom integrations & webhooks',
      'Unlimited API access',
      'Invoice billing',
    ],
    cta: 'Join Waitlist',
    highlighted: false,
  },
]

const comparisonFeatures = [
  { feature: 'Browse & install MCPs', free: true, pro: true, enterprise: true },
  { feature: 'Project submissions', free: '1', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Install analytics', free: 'Basic', pro: 'Detailed', enterprise: 'Advanced + export' },
  { feature: 'Search priority', free: false, pro: true, enterprise: true },
  { feature: 'Verified badge', free: false, pro: true, enterprise: true },
  { feature: 'Review turnaround', free: '7 days', pro: '24 hours', enterprise: 'Instant' },
  { feature: 'API rate limit', free: '100/min', pro: '5,000/min', enterprise: 'Unlimited' },
  { feature: 'Private registry', free: false, pro: false, enterprise: true },
  { feature: 'Team management', free: false, pro: false, enterprise: true },
  { feature: 'SSO integration', free: false, pro: false, enterprise: true },
  { feature: 'Custom domain', free: false, pro: false, enterprise: true },
  { feature: 'Support', free: 'Community', pro: 'Email (48h)', enterprise: 'Dedicated manager' },
  { feature: 'SLA guarantee', free: false, pro: false, enterprise: '99.9%' },
]

const faqs = [
  {
    question: 'Is the free plan really free?',
    answer: 'Yes, completely free with no credit card required. You can browse, search, install any public MCP server, and submit one project — all at no cost, forever. We believe the core registry should be accessible to everyone.',
  },
  {
    question: 'What counts as a "submission"?',
    answer: 'A submission is a new project published to the registry. Updates to existing projects (new versions, description changes) do not count as additional submissions. On the Free plan, you can publish 1 project and update it as many times as you want.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. Pro subscriptions can be cancelled at any time from your dashboard. You\'ll retain Pro features until the end of your current billing period. No cancellation fees, no questions asked.',
  },
  {
    question: 'Do you offer student discounts?',
    answer: 'Yes! Students with a valid .edu email or GitHub Student Developer Pack get Pro for free for 12 months. Email us at students@bharatmcp.in with your verification.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards, UPI, net banking, and wallets via Razorpay. Enterprise plans support invoice billing with NET-30 terms.',
  },
  {
    question: 'Is there a free trial for Pro?',
    answer: 'We offer a 14-day free trial of Pro with full features. No credit card required to start the trial. If you don\'t upgrade after 14 days, you\'ll automatically move to the Free plan.',
  },
  {
    question: 'What\'s included in Enterprise?',
    answer: 'Enterprise includes everything in Pro plus private registry hosting (your MCPs visible only to your team), SSO integration, team management with role-based access, custom domain, dedicated support manager, and SLA guarantees. Pricing is based on team size and usage.',
  },
  {
    question: 'How does the verified badge work?',
    answer: 'Pro subscribers get a verified creator badge (blue checkmark) on their profile and all their projects. This signals to users that you\'re a committed, active publisher. Official badges (orange) are reserved for companies publishing their own service integrations.',
  },
  {
    question: 'Can I switch plans mid-cycle?',
    answer: 'Yes. Upgrading takes effect immediately and you\'ll be charged a prorated amount for the remainder of your billing period. Downgrading takes effect at the start of your next billing period.',
  },
  {
    question: 'Do you offer annual billing?',
    answer: 'Yes! Annual billing gives you 2 months free (₹4,990/year instead of ₹5,988). You can switch between monthly and annual billing from your dashboard at any time.',
  },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="relative z-[1] pt-14">
        {/* Hero */}
        <section className="border-b border-[var(--color-border)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto">
              Start free. Upgrade when you need more visibility, faster reviews, and advanced analytics.
            </p>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Coming soon note */}
            <div className="rounded-lg bg-[#FF6B00]/5 border border-[#FF6B00]/20 p-4 mb-8 text-center">
              <p className="text-sm text-[var(--color-text-secondary)]">
                <span className="font-semibold text-[#FF6B00]">Pro &amp; Enterprise launching soon.</span>{' '}
                The registry is free to use today. Join the waitlist to get early access to premium features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-lg border p-6 flex flex-col ${
                    plan.highlighted
                      ? 'border-[#FF6B00] bg-[var(--color-surface)]'
                      : 'border-[var(--color-border)] bg-[var(--color-surface)]'
                  }`}
                >
                  {plan.highlighted && (
                    <span className="inline-block self-start text-xs font-medium text-[#FF6B00] bg-[#FF6B00]/10 px-2.5 py-1 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-semibold text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-[var(--color-text-muted)] text-sm">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                    {plan.description}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <svg
                          className="w-4 h-4 mt-0.5 shrink-0 text-[#FF6B00]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-[var(--color-text-secondary)]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-8 w-full rounded-md py-2.5 text-sm font-medium transition-colors ${
                      plan.highlighted
                        ? 'bg-[#FF6B00] text-white hover:bg-[#E05E00]'
                        : 'border border-[var(--color-border)] text-white hover:bg-white/5'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="border-b border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[var(--color-border)] rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[var(--color-surface)]">
                    <th className="text-left px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Feature</th>
                    <th className="text-center px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Free</th>
                    <th className="text-center px-4 py-3 text-[#FF6B00] font-medium border-b border-[var(--color-border)]">Pro</th>
                    <th className="text-center px-4 py-3 text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  {comparisonFeatures.map((row) => (
                    <tr key={row.feature}>
                      <td className="px-4 py-3 text-[var(--color-text-secondary)]">{row.feature}</td>
                      <td className="px-4 py-3 text-center">
                        {row.free === true ? (
                          <span className="text-green-400">✓</span>
                        ) : row.free === false ? (
                          <span className="text-[var(--color-text-muted)]">—</span>
                        ) : (
                          <span className="text-[var(--color-text-secondary)]">{row.free}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.pro === true ? (
                          <span className="text-green-400">✓</span>
                        ) : row.pro === false ? (
                          <span className="text-[var(--color-text-muted)]">—</span>
                        ) : (
                          <span className="text-[var(--color-text-secondary)]">{row.pro}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.enterprise === true ? (
                          <span className="text-green-400">✓</span>
                        ) : row.enterprise === false ? (
                          <span className="text-[var(--color-text-muted)]">—</span>
                        ) : (
                          <span className="text-[var(--color-text-secondary)]">{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
                >
                  <h3 className="text-sm font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
