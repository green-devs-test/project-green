import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
import { css } from "aphrodite";
import styles from "./styles";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Card from "../Card";
import Body from "../Body";
import ReSearch from "../NewSearch/NewSearch";
import SearchOptions from "../SearchOptions";

const App = () => {
    return (
      <>
        <TopBar />
        <Outlet />
        <ReSearch />
        <SearchOptions />
        <Card />
        <Card />
        <Card />
        <Card />
        <Footer />
      </>
    )

};
export default App;
