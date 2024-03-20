import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  newSearchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  newSearchDropdown: {
    border: "2px solid black",
    borderRadius: "12px",
    margin: "5px",
    padding: "0px 5px",
    width: "100%",
  },
  searchOptions: {
    backgroundColor: "#84b884",
    textDecoration: "none",
    padding: "7px",
    margin: "3px 5px",
    color: "#fff",
    border: "none",
    fontSize: "1rem",
    borderRadius: "50px",
    transition: "all 400ms ease",
    ":active": {
      background: "#5a965a",
    },
  },
  newSearchButton: {
    backgroundColor: "#84b884",
    textDecoration: "none",
    padding: "7px",
    margin: "3px 5px",
    color: "#fff",
    border: "1px solid black",
    fontSize: "1rem",
    borderRadius: "50px",
    transition: "all 400ms ease",
    ":active": {
      background: "#5a965a",
    },
  },
});

export default styles;
