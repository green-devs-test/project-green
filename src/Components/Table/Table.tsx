import { css } from "aphrodite";
import styles from "./styles";

const Table = () => {
  return (
    <div className={css(styles.table)}>
      <table>
        <thead>
          <tr>
            <th className={css(styles.thStyle)}>Nombre</th>
            <th className={css(styles.thStyle)}>Direccion</th>
            <th className={css(styles.thStyle)}>Barrio</th>
            <th className={css(styles.thStyle)}>Ubicacion (GPS)</th>
            <th className={css(styles.thStyle)}>Telefono</th>
            <th className={css(styles.thStyle)}>Tipo Material</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Placeholder1</td>
            <td>Placeholder Direccion1</td>
            <td>Placeholder Barrio1</td>
            <td>Placeholder GPS1</td>
            <td>Placeholder Telefono1</td>
            <td>Placeholder Material1</td>
          </tr>
          <tr>
            <td>Placeholder2</td>
            <td>Placeholder Direccion2</td>
            <td>Placeholder Barrio2</td>
            <td>Placeholder GPS2</td>
            <td>Placeholder Telefono2</td>
            <td>Placeholder Material2</td>
          </tr>
          <tr>
            <td>Placeholder3</td>
            <td>Placeholder Direccion3</td>
            <td>Placeholder Barrio3</td>
            <td>Placeholder GPS3</td>
            <td>Placeholder Telefono3</td>
            <td>Placeholder Material3</td>
          </tr>
          <tr>
            <td>Placeholder4</td>
            <td>Placeholder Direccion4</td>
            <td>Placeholder Barrio4</td>
            <td>Placeholder GPS4</td>
            <td>Placeholder Telefono4</td>
            <td>Placeholder Material4</td>
          </tr>
          <tr>
            <td>Placeholder5</td>
            <td>Placeholder Direccion5</td>
            <td>Placeholder Barrio5</td>
            <td>Placeholder GPS5</td>
            <td>Placeholder Telefono5</td>
            <td>Placeholder Material5</td>
          </tr>
          <tr>
            <td>Placeholder6</td>
            <td>Placeholder Direccion6</td>
            <td>Placeholder Barrio6</td>
            <td>Placeholder GPS6</td>
            <td>Placeholder Telefono6</td>
            <td>Placeholder Material6</td>
          </tr>
          <tr>
            <td>Placeholder7</td>
            <td>Placeholder Direccion7</td>
            <td>Placeholder Barrio7</td>
            <td>Placeholder GPS7</td>
            <td>Placeholder Telefono7</td>
            <td>Placeholder Material7</td>
          </tr>
          <tr>
            <td>Placeholder8</td>
            <td>Placeholder Direccion8</td>
            <td>Placeholder Barrio8</td>
            <td>Placeholder GPS8</td>
            <td>Placeholder Telefono8</td>
            <td>Placeholder Material8</td>
          </tr>
          <tr>
            <td>Placeholder9</td>
            <td>Placeholder Direccion9</td>
            <td>Placeholder Barrio9</td>
            <td>Placeholder GPS9</td>
            <td>Placeholder Telefono9</td>
            <td>Placeholder Material9</td>
          </tr>
          <tr>
            <td>Placeholder10</td>
            <td>Placeholder Direccion10</td>
            <td>Placeholder Barrio10</td>
            <td>Placeholder GPS10</td>
            <td>Placeholder Telefono10</td>
            <td>Placeholder Material10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
