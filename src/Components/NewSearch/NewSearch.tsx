import { css } from "aphrodite";
import styles from "./styles";
import ProvinceSelector from "../ProvinceSelector";
import LocalitySelector from "../LocalitySelector";
import geoLocationService from "../../Services/GeoLocation.service";
import { useEffect, useState } from "react";
import { Province } from "../../Services/interfaces";


const ReSearch = () => {
    const service = geoLocationService();
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [provinceError, setProvinceError] = useState(false);
    
    const SelectProvince = (province: string) => {
        console.log(province);
    };
    const SelectCity = (city: string) => {
        console.log(city);
    };

    useEffect (() => {
        const getProvinces = async () => {
            try {
                const response = await service.getProvinces();
                setProvinces(response);
            }   catch (error) {
                console.error("Ocurrió un error");
                setProvinceError(true);
            }
        };
        getProvinces();
    }, []);

    const cities = ["capital", "mendoza", "paraná"];

    return (
        <>
        {/* <form className={css(styles.newSearchContainer)}>
            <input className={css(styles.newSearchDropdown)} type="text" placeholder="Provincia"/>
            <input className={css(styles.newSearchDropdown)} type="text" placeholder="Localidad"/>
            <button className={css(styles.newSearchButton)}>🔎</button>
        </form> */}
        <form className={css(styles.newSearchContainer)}>
            {provinceError ? ( <p className={css(styles.newSearchDropdown)}> Ocurrio un error</p> ) : ( <ProvinceSelector provinceNames={provinces} selectProvince={SelectProvince} /> )}
            <LocalitySelector citiesNames={cities} selectCity={SelectCity} />
            <button className={css(styles.newSearchButton)}>🔎</button>
        </form>
        </>
    );
};

export default ReSearch;