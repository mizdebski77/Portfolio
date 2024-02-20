import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { theme } from '../../../core/theme';
import lines from '../../../common/Images/rings.svg';
import { AboutTiles } from './AboutTiles';

export const About = () => {
    const theme = useTheme();
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            id='about'
            sx={{
                minHeight: '100vh',
                top: 0,
                position: isMdScreen ? '' : 'sticky',
                width: '100%',
                background: isMdScreen ? '' : 'linear-gradient(160deg, rgba(16,12,4,1) 57%, rgba(24,29,0,1) 100%)',
                pt: 4,
            }}>
            <Typography
                variant='h1'
                sx={{
                    fontSize: isMdScreen ? 40 : 120,
                    mt: 12,
                    textAlign: 'center',
                    color: theme.palette.primary.contrastText,
                    letterSpacing: 20,
                }}>
                About Me
            </Typography>
            <img src={lines} style={{ position: 'absolute', top: 0, height: isMdScreen ? '0' : 'cover', }} alt='xd' />
            <AboutTiles />
        </Box >
    );
};

