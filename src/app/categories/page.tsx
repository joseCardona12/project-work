"use client";
import { Button, ButtonIcon, Table, TitleView } from "@/components";
import { ICategories } from "@/interfaces/categoriesInterface";
import { getCategoriesService } from "@/services/categorieService";
import {Box} from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import UpdateDialog from "@/components/Dialog/Dialog";
import { useElmentId } from "@/state-global/elementId";


export default function CategoriesView():React.ReactElement{
    const setElementId = useElmentId((state) =>state.setElementId);
    const categoriesInitial: ICategories[] = [{
        id: 0,
        descripcion: "",
        comentarios: "",
        fechacreacion: new Date(),
    }] 
    const [categories,setCategories] = useState<ICategories[]>([]);
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const handleOpenDialog = (id:number):void => {
        if(!id)return;
        setElementId(id.toString());
        console.log("id", id);
        setOpenDialog(true);
    };

    const handleCloseDialog = ():void => {
        setOpenDialog(false);
    };

    const handleSave = (field1: string, field2: string):void => {
        console.log('Datos guardados:', { field1, field2 });
    };

    useEffect(()=>{
        const getCategories = async () => {
            const data = await getCategoriesService();
            if(!data || typeof(data) === "string") return;
            const {listarcategorias} = data;
            setCategories(listarcategorias);
        };
        getCategories();
    },[])
    return (
        <main>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Box>
          <TitleView 
          title="Listado De Categorias" 
          subtitle="Gestión de Categorías"/>
        </Box>
        <Box sx={{
          display: "flex",
          gap: "var(--padding-small)",
          alignItems: "center",
        }}>
          <ButtonIcon
          icon={<IoMdRefresh/>}
          color="var(--background-color-white)"
          border="1px solid var(--border-color)"
          />
          <ButtonIcon
          icon={<IoMdRefresh/>}
          color="var(--background-color-white)"
          border="1px solid var(--border-color)"
          /> 
          <Button
          icon={<FaPlus/>}
          text="Create new Supplies"
          onClick={()=>console.log("d")}
          />
        </Box>
      </Box>
      <Table
      columns={[
        {
            field:"id",
            headerName:"ID",
            width:100,
        },
        {
            field:"categoria",
            headerName:"Categoría",
            width:100,
        },
        {
            field:"descripción",
            headerName:"Descripción",
            width:300,
        },
        {
            field:"dateCreated",
            headerName:"Fecha de Creación",
            width:150,
        },
        {
            field:"acciones",
            headerName:"Acciones",
            width:300,
            renderCell: (params: GridRenderCellParams) => (
                <Box 
                    sx={{
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center',
                    }}
                >
                    <Button
                        background="blue"
                        icon={<MdModeEdit/>}
                        text="Edit"
                        onClick={()=>handleOpenDialog(params.row.id)}
                    />
                    <Button
                        background="red"
                        icon={<FaTrash/>}
                        text="Delete"
                        onClick={() => console.log("Eliminar categoría:", params.row.id)}
                    />
                </Box>   
            ),
        },
      ]
      }
      rows={categories.map((category)=>({
          id:category.id,
          categoria:category.descripcion,
          descripción:category.comentarios,
          dateCreated:category.fechacreacion,
      }))}
      
      />
      <UpdateDialog
                open={openDialog}
                onClose={handleCloseDialog}
                onSave={handleSave}
                title="Actualizar categoría"
                label1="Nombre de la categoría"
                label2="Comentarios"
                action="update"
        />
      </main>
    )
}