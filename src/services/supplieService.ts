import axios from "axios";
import { ENPOINT_API } from "@/connections/connection";
import { ISupplies, IDataSupplies } from "@/interfaces/suppliesInterface";

export const getSuppliesService = async ():Promise<IDataSupplies | null | string> =>{
    try{
        const response = await axios<IDataSupplies>({
            method: "POST",
            url: `${ENPOINT_API}29`,
        });
        return response.data;
        
    }catch(error: unknown){
        return `Error: ${error}`;
    }
};