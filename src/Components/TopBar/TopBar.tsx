import styles from "./styles";
import { css } from "aphrodite";

const TopBar = () => {
  return (
    <div className={css(styles.topBar)}>
      <div id='#top'>LOGO</div>
    </div>
  );
};

export default TopBar;
