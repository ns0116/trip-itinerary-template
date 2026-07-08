# trip-itinerary

Clone this, write one `config.js`, and get a shareable travel itinerary page —
timeline, tabs, hotels/flights sidebar, optional weather-plan switcher and
pre-booking checklist. No build step: it's `index.html` + ES modules, so it
runs straight from a static file server (or `file://` in most browsers) and
deploys as-is to GitHub Pages.

## Live demos

- [Coastal — weatherModes + candidates](https://ns0116.github.io/trip-itinerary-template/examples/okinawa/)
- [Iberia — checklist](https://ns0116.github.io/trip-itinerary-template/examples/spain/)

## Quickstart

```bash
git clone <this-repo> my-trip
cd my-trip
cp config.example.js config.js
# edit config.js with your own trip
python3 -m http.server 8080   # or any static file server
open http://localhost:8080/
```

That's it — `index.html` imports `./config.js` and renders the page. No npm
install, no bundler.

## What you get

- **4 Design Sets** — swap the whole look with one line (`config.design`):
  `iberia` (elegant serif, warm reds — default), `coastal` (breezy ocean
  blues), `noir` (minimal monochrome), `washi` (warm wa-modern paper tones).
  See `examples/` for two full demo itineraries and `docs/DESIGN_SETS.md` for
  the token reference.
- **Feature flags** — turn `weatherModes` (per-day sunny/rainy plan
  switching), `checklist` (pre-booking checklist widget), and `candidates`
  (multiple candidate spots per event) on or off independently.
- **Offline-first icons** — inline SVG (Lucide, ISC), no icon-font CDN.
  Only Google Fonts are loaded over the network.
- **Checklist persistence** — `localStorage` by default; point it at the
  optional `server/` REST API addon if you want it to sync across devices.

## Repository layout

```
index.html            entry point — imports ./config.js + src/engine.js
config.example.js      copy this to config.js
src/                   engine, icons, storage adapter, stylesheet
design-sets/           iberia / coastal / noir / washi
examples/               two full demo itineraries (fictional data)
server/                 optional checklist-sync REST API (Express)
docs/                   SCHEMA / DESIGN_SETS / THEMING / DEPLOYMENT
```

## Writing your own itinerary

The whole shape of `config.js` is documented in [docs/SCHEMA.md](docs/SCHEMA.md).
In short:

```js
export default {
  design: "iberia",
  features: { weatherModes: false, checklist: true, candidates: false },
  meta: { title: "My Trip 2026", period: "Apr 10 — Apr 12", lang: "ja" },
  hotels: [...], flights: [...], notes: [...],
  tabs: [{ id: "day1", date: "Apr 10", dayOfWeek: "Fri" }, ...],
  days: [{ id: "day1", title: "...", events: [
    { time: "09:00", title: "...", type: "sight", desc: "..." },
  ] }],
};
```

Events are written **semantically** (`type: "sight" | "food" | "hotel" | ...`)
— the Design Set decides the icon and color, not the data. See
`examples/okinawa/config.js` for the weatherModes + candidates form, and
`examples/spain/config.js` for the checklist form.

## Adding a Design Set

See [docs/THEMING.md](docs/THEMING.md).

## Deploying

Two modes depending on whether your itinerary contains real bookings and
private notes or is just a demo — see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md):

- **Public demo data** → GitHub Pages, no auth.
- **Your real trip** → GitHub **private** repo + Cloudflare Pages + Cloudflare
  Access (email OTP). Do not rely on client-side password checks — the page
  source is always readable.

## Licenses

- This template: MIT (see `LICENSE`).
- Icons: extracted from [Lucide](https://lucide.dev) (ISC).
- Fonts: Google Fonts (OFL), loaded via `<link>` — self-host or inline if you
  need a fully offline build.
