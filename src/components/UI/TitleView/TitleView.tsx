import { Box } from "@mui/material";


interface TitleViewProps{
    title:string
    subtitle:string
}

export default function TitleView({title,subtitle}:TitleViewProps):React.ReactElement{
    return(
        <Box>
            <h3>{title}</h3>
            <h5>{subtitle}</h5>
        </Box>
    )
}