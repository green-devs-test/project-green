import { Locality, Province, Spot } from "../Data/interfaces";
import locationsBuenosAires from "../Data/locationsBuenosAires";

export const geoLocalityService = () => {
  const getProvinces = (): Promise<Province[]> => {
    // this will be unnused for now
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

  const getLocalities = (): Locality[] => {
    return locationsBuenosAires;
  };

  const getSpots = (location: string): Spot[] => {
    return locationsBuenosAires.find((l) => l.name === location)?.spots || [];
  };

  return {
    getProvinces,
    getLocalities,
    getSpots,
  };
};
