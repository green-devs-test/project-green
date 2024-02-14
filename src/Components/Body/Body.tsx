import { css } from 'aphrodite';
import styles from './styles';
import Link from '../Link';


const Body = () => {
  return (
    <div className={css(styles.body)}> <Link /> <Link /> <Link /> </div>
  );
}

export default Body;
