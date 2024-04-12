import styles from "./styles";
import { css } from "aphrodite";

// TODO: add the functionality with props

const SpotBreadcrumb = () => {
  return (
    <div className={css(styles.SpotBreadcrumbContainer)}>
      <p>CABA &lt; Almagro</p>
    </div>
  );
};

export default SpotBreadcrumb;
