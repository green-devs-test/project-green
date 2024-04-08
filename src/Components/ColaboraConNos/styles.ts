import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  colaboraCard: {
    backgroundColor: '#DDF5DB',
    borderRadius: '10px',
    margin: '15px',
  },
  colaboraContainer: {
    backgroundColor: '#DDF5DB',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '18px',
    padding: '20px',
    marginBottom: '0px',
    
  },
  colaboraInfo: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
  },
  h2: {
    color: '#000000',
    fontSize: '1.5rem',
  },
  p: {
    color: '#000000',
    fontSize: '1rem',
    fontWeight: 400,
    textAlign: 'left',
  },
  colaboraPhoto: {
    display: "flex",
    justifyContent: 'center',
    alignContent: 'center',
    margin: 'auto',
    padding: '5px',
  },
  icon: {
    fontSize: '3rem',
    color: '#404040',
    padding: '0px 30px',
    },
  containerBtn: {
    display: 'flex',
    justifyContent: 'center',
  },
  btnColaboraConNos: {
    backgroundColor: "#fff",
    color: "#398532",
    width: '90%',
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