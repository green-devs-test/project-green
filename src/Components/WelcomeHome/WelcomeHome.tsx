import styles from "./styles";
import { css } from "aphrodite";
import HomeSearchBox from "../HomeSearchBox";

const WelcomeHome = () => {
  return (
    <>
    <div className={css(styles.test)}>
      <h2 className={css(styles.test)}>
        Encuentra los puntos de ciclaje más cercanos
      </h2>
      <p className={css(styles.test)}>
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
