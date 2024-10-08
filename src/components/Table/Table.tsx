import { IColumSupplies, IRows, IRowsCategory } from "@/interfaces/tableInterface";
import { Paper, Box} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import ButtonIcon from "../UI/ButtonIcon/ButtonIcon";
import { FaFilter } from "react-icons/fa6";


interface TableProps{
    columns: IColumSupplies[],
    rows: IRows[] | IRowsCategory[],
}

export default function Table({columns,rows}:TableProps):React.ReactElement {
    const paginationModel: {page:number, pageSize:number} = {page:0, pageSize: 4};
    console.log("rows", rows)
    return (
        
    <Paper sx={{ height: 400, width: '100%' }}>
        <Box sx=
        {{
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            gap: "var(--padding-small)",
            padding: "var(--padding-medium)",

        }}>
            search
            <ButtonIcon 
            icon={<FaFilter color="var(--background-color-white)"/>}
            color={"var(--background-color-button)"}
            border={"none"}
            />
        </Box>
        <DataGrid
            key={"key"}
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
        />
    </Paper>
    )
}