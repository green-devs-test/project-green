import { css } from "aphrodite";
import { Spot } from "../../Services/GeoLocality.interfaces";
import Card from "../Card";
import styles from "./styles";

interface GridProps {
  spots: Spot[] | null;
}

const Grid = (props: GridProps) => {
  if (!props.spots || !props.spots.length)
    return (
      <div className={css(styles.centerGrid)}>
        <p className={css(styles.bold)}>No se encontraron resultados.</p>
        <p>Probá con otra localidad.</p>
      </div>
    );
  return (
    <>
      {props.spots?.map((spot) => <Card spot={spot} key={`spot-${spot.id}`} />)}
    </>
  );
};

export default Grid;
