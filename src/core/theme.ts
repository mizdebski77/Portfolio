import { createTheme } from "@mui/material";

export const theme = createTheme({
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