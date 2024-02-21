import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ProjectItem } from './ProjectItem';
import { theme } from '../../../core/theme';
import { projects } from '../../../common/Arrays/porfolio';
import lines from '../../../common/Images/PortfolioLines.svg';

export const Portfolio = () => {

    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            id='portfolio'
            sx={{
                minHeight: '100vh',
                position: isMdScreen ? '' : 'sticky',
                width: '100%',
                pt: 4,
                background: isMdScreen ? '' : 'linear-gradient(160deg, rgba(16,12,4,1) 57%, rgba(24,29,0,1) 100%)',
                overflow: 'hidden'
            }}>

            <Typography
                variant='h1'
                sx={{
                    fontSize: isMdScreen ? 40 : 110,
                    mt: isSmScreen ? 6 : 12,
                    textAlign: 'center',
                    color: theme.palette.primary.contrastText,
                    letterSpacing: isSmScreen ? 10 : 20,
                }}>
                Portfolio
            </Typography>
            <img src={lines} style={{ position: 'absolute', top: 0, height: isMdScreen ? '0' : 'cover', }} alt='background' />

            <Container
                maxWidth='xl'
                sx={{
                    px: 4,
                    py: isSmScreen ? 6 : 12,
                    display: 'grid',
                    gap: isSmScreen ? 10 : 20
                }}
            >
                {projects.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </Container >
        </Box >
    );
};

