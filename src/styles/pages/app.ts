import { styled } from "..";

export const Container = styled("div", {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  flexDirection: "column",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
});
