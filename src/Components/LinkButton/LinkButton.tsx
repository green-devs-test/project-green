import styles from './styles'
import { css } from 'aphrodite';
import { Link } from "react-router-dom";

interface LinkButtonProps {
  to: string,
  text: string
}

const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link to={props.to}>
      <button className={css(styles.btn_option)}>{props.text}</button>
    </Link>
  );
}

export default LinkButton;
