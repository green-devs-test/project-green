import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  btnSearch: {
    backgroundColor: "#398532",
    width: '195%', // Check this
    boxShadow: 'none', // Check this
    fontWeight: 700,
    lineHeight: '20px',
    fontSize: "1rem",
    margin: "0px",
    padding: "15px",
    borderRadius: "8px",
    color: "#fff",
    transition: "all 400ms ease",
    ":active": {
      background: "#84b884", 
    },
  },
});

export default styles;
