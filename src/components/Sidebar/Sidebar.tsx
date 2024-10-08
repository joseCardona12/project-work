import { ISidebar } from "@/interfaces/sidebarInterface";
import { Box, List, ListItem } from "@mui/material";
import { IoHomeSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";



import Link from "next/link";
export default function Sidebar(): React.ReactElement{
    const sidebarNav: ISidebar[] = [
        {name: "Home", href: "/", icon: <IoHomeSharp/>},
        {name: "Supplies", href: "/", icon: <AiFillProduct/>},
        {name: "Categories", href: "/categories", icon: <BiSolidCategory/>},
        {name: "Countries", href: "/countries", icon: <IoHomeSharp/>},
    ]
    return(
        <>
            <Box>
                <h4>Service</h4>
            </Box>
            <List>
                {sidebarNav.map((sidebar) => (
                    <ListItem sx={{display: "flex", gap: "var(--padding-small)"}}>
                        {sidebar.icon}
                        <Link href={sidebar.href} style={{textDecoration: "none", color:"var(--paragraph-color)"}}>{sidebar.name}</Link>
                    </ListItem>
                ))}
            </List>
        </>
    )
}