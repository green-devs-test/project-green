import styles from "./styles";
import { css } from "aphrodite";
import Icon from "../Icon/Icon";


const TopBar = () => {
  return (
    <div className={css(styles.topBar)}>
        <div>LOGO</div>
    </div>
  );
};

export default TopBar;
