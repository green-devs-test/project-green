import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
import { css } from "aphrodite";
import styles from './styles';
import { useState } from "react";
import { Outlet } from "react-router-dom";

enum SidebarType {
  DEFAULT= "default",
  OPEN= "open",
  CLOSED= "closed"
}

const App = () => {
  const [openSidebar, setOpenSidebar] = useState<SidebarType>(SidebarType.DEFAULT);

  const toggleSidebar = () => {
    if (openSidebar !== SidebarType.OPEN ) {
      setOpenSidebar(SidebarType.OPEN);
    } else if (openSidebar === SidebarType.OPEN) {
      setOpenSidebar(SidebarType.CLOSED);  
    };
  };
  
  
  return (
    <div className={css(styles.container)}>


      <div className={css(styles.flex_container)}>
        <div className={css(styles.main_container)}>
          <TopBar toggleSidebar={toggleSidebar} />
          
          <div className={css(styles.main_body_container)}>
            {
            openSidebar !== SidebarType.CLOSED ? <div className={css(openSidebar === SidebarType.DEFAULT && styles.sidebar_default)} ><Sidebar /></div> : null
            }
            <Outlet />
          </div>
          
          <div className={css(styles.footer_container)}>
            <Footer />
          </div>
        
        </div>
      </div>
    
      
    </div>
  );
}

export default App;
