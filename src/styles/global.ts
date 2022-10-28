import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },
  body: {
    height: "100%",
    webkitFontSmoothing: "antialiased",
    backgroundColor: "$gray900",
    color: "$gray100",
  },
  "body, input, textarea, button": {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
  },
});
