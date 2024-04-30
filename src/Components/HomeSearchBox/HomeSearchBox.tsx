import { css } from "aphrodite";
import styles from "./styles";
import ProvinceSelector from "../ProvinceSelector";
import LocalitySelector from "../LocalitySelector";
import BtnSearch from "../BtnSearch";
import { useContext, useEffect, useState } from "react";
import { Locality, Province } from "../../Services/GeoLocality.interfaces";
import { GeoLocalityContext } from "../../Context/GeoLocality.context";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setLocality, setProvince } from "../../redux/searchFieldsSlice";

const HomeSearchBox = () => {
  const geoLocality = useContext(GeoLocalityContext);
  const dispatch = useAppDispatch()

  const navigate = useNavigate();

  const [provinces, setProvinces] = useState<Province[]>([]);
  const [provinceError, setProvinceError] = useState(false);
  const [provinceSelected, setProvinceSelected] = useState("");

  const [localities, setLocalities] = useState<Locality[]>([]);
  const [localitiesError, setLocalitiesError] = useState(false);
  const [localitySelected, setLocalitySelected] = useState("");

  const selectProvince = (province: string) => {
    setProvinceSelected(province);
  };
  const selectLocality = (locality: string) => {
    setLocalitySelected(locality);
  };
  const saveData = () => {
    dispatch(setProvince(provinceSelected))
    dispatch(setLocality(localitySelected))
    navigate("/buscador");
  };
  useEffect(() => {
    const getProvinces = async () => {
      try {
        const response = await geoLocality.getProvinces();
        setProvinces(response);
        setProvinceSelected(response[0].name);
      } catch (error) {
        console.error("Ocurrio un error");
        setProvinceError(true);
      }
    };
    getProvinces();
  }, [geoLocality]);

  useEffect(() => {
    const getLocalities = async () => {
      if (!provinceSelected) return;
      try {
        const response = await geoLocality.getLocalities(provinceSelected);
        setLocalities(response);
        setLocalitySelected(response[0].name);
      } catch (error) {
        console.error("Ocurrio un error");
        setLocalitiesError(true);
      }
    };
    getLocalities();
  }, [geoLocality, provinceSelected]);

  return (
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
          {localitiesError ? (
            <p>Ocurrio un error</p>
          ) : (
            <LocalitySelector
              localitiesNames={localities}
              selectLocality={selectLocality}
            />
          )}
            <BtnSearch onSearch={saveData} />
        </form>
      </div>
    </div>
  );
};

export default HomeSearchBox;
