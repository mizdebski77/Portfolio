import { ThemeProvider, useMediaQuery } from "@mui/material";
import { Navigation } from "../common/Navigation/Navigation";
import { Home } from "../features/Sections/Home";
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from "./theme";
import AnimatedCursor from 'react-animated-cursor';
import Part from "../common/particles.";
import { Sections } from "../features/Sections";



function App() {
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Part />
      {isSmScreen ? null : (
        <AnimatedCursor
          innerSize={10}
          outerSize={30}
          color='188, 219, 2'
          outerAlpha={0.4}
          innerScale={0.6}
          outerScale={0}
        />
      )}

      <Navigation />
      <Home />
      <Sections />
    </ThemeProvider>

  );
}

export default App;
