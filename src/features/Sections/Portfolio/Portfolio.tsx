import { Box, Container, Typography } from '@mui/material';
import { ProjectItem } from './ProjectItem';
import { theme } from '../../../core/theme';
import { projects } from '../../../common/Arrays/porfolio';

export const Portfolio = () => {
    return (
        <Box
            id='portfolio'
            sx={{
                minHeight: '100vh',
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
                Portfolio
            </Typography>

            <Container
                maxWidth='xl'
                sx={{
                    px: 4,
                    py: 12,
                    display: 'grid',
                    gap: 20
                }}
            >
                {projects.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </Container >
        </Box >
    );
};

