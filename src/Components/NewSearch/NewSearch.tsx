import { css } from "aphrodite";
import styles from "./styles";
import ProvinceSelector from "../ProvinceSelector";
import LocalitySelector from "../LocalitySelector";
import { useContext, useEffect, useState } from "react";
import { Locality, Province } from "../../Services/GeoLocality.interfaces";
import { GeoLocalityContext } from "../../Context/GeoLocality.context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NewSearch = () => {
  const geoLocality = useContext(GeoLocalityContext);

  const [provinces, setProvinces] = useState<Province[]>([]);
  const [provinceError, setProvinceError] = useState(false);
  // refactor here to add data flow

  const SelectProvince = (province: string) => {
    console.log(province);
  };
  const SelectCity = (city: string) => {
    console.log(city);
  };

  useEffect(() => {
    const getProvinces = async () => {
      try {
        const response = await geoLocality.getProvinces();
        setProvinces(response);
      } catch (error) {
        console.error("Ocurrió un error");
        setProvinceError(true);
      }
    };
    getProvinces();
  }, [geoLocality]);

  const localities: Locality[] = [{
    id: 1,
    name: "placeholder",
    spots: []
  }];

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
          localitiesNames={localities}
          selectLocality={SelectCity}
        />
        <button className={css(styles.newSearchButton)}><FontAwesomeIcon icon={faMagnifyingGlass} className={css(styles.icon)}/></button>
      </form>
    </>
  );
};

export default NewSearch;
