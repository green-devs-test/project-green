import { css } from "aphrodite";
import styles from "./styles";
import Form from "../Form";

const Body = () => {
  return (
    <>
      <div className={css(styles.body)}>
        <h1 className={css(styles.h1)}>Project Green</h1>

        <p className={css(styles.main_instructions)}>
          Seleccione el tipo de materíal que se desea reciclar. Recibirás una
          lista de los puntos de reciclaje mas proximos que traten el material
          seleccionado.
        </p>
        <Form />
      </div>
    </>
  );
};

export default Body;
