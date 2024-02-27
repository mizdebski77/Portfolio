import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 750,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: 'linear-gradient(160deg, rgba(16,12,4,1) 57%, rgba(24,29,0,1) 100%)'
                }
            }
        }
    },

    palette: {
        primary: {
            main: '#100c04',
            light: '#b2b2b1',
            contrastText: '#bcdb02',
        },
        secondary: {
            main: '#bcdb02'
        }
    },
    typography: {
        fontFamily: 'Noto Sans'
    }
})
