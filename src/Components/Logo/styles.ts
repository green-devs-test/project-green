import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  logo: {
    paddingTop: 30,
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: 20, //Cambiar y hacer dos bloques en el sidebar

    "@media (max-width: 1024px)": {
      fontSize: "1.1rem",
    },
  },
});

export default styles;
