import { useContext, useEffect } from "react";
import { Spot } from "../../Services/GeoLocality.interfaces";
import Grid from "../Grid";
import NewSearch from "../NewSearch";
import SearchOptions from "../SearchOptions";
import styles from "./styles";
import { css } from "aphrodite";
import { SessionStorageContext } from "../../Context/SessionStorage.context";

const Results = () => {

  const sessionStorage = useContext(SessionStorageContext);

  useEffect(()=>{
    console.log(sessionStorage.get());
  },[]);
  const spotsDataTest: Spot[]  = [{
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
      <NewSearch />
      <SearchOptions />
      <Grid spots={spotsDataTest}/>
    </div>
  );
};

export default Results;
