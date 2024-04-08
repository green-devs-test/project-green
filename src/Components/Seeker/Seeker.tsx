import { useContext, useState } from "react";
import { Spot } from "../../Services/GeoLocality.interfaces";
import Grid from "../Grid";
import Search from "../Search";
import SearchOptions from "../SearchOptions";
import styles from "./styles";
import { css } from "aphrodite";
import { GeoLocalityContext } from "../../Context/GeoLocality.context";

const Seeker = () => {
  const geoLocality = useContext(GeoLocalityContext);
  const [spots, setSpots] = useState<Spot[] | null>(null);

  const seekSpots = (province: string, locality: string) => {
    if (province === "" || locality === "") return;
    try {
      geoLocality
        .getSpots(province, locality)
        .then((response) => setSpots(response));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={css(styles.resultsContainer)}>
      <Search searchSpots={seekSpots} />
      <SearchOptions results={spots?.length || 0} />
      <Grid spots={spots} />
    </div>
  );
};

export default Seeker;
