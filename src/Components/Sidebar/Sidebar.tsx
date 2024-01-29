import Link from "../Link";
import { css } from 'aphrodite';
import styles from './styles';

const Sidebar = () => {
  return (
    <div className={css(styles.sidebar)}> Sidebar 
        <Link />
        <Link />
        <Link />
        <Link />
    </div>
  );
}

export default Sidebar;
