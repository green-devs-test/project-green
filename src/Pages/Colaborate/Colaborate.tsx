import ColaborateCard from "../../Components/ColaborateCard";
import { css } from "aphrodite";
import styles from "./styles";

const Colaborate = () => {
  return (
    <>
      <div className={css(styles.colaborateContainer)} >
        <h2 className={css(styles.titlePage)}>Colabora con nosotros</h2>
        <ColaborateCard />
        <ColaborateCard />
        <ColaborateCard />
        <div className={css(styles.WriteUsMsj)}>
            <p className={css(styles.colaborateCall)}>¿Se te ocurre otra forma de ayudarnos?</p>
            <a className={css(styles.link)} href="/about">Escribinos</a>
        </div>
      </div>
    </>
  );
};

export default Colaborate;
