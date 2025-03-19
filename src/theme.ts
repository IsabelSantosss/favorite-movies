import { createTheme } from "@mui/material";

export const theme = createTheme({
      typography: {
            fontFamily: 'Inter',
            fontSize: 12
      }, 
      components: {
            MuiCard: {
                  styleOverrides: {
                        root: {
                              backgroundColor: '#111111',
                              color: '#a1a1aa',
                              outlineColor: '#27272a'
                        }

                  }
            }
      } 
});