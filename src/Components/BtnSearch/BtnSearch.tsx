import { css } from "aphrodite";
import styles from './styles';

const BtnSearch = () => {
    return (
        <>
            <button className={css(styles.btn_search)}>Buscar</button>
        </>
    );
};

export default BtnSearch;