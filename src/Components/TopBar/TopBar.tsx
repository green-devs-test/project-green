import styles from './styles';
import { css } from 'aphrodite';
import Icon from '../Icon/Icon';

interface TopBarProps{
  toggleSidebar(): void
}

const TopBar = (props: TopBarProps) => {
  // TODO: show and hide menu button with css according to media query
  // TODO: add fontawesome to use burguer icon

  return (
    <div className={css(styles.topBar)} > 
      <div onClick={() => props.toggleSidebar()}><Icon /></div>
      <div>LOGO</div>
    </div>
  );
}

export default TopBar;
