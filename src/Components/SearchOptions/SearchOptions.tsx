import styles from "./styles";
import { css } from "aphrodite";


const SearchOptions = () => {
  return (
    <>
    <div className={css(styles.optionsContainer)}>
      <p className={css(styles.numbersOfResults)}><b>33</b> Resultados</p>
      <button className={css(styles.searchOptions)}>Filtros 🛠️</button>
    </div>
    </>
  );
};

export default SearchOptions;