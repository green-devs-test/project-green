import { css } from "aphrodite";
import styles from "./styles";
import Form from "../Form";

const Card = () => {
    return (
        <>
            <div className={css(styles.containerCards)}>
                <div className={css(styles.card)}>
                    <div className={css(styles.card__contenido)}>
                        <h3 className={css(styles.nombre)}>[NOMRE DEL PUNTO DE RECICLAJE]</h3>
                        <p>Direccion: Callefalsa 123 y Esquina Aveces Llueve </p>
                        <div className={css(styles.detalles)}>
                            <p className={css(styles.flex__etiquetas)}>#Papel</p>
                            <p className={css(styles.flex__etiquetas)}>#Plastico</p>
                            <p className={css(styles.flex__etiquetas)}>#Vidrio</p>
                            <p className={css(styles.flex__etiquetas)}>#Carton</p>
                            <p className={css(styles.flex__etiquetas)}>#Metal</p>
                        <hr/>
                            <button className={css(styles.btnLocation)}>Ver Ubicación</button>
                        </div>
                    </div>                                              
                </div>
            </div>
        </>
    );
};

export default Card;