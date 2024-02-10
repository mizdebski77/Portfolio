import { Box, Container, Typography } from '@mui/material';
import { theme } from '../../core/theme';

export const About = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                position: 'absolute',
                top: '100vh',
                width: '100%',
                background: 'linear-gradient(160deg, rgba(16,12,4,1) 57%, rgba(24,29,0,1) 100%)',
                zIndex: 1,
            }}>
            <Typography
                variant='h1'
                sx={{
                    fontSize: 120,
                    mt: 12,
                    textAlign: 'center',
                    color: theme.palette.primary.contrastText,
                    letterSpacing: 20,
                }}
            >About Me</Typography>
            <Container
                maxWidth='xl'
            >


            </Container>

        </Box>
    );
};

