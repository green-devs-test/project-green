import { css } from "aphrodite";
import styles from "./styles";
import ProvinceSelector from "../ProvinceSelector";
import LocalitySelector from "../LocalitySelector";
import { useContext, useEffect, useState } from "react";
import { Province } from "../../Services/interfaces";
import { GeoLocationContext } from "../../Context/GeoLocation.context";

const NewSearch = () => {
  const geoLocation = useContext(GeoLocationContext);

  const [provinces, setProvinces] = useState<Province[]>([]);
  const [provinceError, setProvinceError] = useState(false);

  const SelectProvince = (province: string) => {
    console.log(province);
  };
  const SelectCity = (city: string) => {
    console.log(city);
  };

  useEffect(() => {
    const getProvinces = async () => {
      try {
        const response = await geoLocation.getProvinces();
        setProvinces(response);
      } catch (error) {
        console.error("Ocurrió un error");
        setProvinceError(true);
      }
    };
    getProvinces();
  }, [geoLocation]);

  const cities = ["capital", "mendoza", "paraná"];

  return (
    <>
      <form className={css(styles.newSearchContainer)}>
        {provinceError ? (
          <p className={css(styles.newSearchDropdown)}> Ocurrio un error</p>
        ) : (
          <ProvinceSelector
            provinceNames={provinces}
            selectProvince={SelectProvince}
          />
        )}
        <LocalitySelector
          localitiesNames={cities}
          selectLocality={SelectCity}
        />
        <button className={css(styles.newSearchButton)}>🔎</button>
      </form>
    </>
  );
};

export default NewSearch;
