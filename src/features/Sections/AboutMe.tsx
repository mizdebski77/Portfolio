import { Box, Container, Typography } from '@mui/material';
import { theme } from '../../core/theme';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export const About = () => {

    return (
        <Box
            id='about'
            sx={{
                minHeight: '100vh',
                top: 0,
                position: 'sticky',
                width: '100%',
                background: 'linear-gradient(160deg, rgba(16,12,4,1) 57%, rgba(24,29,0,1) 100%)',
                pt: 4,
            }}>
            <Typography
                variant='h1'
                sx={{
                    fontSize: 120,
                    mt: 12,
                    textAlign: 'center',
                    color: theme.palette.primary.contrastText,
                    letterSpacing: 20,
                }}>
                About Me
            </Typography>

            <Container
                maxWidth='lg'
                sx={{
                    p: 4,
                }}
            >

            </Container >

        </Box >
    );
};

