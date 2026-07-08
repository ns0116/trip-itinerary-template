// Noir — new minimal/monochrome set for business or city trips. Nearly flat
// shadows, thin-weight line icons, and a desaturated badge palette that
// overrides the shared defaults instead of reusing them.
export default {
  name: "Noir",
  fonts: {
    display: '"Inter", "Noto Sans JP", sans-serif',
    sans: '"Noto Sans JP", sans-serif',
    serif: '"Noto Sans JP", sans-serif',
  },
  googleFonts: ["Inter:wght@400;500;600;700", "Noto+Sans+JP:wght@300;400;500;700"],
  colors: {
    base: "#f4f4f5",
    surface: "#ffffff",
    primary: "#18181b",
    accent: "#3f3f46",
    support: "#71717a",
    text: "#18181b",
    textMuted: "#71717a",
    border: "#e4e4e7",
  },
  surface: {
    radius: "0.5rem",
    shadowSoft: "0 1px 3px rgba(0,0,0,.06)",
    shadowFloat: "0 4px 12px rgba(0,0,0,.08)",
  },
  icons: {},
  badgeTones: {
    reserved: { bg: "#f4f4f5", fg: "#52525b", border: "#d4d4d8" },
    required: { bg: "#e4e4e7", fg: "#18181b", border: "#a1a1aa" },
    recommended: { bg: "#f4f4f5", fg: "#3f3f46", border: "#d4d4d8" },
    hiddenGem: { bg: "#fafafa", fg: "#52525b", border: "#e4e4e7" },
    optional: { bg: "#fafafa", fg: "#a1a1aa", border: "#e4e4e7" },
    warning: { bg: "#18181b", fg: "#ffffff", border: "#18181b" },
    world: { bg: "#e4e4e7", fg: "#18181b", border: "#a1a1aa" },
    sunny: { bg: "#f4f4f5", fg: "#52525b", border: "#d4d4d8" },
    rainy: { bg: "#f4f4f5", fg: "#52525b", border: "#d4d4d8" },
  },
};
