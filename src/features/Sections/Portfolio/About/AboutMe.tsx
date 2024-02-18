import { Box, Typography, Stack } from '@mui/material';
import { theme } from '../../../../core/theme';
import { aboutInformations } from '../../../../common/Arrays/aboutSections';
import { Tile } from './styledAbout';
import xd from '../../../../common/Images/rings.svg'

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

            <img src={xd} style={{ position: 'absolute',  top: 0 }} />

            <Stack
                margin='auto'
                direction='row'
                spacing={4}
                maxWidth={1600}
                justifyContent='space-evenly'
                padding='40px'
            >
                {aboutInformations.map((section) => (
                    <Tile>
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
                    </Tile>
                ))}
            </Stack >

        </Box >
    );
};

