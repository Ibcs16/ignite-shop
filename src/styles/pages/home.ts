import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw  - 1180px )/2))",
  paddingLeft: "1.5rem",
  height: 300,
  "@lg": { minHeight: 656, marginLeft: "auto" },
});

export const Product = styled("a", {
  height: "100%",
  background: "linear-gradient(180deg, $green400 0%, $purple400 100%)",
  borderRadius: 8,
  //   padding: "0.25rem",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "contain",
  },
  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$md",
      color: "$white",
      "@lg": { fontSize: "$lg" },
      width: "100%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    span: {
      fontSize: "$md",
      fontWeight: "bold",
      color: "$green300",
      "@lg": { fontSize: "$xl" },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
});
