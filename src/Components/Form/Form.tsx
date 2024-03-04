import { css } from "aphrodite";
import styles from './styles';
import ProvinceSelector from "../ProvinceSelector";
import LocalitySelector from "../LocalitySelector";
import BtnSearch from "../BtnSearch";
import Grid from "../Grid";

const Form = () => {

  const SelectProvince = (province : string) => {
    console.log(province);
  };
  const SelectCity = (city : string) => {
    console.log(city);
  };

  const provinces = ['buenos aires', 'mendoza', 'Entre Rios'];
  const cities = ['capital', 'mendoza', 'paraná'];

    return (
        <article>
          <div>
            
            <div>
              <form className={css(styles.form)}>
                <ProvinceSelector provinceNames={provinces} selectProvince={SelectProvince} />
                <LocalitySelector citiesNames={cities} selectCity={SelectCity}/>
                <div>
                    <BtnSearch />  
                </div>
              </form>
            </div>

            <Grid />

          </div>
        </article>
    );
};

export default Form;