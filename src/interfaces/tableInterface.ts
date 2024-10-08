import { GridRenderCellParams } from "@mui/x-data-grid"
import React from "react"

export interface IColumSupplies{
    field:string,
    headerName:string,
    width:number,
    renderCell?:(params:GridRenderCellParams<IRows>)=>React.ReactNode 
};
export interface IRows{
    description:string,
    id?:number,
    bodega:number,
    categoria:number,
    costo:string,
    unidad: string
    precioventa:string,
    estado:string,
    acciones: React.ReactNode
}
export interface IRowsCategory{
    id?:number,
    categoria: string,
    description:string,
    dateCreated:string,
    acciones:React.ReactElement
}