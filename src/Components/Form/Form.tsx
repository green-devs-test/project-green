import { css } from "aphrodite";
import styles from './styles';
import Table from "../Table";
import SelectorProvincia from "../SelectorProvincia";
import SelectorLocalidad from "../SelectorLocalidad";
import BtnSearch from "../BtnSearch";

const Form = () => {
    return (
        <article>
          <div>
            <div>
              <form className={css(styles.form)}>
                <SelectorProvincia />
                <SelectorLocalidad />
                <div>
                    <BtnSearch />  
                </div>
              </form>
            </div>
            <Table />
            
          </div>
        </article>
    );
};

export default Form;