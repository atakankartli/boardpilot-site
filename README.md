# Board Pilot website

The public site for Board Pilot: the landing page, `privacy.html` and `support.html`.
Next.js (App Router, static export), React, TypeScript, Tailwind CSS v4, lucide-react.

## Run and build

```sh
npm ci
npm run dev      # http://localhost:3000/boardpilot-site
npm run build    # static files in out/
```

A push to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/pages.yml`).

## The base path

GitHub Pages serves the site at `https://atakankartli.github.io/boardpilot-site/`, so every URL starts
with `/boardpilot-site`. The value is set in one place: `src/lib/site.ts` (`BASE_PATH`, `SITE_ORIGIN`).

When you move the site to an own domain (for example `boardpilot.app`):

1. Set the environment variables in the build step of `.github/workflows/pages.yml`:
   ```yaml
   - run: npm run build
     env:
       NEXT_PUBLIC_BASE_PATH: ""
       NEXT_PUBLIC_SITE_ORIGIN: https://boardpilot.app
   ```
   (Or change the two default values in `src/lib/site.ts`.)
2. Add the domain in the repo settings: Settings > Pages > Custom domain.
3. Update the privacy and support URLs in App Store Connect to the new domain.

## Images

`scripts/make_assets.py` makes the images in `public/` (logo, screenshots as WebP) and the icons and
Open Graph image in `src/app/` from the brand files and app screenshots. Needs Python with Pillow.
The output is in git, so run it only when a source image changes.
