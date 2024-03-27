import { css } from "aphrodite";
import styles from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSliders, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';




export const Icon = () => {
  return <FontAwesomeIcon icon={faLocationDot} className={css(styles.icon)}/>;

};

export default Icon;
