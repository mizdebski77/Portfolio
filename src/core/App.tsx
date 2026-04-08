import { ThemeProvider } from "styled-components";
import { Hero } from "../features/Hero/hero";
import { theme } from "./theme";
import { GlobalStyles } from "./globalStyles";
import { Portfolio } from "../features/Portfolio/portfolio";
import { Technologies } from "../features/Technologies/technologies";
import { Border } from "../common/components/components";
import { About } from "../features/About/about";
import { Contact } from "../features/Contact/contact";
import { Navigation } from "../common/Navbar/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./i18n";
import Spline from "@splinetool/react-spline";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Navigation />
            <Hero />
            <div style={{ position: "relative" }}>
                <Portfolio />
                <Border />
                <Technologies />
                <Border />
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        scale: "2.5",
                        opacity: "0.3",
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: -1, // Warstwa tła
                    }}
                >
                    <Spline scene="https://prod.spline.design/5bFtyMz3cMihZPhZ/scene.splinecode" />
                </div>

                <About />
                <Border />
                <Contact />
                <Border />
            </div>

            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
        </ThemeProvider>
    );
}

export default App;
