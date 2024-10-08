import axios from "axios";
import { ENPOINT_API } from "@/connections/connection";
import { IDataCategories } from "@/interfaces/categoriesInterface";
import verifyData from "@/utils/verifyData";

export const getCategoriesService = async ():Promise<IDataCategories | null | string> =>{
    try{
        const response = await axios<IDataCategories>({
            method: "POST",
            url: `${ENPOINT_API}25`,
        });
        return response.data;
        
    }catch(error: unknown){
        return `Error: ${error}`;
    }
};

export const deleteCatergoryService = async (categoryId:number):Promise<IDataCategories | null | string> =>{
    try{
        const response = await axios<IDataCategories>({
            method: "POST",
            url: `${ENPOINT_API}26`,
            params: categoryId
        });
        return response.data;
        
    }catch(error: unknown){
        return `Error: ${error}`;
    }
};

export const updateCategoryService = async (categoryId:number, category: {nameCategory:string, comment:string}):Promise<IDataCategories | null | string> =>{
    console.log(categoryId, category)
    const params = {
        descripcion:category.nameCategory,
        comentarios:category.comment
    }
    try{
        const dataVerify = verifyData(category.comment, category.nameCategory);
        if(!dataVerify)return null;
        const response = await axios<IDataCategories>({
            method: "POST",
            url: `${ENPOINT_API}26`,
            params:{
                id:categoryId,
                params
            } 
        });
        return response.data;
    }catch(error: unknown){
        return `Error: ${error}`;
    }
};