import { css } from "aphrodite";
import styles from './styles';
import Table from "../Table";
import ProvinceSelector from "../ProvinceSelector";
import LocalitySelector from "../LocalitySelector";
import BtnSearch from "../BtnSearch";

const Form = () => {

  const SelectProvince = (province : string) => {
    console.log(province);
  };

  const provinces = ['buenos aires', 'mendoza', 'Entre Rios'];
  const cities = ['capital', 'mendoza', 'paraná'];

    return (
        <article>
          <div>
            <div>
              <form className={css(styles.form)}>
                <ProvinceSelector provinceNames={provinces} selectProvince={SelectProvince} />
                <LocalitySelector citiesNames={cities}/>
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