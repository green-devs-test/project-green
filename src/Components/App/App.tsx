import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
import { css } from "aphrodite";
import styles from "./styles";
import { useState } from "react";
import { Outlet } from "react-router-dom";

enum SidebarType {
  DEFAULT = "default",
  OPEN = "open",
  CLOSED = "closed",
}

const App = () => {
  const [openSidebar, setOpenSidebar] = useState<SidebarType>(
    SidebarType.DEFAULT,
  );

  const toggleSidebar = () => {
    if (openSidebar !== SidebarType.OPEN) {
      setOpenSidebar(SidebarType.OPEN);
    } else if (openSidebar === SidebarType.OPEN) {
      setOpenSidebar(SidebarType.CLOSED);
    }
  };

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.flexContainer)}>
        <div className={css(styles.mainContainer)}>
          <TopBar toggleSidebar={toggleSidebar} />

          <div className={css(styles.mainBodyContainer)}>
            {openSidebar !== SidebarType.CLOSED ? (<div className={css(openSidebar === SidebarType.DEFAULT && styles.sidebarDefault,)}><Sidebar /></div>): null}
            <Outlet />
          </div>
          <div className={css(styles.footerContainer)}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
