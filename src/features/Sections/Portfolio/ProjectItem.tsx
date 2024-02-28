import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { Container, Image, List, ListItem, Middle, Text } from './styledPortfolio';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { theme } from '../../../core/theme';
import { variantText, variantTitle } from '../../../core/animation';

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

    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));


    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: calculateRootMargin(),
    });

    function calculateRootMargin() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            return '0px 0px -20% 0px';
        } else {
            return '0px 0px -28% 0px';
        }
    }

    return (
        <Stack
            key={project.id}
            direction={
                isMdScreen ? 'column' : (project.id % 2 === 0 ? 'row-reverse' : 'row')
            }
            spacing={4}
            maxWidth={1500}
        >
            <div style={{ margin: 'auto', }}>
                <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: project.id % 2 === 0 ? '40vh' : '-40vh' }}
                    transition={{ duration: 0.5, type: "spring", }}

                    ref={ref}
                    sx={{
                        position: 'relative',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        '&:hover img': {
                            opacity: 0.1,
                            transform: 'scale(1.1)',
                        },
                        '&:hover div': {
                            opacity: 1,
                        },
                    }}
                >
                    <Image src={project.image} alt="Your Alt Text" />
                    <Box
                        sx={{
                            transition: '0.5s ease',
                            opacity: 0,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center',
                            '&:hover': {
                                opacity: 1,
                            },
                        }}
                    >
                        <Link
                            href={project.liveUrl}
                            target='_blank'
                            sx={{
                                color: '#bcdb02',
                                fontSize: '24px',
                                padding: '16px 32px',
                                textDecoration: 'none',
                                borderBottom: '2px solid',
                                transition: '0.3s',

                                "&:hover": {
                                    borderBottom: '2px solid',
                                    color: 'white',
                                }
                            }}
                        >
                            View Project
                        </Link>
                    </Box>
                </Box>

            </div>

            <Box display='grid' gap={2} >
                <Stack direction={isSmScreen ? 'column' : 'row'}
                    component={motion.div}
                    variants={variantTitle}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: isSmScreen ? 'center' : 'start',
                        gap: isSmScreen ? 1 : 0
                    }}>
                    <Typography component='h3' color='white' fontSize={isSmScreen ? 20 : 40} sx={{ textAlign: 'center' }}>
                        {project.name}
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        {project.codeUrl !== '' ? (
                            <Link
                                href={project.codeUrl}
                                target="_blank"
                                sx={{
                                    px: isSmScreen ? 2 : 3,
                                    py: 1,
                                    border: 1,
                                    borderColor: theme.palette.primary.contrastText,
                                    fontSize: isSmScreen ? 14 : 18,
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
                            href={project.liveUrl}
                            target="_blank"
                            sx={{
                                px: isSmScreen ? 2 : 3,
                                py: 1,
                                background: theme.palette.primary.contrastText,
                                color: theme.palette.primary.main,
                                fontSize: isSmScreen ? 14 : 18,
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
                                    px: isSmScreen ? 2 : 3,
                                    py: 1,
                                    border: 1,
                                    borderColor: theme.palette.primary.contrastText,
                                    fontSize: isSmScreen ? 14 : 18,
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
                        p: isMdScreen ? 2 : 4,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Typography component='h3'
                        sx={{
                            color: theme.palette.primary.light,
                            fontSize: isSmScreen ? 16 : 20,
                            textAlign: 'justify'
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


