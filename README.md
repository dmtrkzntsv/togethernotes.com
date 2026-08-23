# Together Notes website

Marketing, privacy, and support pages for [togethernotes.com](https://togethernotes.com), built with Astro and deployed through GitHub Pages.

## Development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
npm run build
```

The App Store destination is centralized in `app/components/AppStoreBadges.tsx` so the public product URL can replace the temporary App Store root URL when the listing is live.

Pushes to `main` are deployed automatically.
