export interface ICategories{
    id?:number,
    descripcion:string,
    comentarios:string,
    fechacreacion:Date,
}

export interface IDataCategories{
    type:number,
    listarcategorias: ICategories[],
    message: string
}