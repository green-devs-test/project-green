import { css } from "aphrodite";
import styles from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const GoUpButton = () => {
    return (
            <a href="#top">
                <div className={css(styles.goUpButton)}>
                    <FontAwesomeIcon icon={faArrowUp} className={css(styles.icon)}/>
                </div>
            </a>
    );
};

export default GoUpButton;