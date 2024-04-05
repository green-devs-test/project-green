import { Spots } from "../../Services/interfaces";
import Grid from "../Grid";
import Search from "../Search";
import SearchOptions from "../SearchOptions";
import styles from "./styles";
import { css } from "aphrodite";

const Seeker = () => {

  const spotsDataTest: Spots[]  = [{
    id: 1,
    name: "Punto Verde Plaza Rosario Vera Peñaloza",
    address: "Av. San Juan y Chacabuco",
    link: "https://maps.app.goo.gl/Tffg5QyDLWhpYwT19",
    telephone: null,
    materials: ["Papeles",
    "Cartones",
    "Plásticos",
    "Latas",
    "Aceite Usado",
    "Cápsulas de Cafe",
    "Pilas",
    "Organicos"]
  },
  {
    id: 2,
    name: "Punto Verde Plaza San Martin",
    address: "Av. Libertador y Maipu",
    link: "https://maps.app.goo.gl/AbCdEfGhIjKlMnOp2",
    telephone: null,
    materials: ["Vidrios",
    "Metales",
    "Electrónicos",
    "Baterías",
    "Neumáticos",
    "Textiles",
    "Maderas",
    "Inorgánicos"]
}];

  return (
    <div className={css(styles.resultsContainer)}>
      <Search />
      <SearchOptions />
      <Grid spots={spotsDataTest}/>
    </div>
  );
};

export default Seeker;
