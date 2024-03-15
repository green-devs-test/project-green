import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#fff",
    height: "50px",
    width: "100%",
    padding: "7px",
    boxSizing: "border-box",
    borderBottom: '2px solid black',
    position: "fixed",
    display: 'flex',
    justifyContent: 'flex-end',
    top: '0',
    zIndex: 10,
  },
});

export default styles;
