import { css } from "aphrodite";
import styles from "./styles";
import { useState } from "react";
import { Province } from "../../Services/interfaces";

interface ProvinceSelectorProps {
  provinceNames: Province[];

  selectProvince(province: string): void;
}
const ProvinceSelector = (props: ProvinceSelectorProps) => {
  const [value, setValue] = useState();

  return (
    <>
      <label className={css(styles.label)}>Seleccione una Provincia: </label>
      <select
        className={css(styles.select)}
        onChange={(e) => props.selectProvince(e.target.value)}
      >
        {props.provinceNames.map((province, index) => (
          <option
            key={index}
            className={css(styles.options)}
            value={province.name}
          >
            {province.name}
          </option>
        ))}
        ;
      </select>
    </>
  );
};

export default ProvinceSelector;
