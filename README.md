# Cyber Portfolio (Next.js + Supabase + Vercel)

## 1) Run locally
```bash
npm install
# (equivalent to) npm install @supabase/supabase-js lucide-react framer-motion
cp .env.example .env.local      # then fill in your Supabase keys
npm run dev                     # http://localhost:3000
```

## 2) Supabase
1. Create a project at supabase.com.
2. SQL Editor → paste `supabase/schema.sql` → Run.
3. Project Settings → API → copy **Project URL** and **anon public key** into `.env.local`.
4. Read messages later in Table Editor → `anonymous_messages` (public visitors can only insert, not read).

## 3) Make it yours
Edit `src/lib/config.ts`: name, GitHub, LinkedIn, and the PROJECTS list (one object per project).
Add your CV at `public/cv.pdf` and optionally a photo at `public/me.jpg`.

## 4) Publish with a permanent link (GitHub → Vercel)
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```
Then on vercel.com → Add New Project → import the repo → add the two env variables
(`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) → Deploy.
Every `git push` redeploys automatically. Your link looks like `https://your-project.vercel.app`
and you can attach your own domain in Vercel → Settings → Domains.
