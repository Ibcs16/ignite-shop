import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr",

  padding: "1.5rem",
  gap: "4.5rem",
  margin: "0 auto",
  maxWidth: 1080,
  minHeight: 300,
  "@lg": {
    minHeight: 656,
    gridTemplateColumns: "1fr 1fr",
    alignItems: "stretch",
  },
});

export const ProductImage = styled("div", {
  width: "100%",
  height: 300,
  "@lg": { height: 656 },

  background: "linear-gradient(180deg, $green400 0%, $purple400 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  img: {
    objectFit: "contain",
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  h1: {
    fontSize: "$xl",
    fontWeight: "bold",
    color: "$white",
    marginBottom: "1rem",
    "@lg": { fontSize: "$2xl" },
  },
  strong: {
    fontWeight: 400,
    fontSize: "$xl",
    color: "$green500",
    marginBottom: "2.5rem",
    "@lg": { fontSize: "$2xl" },
  },
  p: {
    fontSize: "$md",
    color: "$white",
    marginBottom: "2.5rem",
    lineHeight: 1.6,
    flex: 1,
    fontWeight: 400,
  },
  button: {
    width: "100%",
    alignSelf: "flex-end",
    padding: "1.25rem",
    backgroundColor: "$green500",
    color: "$white",
    fontWeight: "bold",
    fontSize: "$md",
    border: 0,
    borderRadius: 8,
    cursor: "pointer",
    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  },
});
