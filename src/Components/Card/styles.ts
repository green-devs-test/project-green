import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  containerCards: {
    width: "93%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: '16px auto',
  },
  
  card: {
    borderRadius: '8px',
    backgroundColor: '#F6F6F6',
    position: "relative",
    width: "98%",
    minWidth: "150px",
    margin: "auto",
    overflow: "hidden",
    cursor: "default",
    padding: "3px",
    textAlign: "left",
  },
  cardContent: {
    color: "back",
  },
  spotName: {
    fontWeight: 600,
    lineHeight: '18px',
    padding: "5px 10px",
    marginTop: "3px",
    marginBottom: '3px',
    textAlign: "left",
  },
  CardMaterials: {
    width: '72px',
    height: '72px',
    backgroundColor: '#D9D9D980',
    justifyContent: "center",
    textAlign: "center",
    padding: "5px",
    borderRadius: "4px",
    margin: "5px",
  },
  cardAdress: {
    verticalAlign: "text-bottom",
  },
  cardAdressContent: {
    fontWeight: 400,
    lineHeight: '18px',
    padding: '5px 10px',
    textAlign: "left",
    margin: '0 0',
  },
  CardMaterialsContainer: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "center",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  cardButton: {
    flex: '1 1',
    backgroundColor: "#84b884",
    textDecoration: "none",
    padding: "5px",
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
