import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
import { css } from "aphrodite";
import styles from "./styles";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Card from "../Card";
import Body from "../Body";
import ReSearch from "../ReSearch/ReSearch";

const App = () => {
    return (
      <>
        <TopBar />
        <Outlet />
        <ReSearch />
        <Card />
        <Footer />
      </>
    )

};
export default App;
