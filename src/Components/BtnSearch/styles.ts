import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    btnSearch: {
        backgroundColor: "#84b884",
        fontSize: "x-large",
        padding: "0.5rem",
        borderRadius: "5px",
        boxShadow: "none",
        border: "1 px solid black",
        color: "#fff",
        transition: "all 400ms ease",
        ":active": {
          background: "#5a965a",
        },
      },
});

export default styles;