import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  goUpButton: {
    backgroundColor: "#84b884",
    width: 40,
    height: 40,
    borderRadius: 50,
    border: "2px solid black",
    position: "fixed",
    zIndex: 12,
    display: "flex",
    right: 25,
    bottom: 15,
  },
  icon: {
    fontSize: 30,
    color: "#fff",
    display: "flex",
    margin: "auto",
  },
});

export default styles;
