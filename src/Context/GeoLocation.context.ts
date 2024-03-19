import { createContext } from "react";
import geoLocationService from "../Services/GeoLocation.service";

const service = geoLocationService();
export const GeoLocationContext = createContext(service);
