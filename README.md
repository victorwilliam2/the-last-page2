# THE LAST PAGE — The Page Collective.NG

A responsive, interactive Next.js website concept for the mystery-comedy table-reading play **THE LAST PAGE: Who Betrayed the Book Club?**

## Features
- Cinematic landing page and original CSS book/envelope artwork
- 12 character profiles
- Four-act script reader with scene navigation
- Character mode to filter dialogue by reader
- Search within the active scene
- Case file with clue cards
- Audience suspicion voting (client-side/browser session only; no database required)
- Sealed-envelope ending modal
- Responsive mobile layout

## Important script note
The source script provided in the conversation cuts off during the final reveal at “I knew where the page was. I didn't k…”. The website marks that ending as incomplete and does not invent the missing conclusion. The script data in `app/page.tsx` currently includes the complete opening scene and selected supplied lines from later scenes, with explicit placeholders where the original text is missing or was not yet inserted. Before public launch, replace the placeholder lines with the complete approved script.

## Run locally
Requires Node.js 18.17 or later.

```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Deploy to Vercel
1. Upload this project folder's contents to a GitHub repository (the `package.json` should be at the repository root).
2. In Vercel, import the repository.
3. Use the default Next.js build settings.
4. Deploy. No environment variables are required for this first version.

## Notes
- Audience votes are held only in client-side state and reset when the page is refreshed. Persistent/shared live voting would need a database and a server-side voting endpoint.
- Google Fonts are loaded from Google Fonts. The page falls back to system serif/sans-serif fonts if unavailable.
