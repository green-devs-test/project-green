import { css } from "aphrodite";
import styles from "./styles";
import ColaborateBox from "../../Components/ColaborateBox";
import WelcomeHome from "../../Components/WelcomeHome";

const Body = () => {
  return (
    <>
      <div className={css(styles.bodyContainer)}>
        <WelcomeHome />
        <ColaborateBox />
      </div>
    </>
  );
};

export default Body;
