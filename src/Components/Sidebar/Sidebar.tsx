import Link from "../Link";
import { css } from 'aphrodite';
import styles from './styles';
import Logo from '../Logo/Logo';

const Sidebar = () => {
  return (
    <div className={css(styles.sidebar)}> Sidebar 
    <Logo />
        <Link />
        <Link />
        <Link />
        <Link />
    </div>
  );
}

export default Sidebar;
