import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue color for primary buttons and highlights
    },
    secondary: {
      main: "#ff4081", // Pink color for secondary buttons
    },
    error: {
      main: "#d32f2f", // Red color for error messages
    },
    background: {
      default: "#f5f5f5", // Light grey background
      paper: "#ffffff", // White background for cards
    },
    text: {
      primary: "#212121", // Dark text
      secondary: "#757575", // Grey text
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Sets the default font
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  spacing: 8, // Default spacing unit (8px)
  breakpoints: {
    values: {
      xs: 0, // Extra small devices
      sm: 600, // Small devices
      md: 960, // Medium devices
      lg: 1280, // Large devices
      xl: 1920, // Extra large screens
    },
  },
});

export default theme;
