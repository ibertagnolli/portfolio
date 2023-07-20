import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const theme = createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#9587BA',
        },
        secondary: {
          main: '#243B4A',
        },
        error: {
          main: '#650031',
        },
        info: {
          main: '#3C887E',
        },
        success: {
          main: '#EABDA8',
        },
      },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;