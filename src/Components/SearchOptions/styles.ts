import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  optionsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "0px",
    borderTop: "1px solid black",
    width: "100%",
    borderBottom: "1px solid black",
  },
  numbersOfResults: {
    width: "100%",
    textAlign: "start",
    fontWeight: 900,
    fontSize: "1.1rem",
  },
  searchOptions: {
    backgroundColor: "#84b884",
    textDecoration: "none",
    padding: "7px",
    margin: "3px 5px",
    color: "#fff",
    border: "none",
    fontSize: "1rem",
    borderRadius: "5px",
    transition: "all 400ms ease",
    ":active": {
      background: "#5a965a",
    },
  },
  icon: {
    fontSize: 30,
  },
});

export default styles;
