import { css } from "aphrodite";
import styles from "./styles";

const GoUpButton = () => {
    return (
        <>
            <div className={css(styles.goUpButton)}>
                ⬆️
            </div>
        </>
    );
};

export default GoUpButton;