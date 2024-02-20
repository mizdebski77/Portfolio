import { ThemeProvider } from "@mui/material";
import { Navigation } from "../common/Navigation";
import { Home } from "../features/Sections/Home";
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from "./theme";
import AnimatedCursor from 'react-animated-cursor';
import { Skills } from "../features/Sections/Skills";
import Part from "../common/particles.";
import { Portfolio } from "../features/Sections/Portfolio/Portfolio";
import { About } from "../features/Sections/About/AboutMe";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Part />
      <AnimatedCursor
        innerSize={10}
        outerSize={30}
        color='188, 219, 2'
        outerAlpha={0.4}
        innerScale={0.6}
        outerScale={0}
      />
      {/* <Navigation /> */}
      {/* <Home />
      <About /> */}
      <Skills />
      {/* <Portfolio /> */}

    </ThemeProvider>

  );
}

export default App;
