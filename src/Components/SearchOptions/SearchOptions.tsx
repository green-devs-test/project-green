import styles from "./styles";
import { css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import SpotBreadcrumb from "../SpotBreadcrumb";

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
        <SpotBreadcrumb />
      </div>
    </>
  );
};

export default SearchOptions;
