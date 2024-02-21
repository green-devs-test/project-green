import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#a7c4a0",
    height: "10vh",
    padding: "7px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 10px 10px -8px gray",
    marginBottom: 20,
  },

  menu_icon_default: {
    "@media (min-width: 1024px)": {
      visibility: "hidden",
    },
  },
});

export default styles;
