import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { theme } from '../../core/theme';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { projects } from '../../common/Arrays/porfolio';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

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
                maxWidth='lg'
                sx={{
                    p: 4,
                }}
            >
                {projects.map((project) => (
                    <Grid2 key={project.id} >
                        <img src={project.image} />
                        <Box>
                            <Box>
                                <Typography component='span'>
                                    {project.name}
                                </Typography>
                                <Stack direction="row" spacing={2}>

                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        sx={{
                                            px: 4,
                                            py: 1,
                                            border: 1,
                                            borderColor: theme.palette.primary.contrastText,
                                            fontSize: 18,
                                            color: theme.palette.primary.contrastText,
                                            borderRadius: 20,
                                            textDecoration: 'none',
                                            fontWeight: 'bold',
                                            transition: "background 0.4s, color 0.4s",
                                            "&:hover": {
                                                background: theme.palette.primary.contrastText,
                                                color: theme.palette.primary.main,
                                            }
                                        }}
                                    >
                                        Live
                                    </Link>

                                    <Link
                                        href={project.codeUrl}
                                        target="_blank"
                                        sx={{
                                            px: 4,
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
                                        Code
                                    </Link>
                                </Stack>
                            </Box>

                            <Typography component='span'>
                                {project.description}
                            </Typography>
                        </Box>
                    </Grid2>
                ))}



            </Container >

        </Box >
    );
};

