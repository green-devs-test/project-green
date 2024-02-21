import styles from './styles';
import { css } from 'aphrodite';
import Icon from '../Icon/Icon';


interface TopBarProps{
  toggleSidebar(): void
}

const TopBar = (props: TopBarProps) => {

  return (
    <div className={css(styles.topBar)} > 
      <div onClick={() => props.toggleSidebar()} className={css(styles.menu_icon_default)}><Icon /></div>
      <div>LOGO</div>
    </div>
  );
}

export default TopBar;
