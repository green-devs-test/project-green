import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "column",
  },
  mainContainer: {
    color: "black",
  },
  mainBodyContainer: {
    display: "flex",
  },
  footerContainer: {
    backgroundColor: "#a7c4a0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
