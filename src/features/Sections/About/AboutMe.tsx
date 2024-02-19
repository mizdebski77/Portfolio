import { Box, Typography, Stack } from '@mui/material';
import { Tile } from './styledAbout';
import { theme } from '../../../core/theme';
import lines from '../../../common/Images/rings.svg';
import { AboutTiles } from './aboutTiles';

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
            <img src={lines} style={{ position: 'absolute', top: 0, height: 'cover', bottom: 0, }} alt='xd' />
            <AboutTiles />
        </Box >
    );
};

