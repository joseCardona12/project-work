"use client";
import { Button, CircularLoader, TitleView } from "@/components";
import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaPlus, FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Input from '@mui/joy/Input';
import Autocomplete from '@mui/joy/Autocomplete';
import { IFormDataCreateSupplies } from "@/interfaces/formDataCreateSupplies";
import { getSuppliesService } from "@/services/supplieService";
import { ISelectDataSupplies } from "@/interfaces/selectDataSupplies";

export default function CrearInsumoView(): React.ReactElement {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);

    const formDataCreateSuppliesInitial: IFormDataCreateSupplies = {
        nombreInsumo: "",
        bodega: 0,
        categoria: 0,
        unidad: 0,
        precioVenta: 0,
        costo: 0,
        estado: 0,
        comentarios: "",
        subCategoria: 0
    };

    const [formDataCreateSupplies, setFormDataCreateSupplies] = useState<IFormDataCreateSupplies>(formDataCreateSuppliesInitial);

    const handleBackSupplies = (): void => {
        router.push("/");
    };

    const handleChange = (event: any): void => {
        const {name,value} = event.target;
        console.log(name, value);
        setFormDataCreateSupplies({...formDataCreateSupplies, [name]: value});
    };

    const handleCreate = (): void => {
        console.log("formDataCreateSupplies", formDataCreateSupplies);
    };

    return (
        <main>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Box>
                    <TitleView
                        title="Crear insumo"
                        subtitle="Crear un nuevo insumo" />
                </Box>
                <Box sx={{
                    display: "flex",
                    gap: "var(--padding-small)",
                    alignItems: "center",
                }}>
                    <Button
                        icon={<FaArrowLeftLong />}
                        text="Volver a insumos"
                        onClick={handleBackSupplies}
                    />
                </Box>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <label>Nombre del insumo</label>
                        <Input
                            placeholder="Nombre del insumo"
                            onChange={handleChange}
                            name="nombreInsumo"
                            value={formDataCreateSupplies?.nombreInsumo}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <label>Bodega</label>
                        <Autocomplete
                            options={[1]}
                            name="bodega"
                            getOptionLabel={(option) => option.toString()}
                            value={formDataCreateSupplies.bodega || null}
                            onChange={(event)=>handleChange(event)}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <label>Categoria</label>
                        <Autocomplete
                            options={[1]}
                            name="categoria"
                            value={formDataCreateSupplies.categoria || null}
                            onChange={(event)=>handleChange(event)}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <label>Sub Categoría</label>
                        <Autocomplete
                            options={[1]}
                            name="suncategoria"
                            value={0}
                            onChange={(event)=>handleChange(event)}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <label>Unidad</label>
                        <Autocomplete
                            options={[1]}
                            name="unidad"
                            value={formDataCreateSupplies.unidad || null}
                            onChange={(event)=>handleChange(event)}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <label>Costo</label>
                        <Input
                            placeholder="Ingresa el costo"
                            onChange={handleChange}
                            name="costo"
                            value={formDataCreateSupplies.costo}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <label>Precio Venta</label>
                        <Input
                            placeholder="Ingresa el precio"
                            onChange={handleChange}
                            name="precioVenta"
                            value={formDataCreateSupplies.precioVenta} 
                        />                   
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <label>Estado</label>
                        <Autocomplete
                            options={[1]}
                            name="estado"
                            value={formDataCreateSupplies.estado || null}
                            onChange={(event)=>handleChange(event)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <label>Comentarios</label>
                        <Input
                            placeholder="Ingresa los comentarios"
                            onChange={handleChange}
                            name="precioVenta"
                            value={formDataCreateSupplies.comentarios} 
                        />                   
                    </Grid>
                </Grid>
                <Button
                    icon={<FaPlus />}
                    text="Crear insumo"
                    onClick={handleCreate}
                />
            </Box>
        </main>
    );
}
