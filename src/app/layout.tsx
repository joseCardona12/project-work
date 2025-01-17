import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Grid, Box } from "@mui/material";
import { TfiMenuAlt } from "react-icons/tfi";
import { Sidebar } from "@/components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Grid container spacing={2} style={{ height: "100vh" }} sx={{ backgroundColor: "var(--background-color-main)" }}>
          <Grid item xs={12} sm={2} md={2} sx={{
            backgroundColor: "var(--background-color-white)",
            borderRight: "1px solid var(--border-color)",
            heigth: "100vh",
            padding: "var(--padding-medium)",
          }}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={10} md={10} sx={{
            height: "100vh",
          }}>
            <Box sx=
            {{display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              padding: "var(--padding-medium)", 
              backgroundColor: "var(--background-color-white)",
              borderBottom: "1px solid var(--border-color)",
              }}>
              <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: "var(--padding-small)"}}>
                <TfiMenuAlt />
                SearchIcon
              </Box>
              <Box sx={{
                borderRadius: "50%", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                padding: "var(--padding-small)", 
                border: "1px solid var(--border-color)",
                height: "20px",
                width: "20px",
                }}>
                A
              </Box>
            </Box>
            {children}
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
