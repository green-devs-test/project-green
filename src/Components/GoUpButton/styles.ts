import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  goUpButton: {
    backgroundColor: "#84b884",
    width: 50,
    height: 50,
    borderRadius: 50,
    position: "fixed",
    zIndex: 12,
    display: "flex",
    right: 25,
    bottom: 15,
  },
  upArrow: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 'bolder',
    margin: "auto",
  },
  icon: {
    fontSize: 30,
    color: "#fff",
    display: "flex",
    margin: "auto",
  },
});

export default styles;
