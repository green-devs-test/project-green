import styles from './styles';
import { css } from 'aphrodite';
import Btn_menu from '../Btn_menu/Btn_menu';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const sidebar = document.querySelector('#item_sidebar');

const TopBar = () => {


    const handleClick = () => {
      console.log('Componente Clickeado');
      sidebar.style.visibility = 'display';
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
