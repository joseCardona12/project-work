
"use client";
import { Box } from "@mui/material";
import { TitleView, ButtonIcon, Button, CircularLoader, Table } from "@/components";
import { IoMdRefresh } from "react-icons/io";
import { FaPlus, FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ISupplies } from "@/interfaces/suppliesInterface";
import { getSuppliesService } from "@/services/supplieService";
import { formatNumber } from "@/utils/formatNumberUtil";
import { useRouter } from "next/navigation";

export default function HomeView():React.ReactElement{
  const router = useRouter();
  const suppliesInitial: ISupplies[] = [{
    id: 0,
    bodega: 0,
    subcategoria: 0,
    description: "",
    unidad: 0,
    costo: 0,
    precioventa: 0,
    estado: 0,
    comentarios: "",
    fechaCreacion: new Date(),
    fechaVencimiento: new Date(),
    nombreSubcategoria: "",
  }]
  const [supplies, setSupplies] = useState<ISupplies[]>(suppliesInitial);
  const [loading, setLoading] = useState<boolean>(true);
  const handleCreateSupplies = ():void => {
    router.push("/crear-insumo");
  }

  useEffect(()=>{
    const getSupplies = async () => {
      const supplies = await getSuppliesService();
      if(!supplies || typeof(supplies) === "string") return;
      const {listarinsumos} = supplies;
      setSupplies(listarinsumos);
      setLoading(false);
    };
    getSupplies();
  }, []);
  console.log(JSON.stringify(supplies));
  return(
    <main>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Box>
          <TitleView 
          title="Listado De Insumos" 
          subtitle="Gestión de Insumos"/>
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
          onClick={handleCreateSupplies}
          />
        </Box>
      </Box>
      {loading ? <CircularLoader/> : null}
      <Table
      columns={[
        {
        field:"description",
        headerName:"Insumo",
        width:100,
      },
      {
        field:"id",
        headerName:"Id insumo",
        width:100,
      },
      {
        field:"bodega",
        headerName:"Bodega",
        width:100,
      },
      {
        field:"categoria",
        headerName:"Categoría",
        width:100,
      },
      {
        field:"costo",
        headerName:"Costo",
        width:100,
      },
      {
        field:"precioventa",
        headerName:"Precio venta",
        width:100,
      },
      {
        field:"unidad",
        headerName:"Unidad",
        width:100,
      },
      {
        field:"estado",
        headerName:"Estado",
        width:100,
      },
      {
        field:"acciones",
        headerName:"Acciones",
        width:270,
      }
    ]}
      rows={supplies.map((supplies) => ({
        id: supplies.id,
        description: supplies.description,
        bodega: supplies.bodega,
        categoria: supplies.subcategoria,
        costo: supplies.costo ? `$${formatNumber(supplies.costo)}` : "$0.00",	
        precioventa: supplies.precioventa ? `$${formatNumber(supplies.precioventa)}` : "$0.00",
        unidad: supplies.unidad === 1 ? "Unidades" : "Kilogramos",
        estado: supplies.estado === 1 ? "Activo" : "Inactivo",
        acciones: <p>Hola</p>
      }))}
      />
    </main>
  )
}