import { useAppSelector } from "../../redux/hooks";
import styles from "./styles";
import { css } from "aphrodite";

// TODO: add the functionality with props

const SpotBreadcrumb = () => {
  
  const fields = useAppSelector((state) => state.fields);
  return (
    <div className={css(styles.SpotBreadcrumbContainer)}>
      <p>{fields.province} {">"} {fields.locality}</p>
    </div>
  );
};

export default SpotBreadcrumb;
