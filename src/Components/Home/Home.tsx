import { css } from "aphrodite";
import styles from "./styles";
import HomeSearchBox from "../HomeSearchBox";
import ColaborateBox from "../ColaborateBox";
import WelcomeHome from "../WelcomeHome";

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
