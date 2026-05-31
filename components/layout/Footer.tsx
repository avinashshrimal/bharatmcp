import Link from 'next/link';

const platformLinks = [
  { label: 'Browse', href: '/browse' },
  { label: 'Categories', href: '/category/all' },
  { label: 'India MCPs', href: '/category/india' },
  { label: 'Trending', href: '/browse?sort=trending' },
  { label: 'New', href: '/browse?sort=new' },
];

const developerLinks = [
  { label: 'API Docs', href: '/api-docs' },
  { label: 'CLI', href: '/cli' },
  { label: 'Submit MCP', href: '/submit' },
  { label: 'GitHub', href: 'https://github.com/bharatmcp' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-heading font-semibold text-sm text-white mb-4">{title}</h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-[var(--color-text-muted)] hover:text-saffron-500 transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AshokaChakraIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="saffronGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B00" />
          <stop offset="100%" stopColor="#FF8520" />
        </linearGradient>
      </defs>
      <circle cx="14" cy="14" r="12" stroke="url(#saffronGradientFooter)" strokeWidth="2" fill="none" />
      <circle cx="14" cy="14" r="3" fill="url(#saffronGradientFooter)" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const x1 = 14 + 4 * Math.cos(angle);
        const y1 = 14 + 4 * Math.sin(angle);
        const x2 = 14 + 11 * Math.cos(angle);
        const y2 = 14 + 11 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#saffronGradientFooter)"
            strokeWidth="0.75"
          />
        );
      })}
    </svg>
  );
}

function IndiaFlagIcon() {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="India flag"
      role="img"
    >
      <rect width="20" height="4.67" fill="#FF9933" rx="1" />
      <rect y="4.67" width="20" height="4.67" fill="#FFFFFF" />
      <rect y="9.33" width="20" height="4.67" fill="#128807" rx="1" />
      <circle cx="10" cy="7" r="1.5" fill="#000080" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="max-w-[1200px] mx-auto px-8 pt-[60px] pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-saffron-500 to-saffron-400 flex items-center justify-center">
                <AshokaChakraIcon />
              </div>
              <span className="font-heading font-[800] text-lg leading-none">
                <span className="text-white">Bharat</span>
                <span className="text-saffron-500">MCP</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-[280px]">
              India&apos;s largest registry for MCP Servers, AI Skills, Agents and Workflows.
            </p>
          </div>

          {/* Link columns */}
          <FooterLinkColumn title="Platform" links={platformLinks} />
          <FooterLinkColumn title="Developers" links={developerLinks} />
          <FooterLinkColumn title="Company" links={companyLinks} />
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/[0.07] pt-6 flex flex-col min-[600px]:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; 2025 BharatMCP. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
            <span>Made with</span>
            <span className="text-red-500">&hearts;</span>
            <span>in India</span>
            <IndiaFlagIcon />
          </div>
        </div>
      </div>
    </footer>
  );
}
