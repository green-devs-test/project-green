import { useContext, useState } from "react";
import { Spot } from "../../Services/GeoLocality.interfaces";
import Grid from "../../Components/Grid";
import Search from "../../Components/Search";
import SearchOptions from "../../Components/SearchOptions";
import styles from "./styles";
import { css } from "aphrodite";
import { GeoLocalityContext } from "../../Context/GeoLocality.context";
import { useAppDispatch } from "../../redux/hooks";
import { setLocality, setProvince } from "../../redux/searchFieldsSlice";

const Seeker = () => {
  const dispatch = useAppDispatch()
  const geoLocality = useContext(GeoLocalityContext);
  const [spots, setSpots] = useState<Spot[] | null>(null);

  const seekSpots = (province: string, locality: string) => {
    if (province === "" || locality === "") return;
    try {
      geoLocality
        .getSpots(province, locality)
        .then((response) => {
          setSpots(response);
          dispatch(setProvince(province))
          dispatch(setLocality(locality))
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={css(styles.seekerContainer)}>
      <Search searchSpots={seekSpots} />
      <SearchOptions results={spots?.length || 0} />
      <Grid spots={spots} />
    </div>
  );
};

export default Seeker;
