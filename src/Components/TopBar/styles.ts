import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#a7c4a0",
    height: "50px",
    padding: "7px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 10px 10px -8px gray",
    marginBottom: 20,
  },

  menuIconDefault: {
    "@media (min-width: 1024px)": {
      visibility: "hidden",
    },
  },
});

export default styles;
