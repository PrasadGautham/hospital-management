"use client";

import { Container, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Our Hospital
      </Typography>
      <Button variant="contained" color="primary">
        Book Appointment

      </Button>
    </Container>
  );
}
