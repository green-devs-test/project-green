import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    optionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '0px 15px'
      },
    numbersOfResults: {
      width: '100%',
      textAlign: 'center',
    },
    searchOptions: {
        backgroundColor: "#84b884",
        textDecoration: "none",
        width: '100%',
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
});

export default styles;