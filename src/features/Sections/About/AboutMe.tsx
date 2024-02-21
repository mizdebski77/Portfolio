import { Box, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../../core/theme';
import { AboutTiles } from './AboutTiles';

export const About = () => {

    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            id='about'
            sx={{
                minHeight: '70vh',
                width: '100%',
                overflow: 'hidden',
                position: isMdScreen ? '' : 'relative',
                zIndex: 1,
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
            <AboutTiles />
        </Box >
    );
};

