import { css } from "aphrodite";
import styles from "./styles";
import ProvinceSelector from "../ProvinceSelector";
import LocalitySelector from "../LocalitySelector";
import BtnSearch from "../BtnSearch";
import { useContext, useEffect, useState } from "react";
import { Locality, Province } from "../../Services/GeoLocality.interfaces";
import { GeoLocalityContext } from "../../Context/GeoLocality.context";
import { SessionStorageContext } from "../../Context/SessionStorage.context";

const HomeSearchBox = () => {
  const geoLocality = useContext(GeoLocalityContext);
  const sessionStorage = useContext(SessionStorageContext);

  const [provinces, setProvinces] = useState<Province[]>([]);
  const [provinceError, setProvinceError] = useState(false);
  const [provinceSelected, setProvinceSelected] = useState("");

  const [localities, setLocalities] = useState<Locality[]>([]);
  const [localityError, setLocalityError] = useState(false);
  const [localitySelected, setLocalitySelected] = useState("");

  const selectProvince = (province: string) => {
    setProvinceSelected(province)
  };
  const selectLocality = (locality: string) => {
    setLocalitySelected(locality);
  };
  const saveData = () => {
    console.log("Save data", provinceSelected, localitySelected);
    sessionStorage.save(provinceSelected, localitySelected)
  }

  useEffect(() => {
    const getProvinces = async () => {
      try {
        const response = await geoLocality.getProvinces();
        setProvinces(response);
        setProvinceSelected(response[0].name)
      } catch (error) {
        console.error("Ocurrio un error");
        setProvinceError(true);
      }
    };
    getProvinces();
  }, [geoLocality]);

  useEffect( () => {
    const getSpots = async () => {
      if(!provinceSelected) return;
      try {
        const response = await geoLocality.getLocalities(provinceSelected);
        setLocalities(response);
        setLocalitySelected(response[0].name)
      } catch (error) {
        console.error("Ocurrio un error");
        setLocalityError(true);
      }
    };
    getSpots();
  }, [geoLocality, provinceSelected])


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
                selectProvince={selectProvince}
              />
            )}
            {localityError ?
              <p>Ocurrio un error</p>
            : <LocalitySelector
              localitiesNames={localities}
              selectLocality={selectLocality}
            />}
            <div>
              <BtnSearch onSearch={saveData} />
            </div>
          </form>
        </div>
      </div>
    </article>
  );
};

export default HomeSearchBox;
