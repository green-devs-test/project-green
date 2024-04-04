import { useContext, useEffect } from "react";
import Grid from "../Grid";
import NewSearch from "../NewSearch";
import SearchOptions from "../SearchOptions";
import styles from "./styles";
import { css } from "aphrodite";
import { SessionStorageContext } from "../../Context/SessionStorage.context";

const Results = () => {

  const sessionStorage = useContext(SessionStorageContext);

  useEffect(()=>{
    console.log(sessionStorage.get());
  },[]);

  return (
    <div className={css(styles.estilo)}>
      <NewSearch />
      <SearchOptions />
      <Grid />
    </div>
  );
};

export default Results;
