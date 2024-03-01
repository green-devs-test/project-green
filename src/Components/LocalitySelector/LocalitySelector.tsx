import { css } from "aphrodite";
import styles from './styles';
import { useState } from "react";

interface LocalitySelectorProps {
    citiesNames: string[];

    selectCity(city: string) : void;
  }
const LocalitySelector = (props: LocalitySelectorProps ) => {
    const [value, setValue] = useState();

    return (
        <>
            <label className={css(styles.label)}>
                Seleccione una Localidad:{" "}
            </label>
            <select className={css(styles.select)} onChange={(e) => props.selectCity(e.target.value)}>
                {props.citiesNames.map((city, index) => <option key={index} className={css(styles.options)} value={city}>{city}</option>)};
            </select>
        </>
    );
};

export default LocalitySelector;