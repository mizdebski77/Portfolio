import { Box } from "@mui/material";
import { Navigation } from "../common/Navigation";
import { Home } from "../features/Home";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from "./theme";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Home />
    </ThemeProvider>

  );
}

export default App;
