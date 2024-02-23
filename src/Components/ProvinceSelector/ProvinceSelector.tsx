import { css } from "aphrodite";
import styles from './styles';

interface ProvinceSelectorProps {
    provinceNames: string[];

    selectProvince(province: string) : void;
  }
const ProvinceSelector = (props: ProvinceSelectorProps ) => {
    return (
        <>
            <label className={css(styles.label)}>
                Seleccione una Provincia:{" "}
            </label>
            <select className={css(styles.select)}>
                {props.provinceNames.map((province, index) => <option onClick={() => props.selectProvince(province)} key={index} className={css(styles.options)} value={province}>{province}</option>)};
            </select>
        </>
    );
};

export default ProvinceSelector;