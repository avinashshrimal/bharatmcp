import { redirect } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SearchBar from '@/components/search/SearchBar'

export const metadata = {
  title: 'Search MCPs',
  description: 'Search for MCP Servers, AI Skills, Agents and Workflows.',
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams
  
  // If there's a query, redirect to browse
  if (params.q) {
    redirect(`/browse?q=${encodeURIComponent(params.q)}`)
  }

  return (
    <>
      <Navbar />
      <main className="relative z-[1] pt-14">
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-semibold text-white mb-3">Search the Registry</h1>
              <p className="text-[var(--color-text-secondary)]">Find MCP Servers, Skills, Agents, and Workflows</p>
            </div>
            <SearchBar />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
