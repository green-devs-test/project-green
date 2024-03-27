import { createContext } from "react";
import { geoLocalityService } from "../Services/GeoLocality.service";

const service = geoLocalityService();
export const GeoLocalityContext = createContext(service);
