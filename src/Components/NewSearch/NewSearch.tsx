import { css } from "aphrodite";
import styles from "./styles";

const ReSearch = () => {
    return (
        <>
        <div className={css(styles.newSearchContainer)}>
            <input className={css(styles.newSearchDropdown)} type="text" placeholder="Provincia"/>
            <input className={css(styles.newSearchDropdown)} type="text" placeholder="Localidad"/>
            <button className={css(styles.newSearchButton)}>🔎</button>
        </div>
        </>
    );
};

export default ReSearch;