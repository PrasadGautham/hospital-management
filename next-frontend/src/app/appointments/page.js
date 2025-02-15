"use client";

import { Container, TextField, Button, Typography } from "@mui/material";

export default function BookAppointment() {
  return (
    <Container sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Book an Appointment
      </Typography>
      <TextField label="Your Name" fullWidth margin="normal" />
      <TextField label="Doctor's Name" fullWidth margin="normal" />
      <TextField type="date" fullWidth margin="normal" />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Container>
  );
}
