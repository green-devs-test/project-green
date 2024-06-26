import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
      colaborateCard: {
        backgroundColor: "#DDF5DB",
        borderRadius: "10px",
        margin: "15px",
      },
      colaborateContainer: {
        backgroundColor: "#DDF5DB",
        display: "flex",
        flexDirection: "row",
        borderRadius: "18px",
        padding: "10px",
        marginBottom: "0px",
      },
      colaborateInfo: {
        display: "flex",
        flexDirection: "column",
        padding: "5px",
      },
      colaborateTitle: {
        color: "#000000",
        fontSize: "1.5rem",
        margin: '0px',
        fontWeight: 800,
      },
      colaborateParagraph: {
        color: "#000000",
        fontSize: "1rem",
        fontWeight: 400,
        textAlign: "left",
        margin: '0px',
      },
      colaboratePhoto: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin: "auto",
        padding: "5px",
        width: '20%',
      },
      icon: {
        fontSize: "3rem",
        color: "#fff",
        padding: "0px 30px",
      },
      containerBtn: {
        display: "flex",
        justifyContent: "center",
      },
      btnColaborate: {
        backgroundColor: "#fff",
        color: "#398532",
        width: "90%",
        textDecoration: "none",
        padding: "10px 10px",
        marginBottom: "20px",
        border: "solid 1px #398532",
        fontSize: "1rem",
        borderRadius: "8px",
        transition: "all 400ms ease",
        ":active": {
          background: "#5a965a",
        },
      },
});

export default styles;