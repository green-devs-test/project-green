import { css } from "aphrodite";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className={css(styles.aboutContainer)} >
        <h2 className={css(styles.titlePage)}>Colabora con nosotros</h2>
        
        <div className={css(styles.colaborateCards)}>
          <div className={css(styles.colaborateFoto)}>
            <FontAwesomeIcon icon={faCamera} className={css(styles.icon)} />
          </div>
          <div className={css(styles.colaborateCardText)}>
            <p className={css(styles.cardHead)}>Ayudanos agregando más puntos.</p>
            <p className={css(styles.cardPharagraph)}>Este es un texto placeholder de bajada.</p>
          </div>
        </div>

        <div className={css(styles.colaborateCards)}>
          <div className={css(styles.colaborateFoto)}>
            <FontAwesomeIcon icon={faCamera} className={css(styles.icon)} />
          </div>
          <div className={css(styles.colaborateCardText)}>
            <p className={css(styles.cardHead)}>Ayudanos donando al proyecto.</p>
            <p className={css(styles.cardPharagraph)}>Este es un texto placeholder de bajada.</p>
          </div>
        </div>

        <div className={css(styles.colaborateCards)}>
          <div className={css(styles.colaborateFoto)}>
            <FontAwesomeIcon icon={faCamera} className={css(styles.icon)} />
          </div>
          <div className={css(styles.colaborateCardText)}>
            <p className={css(styles.cardHead)}>Ayudanos dando tu feedback.</p>
            <p className={css(styles.cardPharagraph)}>Este es un texto placeholder de bajada.</p>
          </div>
        </div>
        <div className={css(styles.WriteUsMsj)}>
          <p className={css(styles.cardPharagraph)}>¿Se te ocurre otra forma de ayudarnos?</p>
          <a className={css(styles.link)} href="/about">Escribinos</a>
        </div>
    
    </div>
  );
};

export default About;
