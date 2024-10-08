import { Box } from "@mui/material";

interface ButtonProps{
    icon: React.ReactElement, 
    text:string,
    onClick: () =>void
    background?:string,
    
}
export default function Button({icon, text,onClick,background}: ButtonProps): React.ReactElement{
    return(
        <Box onClick={onClick} sx=
        {{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--padding-small)",
            cursor: "pointer",
            backgroundColor: background ? background : "var(--background-color-button)",
            borderRadius: "var(--border-radius-medium)",
            padding: "0 var(--padding-small)",
            color: "var(--background-color-white)",
            fontSize: ".75rem",
            height: "40px",
        }}
        >
            {icon}
            <p>{text}</p>
        </Box>
    )
}