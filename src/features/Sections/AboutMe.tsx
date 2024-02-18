import { Box, Typography, Stack, Paper } from '@mui/material';
import { theme } from '../../core/theme';
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
                maxWidth={1600}
                justifyContent='space-evenly'
                padding='40px'
            >
                {aboutInformations.map((section) => (
                    <Paper
                        key={section.id}
                        sx={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            width: '100%',
                            py: 4,
                            px: 2,
                            borderRadius: 4,
                            display: 'grid',
                            border: 1,
                            borderColor: theme.palette.primary.contrastText,
                            boxShadow: '10px -10px 20px #3c4601',
                        }}
                    >
                        <Typography
                            variant='h2'
                            sx={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 32,
                            }}
                        >
                            {section.title}
                        </Typography>
                    </Paper>
                ))}
            </Stack >

        </Box >
    );
};

