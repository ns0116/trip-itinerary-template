import { DEFAULT_BADGE_TONES } from "./_tones.js";

// Iberia — default set, derived from the original Spain trip itinerary.
export default {
  name: "Iberia",
  fonts: {
    display: '"Cormorant Garamond", serif',
    sans: '"Noto Sans JP", sans-serif',
    serif: '"Noto Serif JP", serif',
  },
  googleFonts: [
    "Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400",
    "Noto+Sans+JP:wght@300;400;500;700",
    "Noto+Serif+JP:wght@400;600;700",
  ],
  colors: {
    base: "#f9f9f9",
    surface: "#ffffff",
    primary: "#8b0000",
    accent: "#c85a32",
    support: "#556b2f",
    text: "#2d2d2d",
    textMuted: "#7a7a7a",
    border: "#ececec",
  },
  darkColors: {
    base: "#1a1a1a",
    surface: "#242424",
    primary: "#e87878",
    accent: "#e07a52",
    support: "#7aaa4a",
    text: "#e8e8e8",
    textMuted: "#9a9a9a",
    border: "#333333",
  },
  surface: {
    radius: "0.75rem",
    shadowSoft: "0 10px 40px -10px rgba(0,0,0,.06)",
    shadowFloat: "0 15px 50px -10px rgba(0,0,0,.08)",
  },
  icons: {},
  badgeTones: DEFAULT_BADGE_TONES,
};
