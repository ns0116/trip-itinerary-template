import { DEFAULT_BADGE_TONES } from "./_tones.js";

// Washi — new wa-modern set for domestic/onsen trips. Warm paper base,
// muted ink/clay/moss palette, soft shadows.
export default {
  name: "Washi",
  fonts: {
    display: '"Noto Serif JP", serif',
    sans: '"Noto Sans JP", sans-serif',
    serif: '"Noto Serif JP", serif',
  },
  googleFonts: ["Noto+Serif+JP:wght@400;600;700", "Noto+Sans+JP:wght@300;400;500;700"],
  colors: {
    base: "#f5f1e8",
    surface: "#fffdf8",
    primary: "#5b4636",
    accent: "#9c6b3f",
    support: "#6a7f4f",
    text: "#3a352e",
    textMuted: "#8a8072",
    border: "#e6ddca",
  },
  surface: {
    radius: "0.5rem",
    shadowSoft: "0 6px 24px -8px rgba(91,70,54,.08)",
    shadowFloat: "0 10px 32px -8px rgba(91,70,54,.12)",
  },
  icons: {},
  badgeTones: DEFAULT_BADGE_TONES,
};
