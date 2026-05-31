import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import BackToTop from "@/components/ui/BackToTop";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "BharatMCP — India's MCP Registry for AI Skills, Agents & Servers",
    template: "%s | BharatMCP",
  },
  description:
    "Discover, install, and publish MCP Servers, AI Skills, Agents and Workflows. India's largest registry with 312+ servers. Official partners: Zerodha, Razorpay, Zomato, Swiggy.",
  keywords: ["MCP", "Model Context Protocol", "AI", "India", "Razorpay", "Zerodha", "MCP Server", "AI Skills", "AI Agents"],
  authors: [{ name: "BharatMCP" }],
  openGraph: {
    title: "BharatMCP — India's MCP Registry",
    description: "312+ MCP Servers. 20 India MCPs. Official partners: Zerodha, Razorpay, Zomato, Swiggy, BrowserStack.",
    url: "https://bharatmcp.in",
    siteName: "BharatMCP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BharatMCP — India's MCP Registry",
    description: "312+ MCP Servers indexed. India's largest registry for AI Skills, Agents & Workflows.",
  },
  metadataBase: new URL("https://bharatmcp.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A0F1E] text-white font-sans">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
