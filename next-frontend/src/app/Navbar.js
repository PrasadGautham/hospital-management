"use client";

import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Hospital Management
        </Typography>
        <Link href="/">
          <Button color="inherit">Home</Button>
        </Link>

        <Link href="/doctors">
          <Button color="inherit">Doctors</Button>
        </Link>
        <Link href="/appointments">
          <Button color="inherit">Appointments</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
