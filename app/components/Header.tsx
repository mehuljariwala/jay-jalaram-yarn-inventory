import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Sheet from "@mui/joy/Sheet";
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { toggleSidebar } from "../utils";
import { Stack, Typography } from "@mui/joy";
import { usePathname } from "next/navigation";

export const headerNames = {
  "/add-party": "Add Party",
  "/add-color": "Add Color",
};

export default function Header() {
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <Sheet
      sx={{
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        width: "100vw",
        height: "var(--Header-height)",
        zIndex: 9995,
        p: 2,
        gap: 1,
        borderBottom: "1px solid",
        borderColor: "background.level1",
        boxShadow: "sm",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Header-height": "52px",
            [theme.breakpoints.up("md")]: {
              "--Header-height": "0px",
            },
          },
        })}
      />
      <Stack flexDirection="row" width={"100%"}>
        <IconButton
          onClick={() => toggleSidebar()}
          variant="outlined"
          color="neutral"
          size="sm"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          {headerNames[pathname as keyof typeof headerNames] || "Dashboard"}
        </Typography>

        <IconButton
          onClick={() => toggleSidebar()}
          variant="outlined"
          color="neutral"
          size="sm"
          sx={{ visibility: "hidden" }}
        >
          <MenuIcon />
        </IconButton>
      </Stack>
    </Sheet>
  );
}
