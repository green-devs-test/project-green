import { css } from "aphrodite";
import styles from "./styles";
import LocalitySelector from "../LocalitySelector";
import { useContext, useEffect, useState } from "react";
import { GeoLocalityContext } from "../../Context/GeoLocality.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../redux/hooks";
import { Locality } from "../../Data/interfaces";

interface SearchProps {
  searchSpots(locality: string): void;
}

const Search = (props: SearchProps) => {
  const geoLocality = useContext(GeoLocalityContext);
  const fields = useAppSelector((state) => state.fields);

  const [localities, setLocalities] = useState<Locality[]>([]);
  const [localitiesError, setLocalitiesError] = useState(false);
  const [localitySelected, setLocalitySelected] = useState("");

  const selectLocality = (locality: string) => {
    setLocalitySelected(locality);
  };

  const search = () => {
    props.searchSpots(localitySelected);
  };

  useEffect(() => {
    const getLocalities = () => {
      try {
        const response = geoLocality.getLocalities();

        setLocalities(response);
        const localitySelected = response.find(
          (locality) => locality.name === fields.locality,
        )?.name;
        setLocalitySelected(
          fields.locality && localitySelected
            ? localitySelected
            : response[0].name,
        );
        localitySelected &&
          props.searchSpots(localitySelected);
      } catch (error) {
        console.error("Ocurrio un error");
        setLocalitiesError(true);
      }
    };
    getLocalities();
  }, [geoLocality, fields.locality, props]);

  return (
    <>
      <form className={css(styles.SearchContainer)}>
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
