import styles from './styles';
import { css } from 'aphrodite';
import Btn_menu from '../Btn_menu/Btn_menu';

const TopBar = () => {

    const handleClick = () => {
      console.log('Componente Clickeado');
    };

  return (
    <div className={css(styles.topBar)} > 
    <div onClick={handleClick}>
      <Btn_menu />
    </div>
    <div>LOGO</div>
    </div>
  );
}

export default TopBar;
