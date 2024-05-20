import { css } from "aphrodite";
import styles from "./styles";
import LocalitySelector from "../LocalitySelector";
import BtnSearch from "../BtnSearch";
import { useContext, useEffect, useState } from "react";
import { GeoLocalityContext } from "../../Context/GeoLocality.context";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setLocality } from "../../redux/searchFieldsSlice";
import { Locality } from "../../Data/interfaces";

const HomeSearchBox = () => {
  const geoLocality = useContext(GeoLocalityContext);
  const dispatch = useAppDispatch()

  const navigate = useNavigate();

  const [localities, setLocalities] = useState<Locality[]>([]);
  const [localitiesError, setLocalitiesError] = useState(false);
  const [localitySelected, setLocalitySelected] = useState("");

  const selectLocality = (locality: string) => {
    setLocalitySelected(locality);
  };
  const saveData = () => {
    dispatch(setLocality(localitySelected))
    navigate("/buscador");
  };

  useEffect(() => {
    const getLocalities = () => {
      try {
        const response = geoLocality.getLocalities();
        setLocalities(response);
        setLocalitySelected(response[0].name);
      } catch (error) {
        console.error("Ocurrio un error");
        setLocalitiesError(true);
      }
    };
    getLocalities();
  }, [geoLocality]);

  return (
    <div>
      <div>
        <form className={css(styles.formContainer)}>
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
