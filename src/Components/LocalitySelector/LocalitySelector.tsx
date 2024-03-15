import { css } from "aphrodite";
import styles from "./styles";

interface LocalitySelectorProps {
  citiesNames: string[];
  selectCity(city: string): void;
}
const LocalitySelector = (props: LocalitySelectorProps) => {
  return (
    <>
      <label className={css(styles.label)}></label>
      <select className={css(styles.newSearchDropdown)}>
        {props.citiesNames.map((city, index) => ( <option key={index} className={css(styles.options)} value={city}> {city} </option>))};
      </select>
    </>
  );
};

export default LocalitySelector;
