import { Box, Container, Typography } from '@mui/material';
import { theme } from '../../core/theme';
import xd from '../../common/Images/profile.png'

export const About = () => {

    return (
        <Box
            id='about'
            sx={{
                height: '100vh',
                top: 0,
                position: 'sticky',
                width: '100%',
                background: 'linear-gradient(160deg, rgba(16,12,4,1) 57%, rgba(24,29,0,1) 100%)',
                pt: 10
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
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr'
                }}
            >
                <Box
                    sx={{
                        backgroundImage: `url(${xd})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >

                </Box>


            </Container >

        </Box >
    );
};

