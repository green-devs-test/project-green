import TopBar from "../TopBar/TopBar";
import SearchOptions from "../SearchOptions";
import NewSearch from "../NewSearch";
import Footer from "../Footer/Footer";
import { css } from "aphrodite";
import styles from "./styles";
import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Card from "../Card";
import { GeoLocationContext } from "../../Context/GeoLocation.context";

const App = () => {
  const geoLocation = useContext(GeoLocationContext);
  return (
    <>
      <GeoLocationContext.Provider value={geoLocation}>
        <TopBar />
        <NewSearch />
        <SearchOptions />
        <Outlet />
        <Card />
        <Card />
        <Card />
        <Card />
        <Footer />
      </GeoLocationContext.Provider>
    </>
  );
};
export default App;
