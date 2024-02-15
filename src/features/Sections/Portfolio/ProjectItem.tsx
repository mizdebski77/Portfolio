import React from 'react';
import { Box, Typography } from '@mui/material';
import { theme } from '../../../core/theme';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { Image, List, ListItem } from './styledPortfolio';
import { motion } from 'framer-motion';
import { variantText, variantTitle } from '../../../common/animation';
import { useInView } from 'react-intersection-observer';

interface ProjectItemProps {
    project: {
        id: number;
        name: string;
        description: string;
        tags: string[];
        image: string;
        liveUrl: string;
        codeUrl: string;
        APIlink: string;
    };
}
export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: calculateRootMargin(),
    });

    function calculateRootMargin() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            return '0px 0px -20% 0px';
        } else {
            return '0px 0px -40% 0px';
        }
    }

    return (
        <Stack
            key={project.id}
            direction={project.id % 2 === 0 ? 'row-reverse' : 'row'}
            spacing={4}
            maxWidth={1500}
        >
            <Link
                component={motion.a}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: project.id % 2 === 0 ? '40vh' : '-40vh' }}
                transition={{ duration: 0.5, type: "spring", }}
                href={project.liveUrl}
                target='_blank'
                ref={ref}
                sx={{
                    borderColor: theme.palette.primary.light,
                    borderRadius: 1,
                    overflow: 'hidden',
                    maxWidth: 600,
                    display: 'flex',
                    justifyContent: 'center',
                    boxShadow: '0 0 10px white',
                    transition: '0.4s',

                    '&:hover': {
                        boxShadow: `0 0 40px ${theme.palette.primary.contrastText}`,
                    },
                }}
            >
                <Image src={project.image} alt='project' />
            </Link>
            <Box display='grid' gap={2} >
                <Stack direction='row'
                    component={motion.div}
                    variants={variantTitle}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                    }}>
                    <Typography component='h3' color='white' fontSize={40}>
                        {project.name}
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        {project.codeUrl !== '' ? (
                            <Link
                                href={project.codeUrl}
                                target="_blank"
                                sx={{
                                    px: 3,
                                    py: 1,
                                    border: 1,
                                    borderColor: theme.palette.primary.contrastText,
                                    fontSize: 18,
                                    color: theme.palette.primary.contrastText,
                                    borderRadius: 20,
                                    textDecoration: 'none',
                                    transition: "background 0.4s, color 0.4s",
                                    "&:hover": {
                                        background: theme.palette.primary.contrastText,
                                        color: theme.palette.primary.main,
                                    }
                                }}
                            >
                                Code
                            </Link>
                        ) : null}

                        <Link
                            href={project.codeUrl}
                            target="_blank"
                            sx={{
                                px: 3,
                                py: 1,
                                background: theme.palette.primary.contrastText,
                                color: theme.palette.primary.main,
                                fontSize: 18,
                                borderRadius: 20,
                                textDecoration: 'none',
                                transition: "background 0.4s, color 0.4s",
                                border: 1,
                                "&:hover": {
                                    color: theme.palette.primary.contrastText,
                                    background: theme.palette.primary.main,
                                }
                            }}
                        >
                            Live
                        </Link>

                        {project.APIlink !== '' ? (
                            <Link
                                href={project.APIlink}
                                target="_blank"
                                sx={{
                                    px: 3,
                                    py: 1,
                                    border: 1,
                                    borderColor: theme.palette.primary.contrastText,
                                    fontSize: 18,
                                    color: theme.palette.primary.contrastText,
                                    borderRadius: 20,
                                    textDecoration: 'none',
                                    transition: "background 0.4s, color 0.4s",
                                    "&:hover": {
                                        background: theme.palette.primary.contrastText,
                                        color: theme.palette.primary.main,
                                    }
                                }}
                            >
                                API
                            </Link>
                        ) : null}
                    </Stack>
                </Stack>
                <Box
                    component={motion.div}
                    variants={variantText}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    sx={{
                        maxWidth: 900,
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: 2,
                        p: 4,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Typography component='span'
                        sx={{
                            color: theme.palette.primary.light,
                            fontSize: 20,
                        }}
                    >
                        {project.description}
                    </Typography>
                </Box>
                <List>
                    {project.tags.map((tag, index) => (
                        <ListItem
                            key={index}
                            as={motion.li}
                            initial={{ opacity: 0, x: '100vh' }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: '100vh' }}
                            transition={{ duration: 1.5, delay: index * 0.2, type: "spring", }}
                        >
                            {tag}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Stack >
    );
};

