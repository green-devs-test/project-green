import Grid from "../Grid";
import NewSearch from "../NewSearch";
import SearchOptions from "../SearchOptions";
import styles from "./styles";
import { css } from "aphrodite";

const Results = () => {
  return (
    <div className={css(styles.estilo)}>
        <NewSearch />
        <SearchOptions />
        <Grid />
    </div>
  );
};

export default Results;