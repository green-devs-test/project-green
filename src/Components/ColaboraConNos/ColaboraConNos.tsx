import { css } from "aphrodite";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ColaboraConNos = () => {
  return (
   <div className={css(styles.colaboraCard)}>
    <div className={css(styles.colaboraContainer)}> 
        <div className={css(styles.colaboraInfo)}>
            <h2 className={css(styles.h2)}>Colabora con nosotros</h2>
            <p className={css(styles.p)}>Este es un placeholder hasta que tengamos el texto de la sección “Colabora con Nosotros"</p>
        </div>
        <div className={css(styles.colaboraPhoto)}>
            <FontAwesomeIcon
                icon={faCamera}
                className={css(styles.icon)}
            />
        </div>
    </div>
        <div className={css(styles.containerBtn)}>
            <button className={css(styles.btnColaboraConNos)} type="button">Conoce más</button>
        </div>
    </div>
  );

  };

export default ColaboraConNos;