import { Box, Container, Typography } from '@mui/material';
import { theme } from '../../../core/theme';
import { projects } from '../../../common/Arrays/porfolio';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { Image, List, ListItem } from './styledPortfolio';
import { motion } from 'framer-motion';
import { containerVariants, variantText, variantTitle } from '../../../common/animation';
import { ProjectItem } from './ProjectItem';

export const Portfolio = () => {
    return (
        <Box
            id='portfolio'
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

