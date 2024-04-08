import { css } from "aphrodite";
import styles from "./styles";
import { Province } from "../../Services/GeoLocality.interfaces";

interface ProvinceSelectorProps {
  provinceNames: Province[];
  provinceSelected?: string;
  selectProvince(province: string): void;
}
const ProvinceSelector = (props: ProvinceSelectorProps) => {
  return (
    <>
      <select
        className={css(styles.newSearchDropdown)}
        onChange={(e) => props.selectProvince(e.target.value)}
        {...(props.provinceSelected && { value: props.provinceSelected })}
      >
        {props.provinceNames.map((province, index) => (
          <option
            key={index}
            className={css(styles.options)}
            value={province.name}
          >
            {" "}
            {province.name}{" "}
          </option>
        ))}
        ;
      </select>
    </>
  );
};

export default ProvinceSelector;
