import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  optionsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "auto",
    borderTop: "0.5px solid #DFDFDF",
    width: "98%",
  },
  numbersOfResults: {
    width: "100%",
    textAlign: "start",
    fontWeight: 500,
    fontSize: "0.9rem",
    lineHeight: '20px',
    color: '#000000',
    marginLeft: '20px'
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
