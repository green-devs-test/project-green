import { css } from "aphrodite";
import styles from "./styles";
import ProvinceSelector from "../ProvinceSelector";
import LocalitySelector from "../LocalitySelector";
import BtnSearch from "../BtnSearch";
import Grid from "../Grid";
import { useEffect, useState } from "react";
import geoLocationService from "../../Services/GeoLocation.service";
import { Province } from "../../Services/interfaces";

const Form = () => {
  const service = geoLocationService();
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
        const response = await service.getProvinces();
        setProvinces(response);
      } catch (error) {
        console.error("Ocurrio un error");
        setProvinceError(true);
      }
    };
    getProvinces();
  }, []);

  const cities = ["capital", "mendoza", "paraná"];

  return (
    <article>
      <div>
        <div>
          <form className={css(styles.formContainer)}>
            {provinceError ? ( <p>Ocurrio un error</p> ) : ( <ProvinceSelector provinceNames={provinces} selectProvince={SelectProvince} /> )}
            <LocalitySelector citiesNames={cities} selectCity={SelectCity} />
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
