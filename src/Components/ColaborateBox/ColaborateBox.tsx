import { css } from "aphrodite";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const ColaborateBox = () => {
  return (
    <div className={css(styles.colaborateContainer)}>
      <div className={css(styles.colaborateCard)}>
        <div className={css(styles.colaborateInfo)}>
          <p className={css(styles.colaborateTitle)}>Colabora con nosotros</p>
          <p className={css(styles.colaborateParagraph)}>
            Este es un placeholder hasta que tengamos el texto de la sección
            “Colabora con Nosotros"
          </p>
        </div>
        <div className={css(styles.colaboratePhoto)}>
          <FontAwesomeIcon icon={faCamera} className={css(styles.icon)} />
        </div>
      </div>
        <a className={css(styles.containerBtn)} href="/colaborate">
          <button className={css(styles.btnColaborate)} type="button">
            Conoce más
          </button>
        </a>
    </div>
  );
};

export default ColaborateBox;
