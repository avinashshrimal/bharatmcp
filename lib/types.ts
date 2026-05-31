export interface Project {
  id: string
  slug: string
  name: string
  description: string
  creator: { username: string; avatar_url: string | null }
  category: { slug: string; name: string }
  tags: string[]
  verification_tier: 'bharatmcp_verified' | 'community_verified' | 'listed'
  country: 'india' | 'global'
  rating: number
  review_count: number
  download_count: number
  install_count: number
  star_count: number
  version: string
  license: string
  repo_url: string
  github_url?: string
  created_at: string
  updated_at: string
  type: 'mcp' | 'skill' | 'agent' | 'workflow'
}

export interface Category {
  slug: string
  name: string
  description: string
  icon: string
  project_count: number
}

export interface Creator {
  username: string
  display_name: string
  avatar_url: string | null
  bio: string
  project_count: number
  total_downloads: number
  total_stars: number
  verification_status: 'verified' | 'unverified'
  badges: string[]
  created_at: string
}

export interface Stats {
  total_projects: number
  india_projects: number
  total_downloads: number
  total_creators: number
  total_installs: number
}
