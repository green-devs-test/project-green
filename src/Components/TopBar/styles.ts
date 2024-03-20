import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#fff",
    fontWeight: "bolder",
    fontSize: "1.5rem",
    verticalAlign: "text-bottom",
    height: "50px",
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    borderBottom: "2px solid black",
    position: "fixed",
    display: "flex",
    justifyContent: "flex-start",
    top: "0",
    zIndex: 10,
  },
});

export default styles;
