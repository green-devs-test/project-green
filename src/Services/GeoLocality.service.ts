import { Locality, Province, Spots } from "./GeoLocality.interfaces";

export const geoLocalityService = () => {

  const getProvinces = (): Promise<Province[]> => {
    return fetch(process.env.REACT_APP_API_URL + "/provinces/", {
      method: "GET",
      mode: "cors",
      redirect: "follow",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };

  const getLocalities = (province: string): Promise<Locality[]> => {
    return fetch(`${process.env.REACT_APP_API_URL}/provinces/${province}`, {
      method: "GET",
      mode: "cors",
      redirect: "follow",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };

  const getSpots = (
    province: string,
    location: string,
  ): Promise<Spots[]> => {
    return fetch(
      `${process.env.REACT_APP_API_URL}/provinces/${province}/${location}`,
      {
        method: "GET",
        mode: "cors",
        redirect: "follow",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };

  return {
    getProvinces,
    getLocalities,
    getSpots,
  };
};
