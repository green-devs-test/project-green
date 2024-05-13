import { useContext, useState } from "react";
import Grid from "../../Components/Grid";
import Search from "../../Components/Search";
import SearchOptions from "../../Components/SearchOptions";
import styles from "./styles";
import { css } from "aphrodite";
import { GeoLocalityContext } from "../../Context/GeoLocality.context";
import { useAppDispatch } from "../../redux/hooks";
import { setLocality } from "../../redux/searchFieldsSlice";
import { Spot } from "../../Data/interfaces";

const Seeker = () => {
  const dispatch = useAppDispatch()
  const geoLocality = useContext(GeoLocalityContext);
  const [spots, setSpots] = useState<Spot[] | null>(null);

  const seekSpots = (locality: string) => {
    if (locality === "") return;
      const response = geoLocality.getSpots(locality);
      setSpots(response);
      dispatch(setLocality(locality));
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
