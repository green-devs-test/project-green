import styles from './styles'
import { css } from 'aphrodite';

interface LinkProps {
  text: string
}

const Link = (props: LinkProps) => {
  return (
    <button className={css(styles.btn_option)}>{props.text}</button>
  );
}

export default Link;
