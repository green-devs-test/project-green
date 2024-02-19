import LinkButton from "../LinkButton";
import { css } from 'aphrodite';
import styles from './styles';
import Logo from '../Logo/Logo';

const Sidebar = () => {
  return (
    <div id='item_sidebar' className={css(styles.sidebar)}> Sidebar 
    <Logo />
        <LinkButton to="/" text="Home"/>
        <LinkButton to="/about" text="Quienes Somos"/>
        <LinkButton to="/test" text="test"/>
    </div>
  );
}

export default Sidebar;
