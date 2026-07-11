import { DEFAULT_BADGE_TONES } from "./_tones.js";

// Coastal — derived from the original Okinawa trip itinerary. Adds a subtle
// wave decoration under the sidebar header as this set's signature flourish.
export default {
  name: "Coastal",
  fonts: {
    display: '"Zen Kaku Gothic New", sans-serif',
    sans: '"Noto Sans JP", sans-serif',
    serif: '"Noto Serif JP", serif',
  },
  googleFonts: [
    "Noto+Sans+JP:wght@300;400;500;700",
    "Noto+Serif+JP:wght@400;600;700",
    "Zen+Kaku+Gothic+New:wght@700;900",
  ],
  colors: {
    base: "#ebf5fa",
    surface: "#ffffff",
    primary: "#003a5c",
    accent: "#e8562a",
    support: "#00897b",
    text: "#1a2e3a",
    textMuted: "#5a7080",
    border: "#e0f2fe",
  },
  darkColors: {
    base: "#0e1d2b",
    surface: "#152335",
    primary: "#4db8e0",
    accent: "#e8683f",
    support: "#28a89a",
    text: "#cce8f5",
    textMuted: "#6895ab",
    border: "#1e3a52",
  },
  surface: {
    radius: "1rem",
    shadowSoft: "0 8px 32px -8px rgba(0,60,90,.08)",
    shadowFloat: "0 14px 48px -8px rgba(0,60,90,.12)",
  },
  icons: {},
  badgeTones: DEFAULT_BADGE_TONES,
  decorations: { headerWave: true },
};
