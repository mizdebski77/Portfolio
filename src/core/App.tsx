import { Box } from "@mui/material";
import { Navigation } from "../common/Navigation";
import { Home } from "../features/Home";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lime, purple } from '@mui/material/colors';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#100c04",
        }
      }
    }
  }
});

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
