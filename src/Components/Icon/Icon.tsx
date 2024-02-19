import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from 'aphrodite';
import styles from './styles';
import { FaBars } from "react-icons/fa";

export const Icon = () => {
    return (
        <FaBars className={css(styles.iconito)} />
    )
};

export default Icon;