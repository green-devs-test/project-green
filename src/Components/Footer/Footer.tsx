import { css } from "aphrodite";
import styles from "./styles";

const Footer = () => {
  return (
    <div id="itemFooter" className={css(styles.footer)}>
      ProjectGreen - Copywright© 2024 - Powered by
      <a
        className={css(styles.footerLink)}
        href="https://github.com/green-devs-test"
      >
        {" "}
        Green Dev tests
      </a>
    </div>
  );
};

export default Footer;
