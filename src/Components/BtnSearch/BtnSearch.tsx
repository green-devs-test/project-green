import { css } from "aphrodite";
import styles from "./styles";

interface BtnSearchProps {
  onSearch(): void;
}

const BtnSearch = (props: BtnSearchProps) => {
  return (
    <>
      <button
        className={css(styles.btnSearch)}
        onClick={props.onSearch}
        type="button"
      >
        Buscar
      </button>
    </>
  );
};

export default BtnSearch;
