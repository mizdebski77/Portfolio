import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { ProjectItem } from './ProjectItem';
import { theme } from '../../../core/theme';
import { projects } from '../../../common/Arrays/porfolio';

export const Portfolio = () => {

    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            id='portfolio'
            sx={{
                minHeight: '70vh',
                width: '100%',
                pt: 4,
                overflow: 'hidden',
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

            <Container
                maxWidth='xl'
                sx={{
                    px: 4,
                    py: isSmScreen ? 6 : 8,
                    display: 'grid',
                    gap: isSmScreen ? 10 : 20,
                    justifyContent: 'center',
                }}
            >
                {projects.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </Container >
        </Box >
    );
};

