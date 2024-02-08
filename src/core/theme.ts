import { createTheme } from "@mui/material";
import { lime } from "@mui/material/colors";

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
            main: '#100c04'
        },
        secondary: lime
    }
})
