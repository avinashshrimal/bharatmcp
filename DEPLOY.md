# Deploying BharatMCP to Vercel

## Prerequisites
- GitHub account
- Vercel account (free)
- Domain (bharatmcp.in — ~₹199-399)

## Steps

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. Go to vercel.com and import the GitHub repo

3. Vercel auto-detects Next.js — just click Deploy

4. After deployment, add custom domain:
   - Go to Project Settings > Domains
   - Add bharatmcp.in
   - Update DNS at your registrar (point to Vercel)

5. Done! Site is live at bharatmcp.in

## DNS Setup (Cloudflare — Free)
1. Buy domain from Namecheap/GoDaddy
2. Add to Cloudflare (free plan)
3. Point nameservers to Cloudflare
4. Add CNAME record: @ → cname.vercel-dns.com
5. Add CNAME record: www → cname.vercel-dns.com
6. Verify in Vercel dashboard

## Environment Variables (set in Vercel dashboard)
None required for the current static version.
When you add auth/database later:
- DATABASE_URL
- NEXTAUTH_SECRET
- GITHUB_CLIENT_ID
- GITHUB_CLIENT_SECRET
