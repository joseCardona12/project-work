import { Box } from "@mui/material";

interface ButtonIconProps{
    icon: React.ReactElement,
    color:string,
    border:string
}

export default function ButtonIcon({icon,color,border}: ButtonIconProps): React.ReactElement{
    return(
        <Box sx={{
            borderRadius: "var(--border-radius-small)",
            backgroundColor: color,
            border: border,
            padding: "var(--padding-small)",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {icon}
        </Box>
    )
}