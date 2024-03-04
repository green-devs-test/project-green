import { css } from "aphrodite";
import styles from "./styles";
import Form from "../Form";

const Body = () => {
  return (
    <>
      <div className={css(styles.body)}>
        <h1 className={css(styles.h1)}>Project Green</h1>
        <p className={css(styles.mainInstructions)}>
          Seleccione la provincia y la localidad de la zona donde se quiere
          buscar resultados. Recibirás una los puntos de reciclaje mas proximos
          con su ubicacion y el tipo de material que reciben para el reciclaje.
        </p>
        <Form />
      </div>
    </>
  );
};

export default Body;
