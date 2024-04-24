import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  btnSearch: {
    backgroundColor: "#398532",
    width: '95%',
    fontWeight: 700,
    lineHeight: '20px',
    fontSize: "1rem",
    margin: "0px",
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #DDF5DB",
    color: "#fff",
    transition: "all 400ms ease",
    ":active": {
      background: "#84b884", 
    },
  },
});

export default styles;
