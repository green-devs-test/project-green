import { css } from "aphrodite";
import styles from "./styles";
import { Locality } from "../../Services/GeoLocality.interfaces";

interface LocalitySelectorProps {
  localitiesNames: Locality[];
  localitySelected?: string;
  selectLocality(locality: string): void;
}
const LocalitySelector = (props: LocalitySelectorProps) => {
  return (
    <>
      <select className={css(styles.newSearchDropdown)} onChange={(e) => props.selectLocality(e.target.value)} 
      {...(props.localitySelected && { value: props.localitySelected })}
      >
        {props.localitiesNames.map((locality, index) => (
          <option key={index} className={css(styles.options)} value={locality.name}>
            {" "}
            {locality.name}{" "}
          </option>
        ))}
        ;
      </select>
    </>
  );
};

export default LocalitySelector;
