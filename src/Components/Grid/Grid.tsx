import { Spot } from "../../Services/GeoLocality.interfaces";
import Card from "../Card";

interface GridProps {
  spots: Spot[]|null;
}

const Grid = (props: GridProps) => {
  return (
    <>
      {props.spots?.map((spot)  => (
        <Card spot={spot} key={`spot-${spot.id}`}/>
      ))}
    </>
  );
};

export default Grid;
