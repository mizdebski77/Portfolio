import { Box, Container, Typography, Stack, Paper } from '@mui/material';
import { theme } from '../../core/theme';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { aboutInformations } from '../../common/Arrays/aboutSections';

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

            <Stack
                margin='auto'
                direction='row'
                spacing={4}
                maxWidth={1500}
                justifyContent='space-evenly'
                padding='40px'
            >
                {aboutInformations.map((section) => (
                    <Paper
                        key={section.id}
                        sx={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            width: '100%',
                            p: 4,
                            borderRadius: 4
                        }}
                    >
                        <Typography
                            variant='h2'
                            sx={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 28,
                            }}
                        >{section.title}</Typography>
                    </Paper>
                ))}
            </Stack >

        </Box >
    );
};

