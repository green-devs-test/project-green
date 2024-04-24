import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  SearchContainer: {
    width: '98%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    margin: 'auto',
    marginTop: 50,
  },
  SearchDropdown: {
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
  SearchButton: {
    backgroundColor: "#84b884",
    textDecoration: "none",
    padding: "10px",
    margin: "3px 5px",
    color: "#fff",
    border: "0px",
    fontSize: "1rem",
    borderRadius: "50px",
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
