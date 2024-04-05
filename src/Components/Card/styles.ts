import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  containerCards: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    position: "relative",
    width: "100%",
    minWidth: "150px",
    margin: "5px",
    borderTop: "1px solid black",
    overflow: "hidden",
    cursor: "default",
    padding: "3px",
    textAlign: "left",
  },
  cardContent: {
    color: "back",
  },
  spotName: {
    padding: "10px",
    marginTop: "3px",
    textAlign: "left",
  },
  CardMaterials: {
    justifyContent: "flex-start",
    textAlign: "center",
    display: "inline-block",
    padding: "5px",
    borderRadius: "13px",
    border: "1px solid black",
    boxShadow: "2px 2px black",
    margin: "10px 5px 10px 5px",
  },
  cardAdress: {
    verticalAlign: "text-bottom",
  },
  CardMaterialsContainer: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "flex-start",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  cardButton: {
    backgroundColor: "#84b884",
    textDecoration: "none",
    padding: "10px 10px",
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
    fontSize: 19,
  },
});

export default styles;
