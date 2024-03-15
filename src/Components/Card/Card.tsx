import { css } from "aphrodite";
import styles from "./styles";

const Card = () => {
  return (
    <>
      <div className={css(styles.containerCards)}>
        <div className={css(styles.card)}>
          <div className={css(styles.cardContent)}>
            <h3 className={css(styles.spotName)}>
              [NOMRE DEL PUNTO DE RECICLAJE]
            </h3>
            <p><b>Direccion:</b> Callefalsa 123 y Esquina Aveces Llueve </p>
            <p><b>Barrio:</b> Bonita Vecindad </p>
            <div className={css(styles.cardAdress)}>
              <div className={css(styles.CardMaterialsContainer)}>
              <p className={css(styles.CardMaterials)}>#Papel</p>
              <p className={css(styles.CardMaterials)}>#Plastico</p>
              <p className={css(styles.CardMaterials)}>#Vidrio</p>
              <p className={css(styles.CardMaterials)}>#Carton</p>
              <p className={css(styles.CardMaterials)}>#Metal</p>
              </div>
              <div className={css(styles.buttonsContainer)}>
              <button className={css(styles.cardButton)}>
                Telefono 📞
              </button>
              <button className={css(styles.cardButton)}>
                Ver Ubicación 📍
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
