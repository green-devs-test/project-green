import { css } from "aphrodite";
import styles from "./styles";
import Icon from "../Icon";

const Materials = () => {
    return (
        <>
          <div className={css(styles.materialsContainer)}>
            <div className={css(styles.materialsItems)}>
              <Icon />
              <p className={css(styles.materialsParagraph)}>Material</p>
            </div>
          </div>
        </>
    );
};

export default Materials;