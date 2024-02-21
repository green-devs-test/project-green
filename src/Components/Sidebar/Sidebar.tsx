import Link from "../Link";
import { css } from 'aphrodite';
import styles from './styles';
import Logo from '../Logo/Logo';

const Sidebar = () => {
  return (
    <div id='item_sidebar' className={css(styles.sidebar)}> Sidebar 
    <Logo />
        <Link text='Home' />
        <Link text='About us' />
        <Link text='Test'/>
    </div>
  );
}

export default Sidebar;
