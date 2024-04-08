import { createContext } from "react";
import { SessionStorageService } from "../Services/SessionStorage.service";

const sessionStorageService = SessionStorageService();
export const SessionStorageContext = createContext(sessionStorageService);
