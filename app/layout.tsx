"use client";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Box, CssBaseline, CssVarsProvider } from "@mui/joy";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <CssVarsProvider disableTransitionOnChange>
          <CssBaseline />
          <Box sx={{ display: "flex", minHeight: "100dvh" }}>
            <Header />
            <Sidebar />
            <Box
              component="main"
              className="MainContent"
              sx={{
                px: { xs: 2, md: 6 },
                pt: {
                  xs: "calc(12px + var(--Header-height))",
                  sm: "calc(12px + var(--Header-height))",
                  md: 3,
                },
                pb: { xs: 2, sm: 2, md: 3 },
                flex: 1,
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                height: "100dvh",
                gap: 1,
              }}
            >
              {children}
            </Box>
          </Box>
        </CssVarsProvider>
      </body>
    </html>
  );
}
