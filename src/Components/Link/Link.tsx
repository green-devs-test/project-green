import styles from './styles'
import { css } from 'aphrodite';

const Link = () => {
  return (
    <button className={css(styles.btn_option)}>Link</button>
  );
}

export default Link;
