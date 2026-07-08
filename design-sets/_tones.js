// Shared default badge-tone palette (see docs/DESIGN_SETS.md#badge-tone-表示).
// Design sets that don't need a distinct look can import and reuse this as-is;
// others (e.g. noir) override individual tones to match their own aesthetic.
export const DEFAULT_BADGE_TONES = {
  reserved: { bg: "#f5f5f4", fg: "#57534e", border: "#e7e5e4" },
  required: { bg: "#fff7ed", fg: "#c85a32", border: "rgba(200,90,50,.35)" },
  recommended: { bg: "#eff6ff", fg: "#2563eb", border: "#bfdbfe" },
  hiddenGem: { bg: "#f0fdf4", fg: "#556b2f", border: "rgba(85,107,47,.3)" },
  optional: { bg: "#f9fafb", fg: "#6b7280", border: "#e5e7eb" },
  warning: { bg: "#fef2f2", fg: "#dc2626", border: "#fecaca" },
  world: { bg: "#ecfdf5", fg: "#047857", border: "#a7f3d0" },
  sunny: { bg: "#fefce8", fg: "#a16207", border: "#fef08a" },
  rainy: { bg: "#f0f9ff", fg: "#0369a1", border: "#bae6fd" },
};
