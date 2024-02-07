import Body from "../Body/Body";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
import { css } from "aphrodite";
import styles from './styles';

const App = () => {
  return (
    <div className={css(styles.container)}>

      <div className={css(styles.flex_container)}>
        <div className={css(styles.main_container)}>
          <TopBar />
          <Body />
          <div className={css(styles.footer_container)}>
          <Footer />
          </div>
        </div>
      </div>
    
      
    </div>
  );
}

export default App;
