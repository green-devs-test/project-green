import { css } from "aphrodite";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Spot } from "../../Data/interfaces";

interface CardProps {
  spot: Spot;
}

const Card = (props: CardProps) => {
  return (
    <>
      <div className={css(styles.containerCards)}>
        <div className={css(styles.card)}>
          <div className={css(styles.cardContent)}>
            <h3 className={css(styles.spotName)}>{props.spot.name}</h3>
            <div className={css(styles.cardAdress)}>
              <p className={css(styles.cardAdressContent)}>{props.spot.address}</p>
            </div>
            <div className={css(styles.CardMaterialsContainer)}>
                {props.spot.materials.map((material) => (
                  <p
                    className={css(styles.CardMaterials)}
                    key={props.spot.id + material}
                  >
                    {material}
                  </p>
                ))}
              </div>
              <div className={css(styles.buttonsContainer)}>
                <button className={css(styles.cardButton)} type="button">
                  Telefono{" "}
                  <FontAwesomeIcon
                    icon={faPhone}
                    className={css(styles.icon)}
                  />
                </button>
                {props.spot.link && (
                  <a
                    href={props.spot.link}
                    className={css(styles.cardButton)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className={css(styles.cardButton)} type="button">
                      Ver Ubicación{" "}
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className={css(styles.icon)}
                      />
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Card;
