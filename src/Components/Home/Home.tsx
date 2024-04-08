import { css } from "aphrodite";
import styles from "./styles";
import HomeSearchBox from "../HomeSearchBox";
import Colaborate from "../Colaborate";

const Body = () => {
  return (
    <>
      <div className={css(styles.bodyContainer)}>
        <h2 className={css(styles.h1)}>
          Encuentra los puntos de ciclaje más cercanos
        </h2>
        <p className={css(styles.mainInstructions)}>
          Seleccione la provincia y la localidad de la zona donde se quiere
          buscar resultados. Recibirás los puntos de reciclaje mas proximos con
          su ubicacion y el tipo de material que reciben para el reciclaje.
        </p>
        <HomeSearchBox />
        <Colaborate />
      </div>
    </>
  );
};

export default Body;
