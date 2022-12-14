import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",

      gray900: "#121214",
      gray800: "#202024",
      gray300: "c4c4cc",
      gray100: "e1e1e6",

      green500: "#00875f",
      green400: "#1ea483",
      green300: "#00b37e",

      purple400: "#7465d4",
    },
    fontSizes: {
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
  media: {
    md: "(min-width: 640px)",
    lg: "(min-width: 768px)",
    xl: "(min-width: 1024px)",
  },
});
