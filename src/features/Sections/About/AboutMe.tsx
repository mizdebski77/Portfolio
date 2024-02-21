import { Box, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../../core/theme';
import lines from '../../../common/Images/rings.svg';
import { AboutTiles } from './AboutTiles';

export const About = () => {
    
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            id='about'
            sx={{
                minHeight: isSmScreen ? '70vh' : '100vh',
                top: 0,
                position: isMdScreen ? '' : 'sticky',
                width: '100%',
                background: isMdScreen ? '' : 'linear-gradient(160deg, rgba(16,12,4,1) 57%, rgba(24,29,0,1) 100%)',
                overflow: 'hidden'
            }}>
            <Typography
                variant='h1'
                sx={{
                    fontSize: isMdScreen ? 40 : 120,
                    mt: isSmScreen ? 6 : 12,
                    textAlign: 'center',
                    color: theme.palette.primary.contrastText,
                    letterSpacing: isSmScreen ? 10 : 20,
                }}>
                About Me
            </Typography>
            <img src={lines} style={{ position: 'absolute', top: 0, height: isMdScreen ? '0' : 'cover', }} alt='xd' />
            <AboutTiles />
        </Box >
    );
};

