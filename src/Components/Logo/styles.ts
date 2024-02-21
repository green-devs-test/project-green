import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  logo: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: 40, //Cambiar y hacer dos bloques en el sidebar

    "@media (max-width: 1024px)": {
      fontSize: "1.1rem",
    },
  },
});

export default styles;
