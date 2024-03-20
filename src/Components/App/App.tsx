import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
import { css } from "aphrodite";
import styles from "./styles";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
      <>
        <TopBar />
        <Outlet />      
        <Footer />
      </>
    )

};
export default App;
