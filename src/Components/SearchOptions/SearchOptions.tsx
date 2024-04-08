import styles from "./styles";
import { css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

interface SearchOptionsProps {
  results: number;
}

const SearchOptions = (props: SearchOptionsProps) => {
  return (
    <>
      <div className={css(styles.optionsContainer)}>
        <p className={css(styles.numbersOfResults)}>
          <b>{props.results}</b> Resultado{props.results > 1 ? "s" : ""}
        </p>
        <button className={css(styles.searchOptions)} type="button">
          Filtros{" "}
          <FontAwesomeIcon icon={faSliders} className={css(styles.icon)} />
        </button>
      </div>
    </>
  );
};

export default SearchOptions;
