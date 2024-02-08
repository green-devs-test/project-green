import styles from './styles';
import { css } from 'aphrodite';

const Btn_menu = () => {
    return (
        <input className={css(styles.btn_menu)} type='checkbox'></input>
    );
}


export default Btn_menu;