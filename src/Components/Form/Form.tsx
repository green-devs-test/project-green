import { css } from "aphrodite";
import styles from "./styles";
import ProvinceSelector from "../ProvinceSelector";
import LocalitySelector from "../LocalitySelector";
import BtnSearch from "../BtnSearch";
import { useContext, useEffect, useState } from "react";
import { Province } from "../../Services/interfaces";
import { GeoLocationContext } from "../../Context/GeoLocation.context";

const Form = () => {
  const geoLocation = useContext(GeoLocationContext);

  const [provinces, setProvinces] = useState<Province[]>([]);
  const [provinceError, setProvinceError] = useState(false);

  const SelectProvince = (province: string) => {
    console.log(province);
  };
  const SelectLocality = (city: string) => {
    console.log(city);
  };

  useEffect(() => {
    const getProvinces = async () => {
      try {
        const response = await geoLocation.getProvinces();
        setProvinces(response);
      } catch (error) {
        console.error("Ocurrio un error");
        setProvinceError(true);
      }
    };
    getProvinces();
  }, [geoLocation]);

  const localities = ["capital", "mendoza", "paraná"];

  return (
    <article>
      <div>
        <div>
          <form className={css(styles.formContainer)}>
            {provinceError ? (
              <p>Ocurrio un error</p>
            ) : (
              <ProvinceSelector
                provinceNames={provinces}
                selectProvince={SelectProvince}
              />
            )}
            <LocalitySelector
              localitiesNames={localities}
              selectLocality={SelectLocality}
            />
            <div>
              <BtnSearch />
            </div>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Form;
