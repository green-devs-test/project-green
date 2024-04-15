import { css } from "aphrodite";
import styles from "./styles";

const Footer = () => {
  return (
    <div id="itemFooter" className={css(styles.footerContainer)}>
      <a className={css(styles.footerLink, styles.footerLogo)} href="/"> {" "}LOGO</a>
      <a className={css(styles.footerLink)} href="/about"> {" "}Sobre Nosotros</a>
      <p className={css(styles.footerMail)}>Contactanos: mail@dominio.com.ar</p>
    </div>
  );
};

export default Footer;
