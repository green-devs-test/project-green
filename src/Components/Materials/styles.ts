import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  materialsContainer: {
    width: '72px',
    height: '72px',
    backgroundColor: '#D9D9D980',
    textAlign: "center",
    padding: "5px",
    borderRadius: "4px",
    margin: "5px",
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  materialsItems: {
    display: 'flex',
    flexDirection: 'column',
  },
  materialsParagraph: {
    fontSize: '1rem',
    margin: '5px',
  },
  icon: {
    fontSize: 30,
  },
});

export default styles;
