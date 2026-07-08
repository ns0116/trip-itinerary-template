# server/ (optional addon)

The template works fully offline with `storage.kind: "localStorage"` in
`config.js` — you don't need this unless you want the checklist to sync
across multiple devices (e.g. you and a travel companion both checking items
off from your own phones).

## Run it

```bash
cd server
npm install
npm start
# → Checklist API listening on http://localhost:3000
```

Or with Docker:

```bash
cd server
docker compose up
```

Either way, checklist state is persisted to `server/data/checklist.json`
(gitignored — this is per-deployment data, not template content).

## Point config.js at it

```js
storage: {
  kind: "restApi",
  endpoint: "http://localhost:3000/api/checklist",
},
```

If the API is unreachable, the checklist automatically falls back to
`localStorage` — no errors surface to the user.

## Deploying alongside the static site

This addon is a plain Express server; deploy it anywhere that runs Node
(a small VM, Fly.io, Render, etc.) and point `endpoint` at its public URL.
See `../docs/DEPLOYMENT.md` for how the static frontend itself gets deployed
and protected.
