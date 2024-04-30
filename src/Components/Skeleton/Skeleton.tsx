import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { GeoLocalityContext } from "../../Context/GeoLocality.context";
import GoUpButton from "../GoUpButton";

const Skeleton = () => {
  const geoLocality = useContext(GeoLocalityContext);
  return (
    <>
      <GeoLocalityContext.Provider value={geoLocality}>
          <TopBar />
          <Outlet />
          <Footer />
          <GoUpButton />
      </GeoLocalityContext.Provider>
    </>
  );
};

export default Skeleton;
