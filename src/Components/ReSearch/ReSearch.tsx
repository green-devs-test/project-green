import { css } from "aphrodite";
import styles from "./styles";

const ReSearch = () => {
    return (
        <>
            <input type="text" placeholder="Provincia"/>
            <input type="text" placeholder="Localidad"/>
            <button>Buscar</button>
        </>
    );
};

export default ReSearch;