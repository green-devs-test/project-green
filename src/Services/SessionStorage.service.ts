import { SessionStorageInterface } from "./SessionStorage.interface";

export const SessionStorageService = () => {
    const save = (province: string, locality: string) => {
        sessionStorage.setItem("province", province);
        sessionStorage.setItem("locality", locality);
    }
    const get = (): SessionStorageInterface => {
        const province = sessionStorage.getItem("province") || "";
        const locality = sessionStorage.getItem("locality") || "";
        return {
            province: province,
            locality: locality
        }
    }

    return {
        save,
        get
    }
}