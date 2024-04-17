import styles from "./styles";
import { css } from "aphrodite";
import HomeSearchBox from "../HomeSearchBox";

const WelcomeHome = () => {
  return (
    <>
    <div className={css(styles.welcomeContainer)}>
      <p className={css(styles.welcomeTitle)}>
        Encuentra los puntos de ciclaje más cercanos
      </p>
      <p className={css(styles.welcomeParagraph)}>
        Seleccione la provincia y la localidad de la zona donde se quiere
        buscar resultados. Recibirás los puntos de reciclaje mas proximos con
        su ubicacion y el tipo de material que reciben para el reciclaje.
      </p>
      <HomeSearchBox />
    </div>
  </>
  );
};

export default WelcomeHome;
