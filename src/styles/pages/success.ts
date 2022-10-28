import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "$white",
  h1: {
    fontSize: "$2xl",
    marginBottom: "4rem",
  },
  p: {
    fontSize: "$xl",
    marginBottom: "5.5rem",
    textAlign: "center",
    lineHeight: 1.6,
    fonrWeight: 400,
  },
  footer: {
    a: {
      fontSize: "$md",
      fontWeight: "bold",
      textAlign: "center",
      color: "$green500",
      textDecoration: "none",
      "&:hover": {
        color: "$green300",
      },
    },
  },
});

export const SuccessImage = styled("div", {
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
  marginBottom: "3.25rem",
});
