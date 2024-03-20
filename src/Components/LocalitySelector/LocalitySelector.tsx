import { css } from "aphrodite";
import styles from "./styles";

interface LocalitySelectorProps {
  localitiesNames: string[];
  selectLocality(locality: string): void;
}
const LocalitySelector = (props: LocalitySelectorProps) => {
  return (
    <>
      <label className={css(styles.label)}></label>
      <select className={css(styles.newSearchDropdown)}>
        {props.localitiesNames.map((locality, index) => (
          <option key={index} className={css(styles.options)} value={locality}>
            {" "}
            {locality}{" "}
          </option>
        ))}
        ;
      </select>
    </>
  );
};

export default LocalitySelector;
