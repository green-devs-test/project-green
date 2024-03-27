import styles from "./styles";
import { css } from "aphrodite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

const SearchOptions = () => {
  return (
    <>
      <div className={css(styles.optionsContainer)}>
        <p className={css(styles.numbersOfResults)}>
          <b>33</b> Resultados
        </p>
        <button className={css(styles.searchOptions)}>Filtros <FontAwesomeIcon icon={faSliders} className={css(styles.icon)}/></button>
      </div>
    </>
  );
};

export default SearchOptions;
