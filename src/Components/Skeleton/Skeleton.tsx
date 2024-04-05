import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { GeoLocalityContext } from "../../Context/GeoLocality.context";
import { SessionStorageContext } from "../../Context/SessionStorage.context";
import GoUpButton from "../GoUpButton";

const Skeleton = () => {
  const geoLocality = useContext(GeoLocalityContext);
  const sessionStorage = useContext(SessionStorageContext);
  return (
    <>
      <GeoLocalityContext.Provider value={geoLocality}>
        <SessionStorageContext.Provider value={sessionStorage}>
          <TopBar />
          <Outlet />
          <Footer />
          <GoUpButton />
        </SessionStorageContext.Provider>
      </GeoLocalityContext.Provider>
    </>
  );
};

export default Skeleton;
