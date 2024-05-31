import { css } from "aphrodite";
import styles from "./styles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="itemFooter" className={css(styles.footerContainer)}>
      <Link className={css(styles.footerLink, styles.footerLogo)} to="/"> {" "}LOGO </Link>
      <Link className={css(styles.footerLink)} to="/about"> {" "}Sobre Nosotros </Link>
      <p className={css(styles.footerMail)}>Contactanos: mail@dominio.com.ar</p>
    </div>
  );
};

export default Footer;
