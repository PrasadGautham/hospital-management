"use client";

import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

const doctors = [
  { name: "Dr. John Doe", specialty: "Cardiologist" },
  { name: "Dr. Jane Smith", specialty: "Dermatologist" },
];

export default function Doctors() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Our Doctors
      </Typography>
      <Grid container spacing={3}>
        {doctors.map((doctor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{doctor.name}</Typography>
                <Typography color="text.secondary">{doctor.specialty}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}