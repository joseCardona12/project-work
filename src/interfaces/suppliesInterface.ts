export interface ISupplies{
    id?:number,
    bodega:number,
    subcategoria:number,
    description:string,
    unidad:number,
    costo:number,
    precioventa:number,
    estado:number,
    comentarios:string,
    fechaCreacion:Date,
    fechaVencimiento:Date,
    nombreSubcategoria:string
};

export interface IDataSupplies{
    type:number,
    listarinsumos: ISupplies[],
    message: string
};