import { Spots } from "../../Services/interfaces";
import Card from "../Card";

interface GridProps {
  spots: Spots[];
}

const Grid = (props: GridProps) => {
  return (
    <>
      {props.spots.map((spot)  => (
        <Card spot={spot} key={`spot-${spot.id}`}/>
      ))}
    </>
  );
};

export default Grid;
