import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    optionsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: '0px 15px'
      },
    numbersOfResults: {
        
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
});

export default styles;