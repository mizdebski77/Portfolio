import { createTheme } from "@mui/material";
import { lime, purple } from "@mui/material/colors";

export const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#100c04",
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
        fontFamily: 'Roboto'
    }
})
