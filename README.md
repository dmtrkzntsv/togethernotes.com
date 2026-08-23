# Together Notes website

Marketing, privacy, support, and agent-spec pages for [togethernotes.com](https://togethernotes.com).

## Development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
npm run build
```

The App Store destination is centralized in `app/components/AppStoreBadges.tsx` so the public product URL can replace the temporary App Store root URL when the listing is live.
