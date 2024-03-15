import TopBar from "../TopBar/TopBar";
import SearchOptions from "../SearchOptions";
import NewSearch from "../NewSearch";
import Footer from "../Footer/Footer";
import { css } from "aphrodite";
import styles from "./styles";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Card from "../Card";

const App = () => {
    return (
      <>
        <TopBar />
        <NewSearch />
        <SearchOptions />
        <Outlet />
        <Card />
        <Card />
        <Card />
        <Card />
        <Footer />
      </>
    )

};
export default App;
