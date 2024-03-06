import { css } from "aphrodite";
import styles from "./styles";

const BtnSearch = () => {
  return (
    <>
      <button className={css(styles.btnSearch)}>Buscar</button>
    </>
  );
};

export default BtnSearch;
