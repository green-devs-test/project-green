import { css } from "aphrodite";
import styles from "./styles";
import ProvinceSelector from "../ProvinceSelector";
import LocalitySelector from "../LocalitySelector";
import { useContext, useEffect, useState } from "react";
import { Locality, Province } from "../../Services/GeoLocality.interfaces";
import { GeoLocalityContext } from "../../Context/GeoLocality.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SessionStorageContext } from "../../Context/SessionStorage.context";

interface SearchProps {
  searchSpots(province: string, locality: string): void;
}

const Search = (props: SearchProps) => {
  const geoLocality = useContext(GeoLocalityContext);
  const sessionStorage = useContext(SessionStorageContext);

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

  const search = () => {
    props.searchSpots(provinceSelected, localitySelected);
  };

  useEffect(() => {
    const getProvinces = async () => {
      try {
        const storageObject = sessionStorage.get();
        const response = await geoLocality.getProvinces();
        setProvinces(response);
        const provinceSelected = response.find(
          (province) => province.name === storageObject.province,
        )?.name;
        setProvinceSelected(
          storageObject.province && provinceSelected
            ? provinceSelected
            : response[0].name,
        );
      } catch (error) {
        console.error("Ocurrio un error");
        setProvinceError(true);
      }
    };
    getProvinces();
  }, [geoLocality, sessionStorage]);

  useEffect(() => {
    const getLocalities = async () => {
      if (!provinceSelected) return;
      try {
        const storageObject = sessionStorage.get();
        const response = await geoLocality.getLocalities(provinceSelected);

        setLocalities(response);
        const localitySelected = response.find(
          (locality) => locality.name === storageObject.locality,
        )?.name;
        setLocalitySelected(
          storageObject.locality && localitySelected
            ? localitySelected
            : response[0].name,
        );
        localitySelected &&
          props.searchSpots(provinceSelected, localitySelected);
      } catch (error) {
        console.error("Ocurrio un error");
        setLocalitiesError(true);
      }
    };
    getLocalities();
  }, [geoLocality, provinceSelected]);

  return (
    <>
      <form className={css(styles.SearchContainer)}>
        {provinceError ? (
          <p>Ocurrio un error</p>
        ) : (
          <ProvinceSelector
            provinceNames={provinces}
            selectProvince={selectProvince}
            provinceSelected={provinceSelected}
          />
        )}
        {localitiesError ? (
          <p>Ocurrio un error</p>
        ) : (
          <LocalitySelector
            localitiesNames={localities}
            selectLocality={selectLocality}
            localitySelected={localitySelected}
          />
        )}
        <button
          className={css(styles.SearchButton)}
          onClick={search}
          type="button"
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={css(styles.icon)}
          />
        </button>
      </form>
    </>
  );
};

export default Search;
