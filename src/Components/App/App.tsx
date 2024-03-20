import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { GeoLocationContext } from "../../Context/GeoLocation.context";

const App = () => {
  const geoLocation = useContext(GeoLocationContext);
  return (
    <>
      <GeoLocationContext.Provider value={geoLocation}>
        <TopBar />
        <Outlet />      
        <Footer />
      </GeoLocationContext.Provider>
    </>
  )
}

export default App;