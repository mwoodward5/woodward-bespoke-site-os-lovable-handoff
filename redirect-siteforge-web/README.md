# Retire siteforge-web-three → redirect to the app

Approved by Mark 2026-07-07. Deploy from this folder (Codex or Mark, needs Vercel CLI auth):

```
cd redirect-siteforge-web
npx vercel deploy --prod --yes
```

Project pin: `.vercel/project.json` → siteforge-web (prj_RkEbsPfKqypQzAPZ7nTfMuB89QbQ, team rocketsites).
Result: every URL on siteforge-web-three.vercel.app 308-redirects to the same path on siteforge-app-seven.vercel.app.
Rollback: promote the previous deployment in the Vercel dashboard.
