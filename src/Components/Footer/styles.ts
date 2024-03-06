import { StyleSheet } from "aphrodite";
import { relative } from "path";

const styles = StyleSheet.create({
  footer: {
    padding: 7,
    textAlign: "center",
    fontSize: 12,
    zIndex: 1,
    position: "relative",
    bottom: 0,
  },
  footerLink: {
    textDecoration: "underline overline dotted #fff",
    color: "#FFF",
  },
});

export default styles;
