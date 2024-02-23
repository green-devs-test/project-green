import { css } from "aphrodite";
import styles from './styles';

const SelectorProvincia = () => {
    return (
        <>
            <label className={css(styles.label)}>
                Seleccione una Provincia:{" "}
            </label>
            <select className={css(styles.select)}>
                <option className={css(styles.options)} value="Buenos Aires">
                    Buenos Aires
                </option>
                <option className={css(styles.options)} value="Mendoza">
                    Mendoza
                </option>
                <option className={css(styles.options)} value="Tierra del Fuego">
                    Tierra del Fuego
                </option>
            </select>
        </>
    );
};

export default SelectorProvincia;