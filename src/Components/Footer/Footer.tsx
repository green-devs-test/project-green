import { css } from "aphrodite";
import styles from "./styles";

const Footer = () => {
  return (
    <div id="itemFooter" className={css(styles.footerContainer)}>
      <a className={css(styles.footerLink, styles.footerLogo)} href="https://github.com/green-devs-test"> {" "}LOGO</a>
      <a className={css(styles.footerLink)} href="https://github.com/green-devs-test"> {" "}Contactanos</a>
      <a className={css(styles.footerLink)} href="https://github.com/green-devs-test"> {" "}Sobre Nosotros</a>
    </div>
  );
};

export default Footer;
