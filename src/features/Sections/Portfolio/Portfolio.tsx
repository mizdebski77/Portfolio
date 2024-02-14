import { Box, Container, Typography } from '@mui/material';
import { theme } from '../../../core/theme';
import { projects } from '../../../common/Arrays/porfolio';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { Image, List, ListItem } from './styledPortfolio';

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
                    px: 4,
                    py: 12,
                }}
            >
                {projects.map((project) => (
                    <Stack
                        key={project.id}
                        direction={project.id % 2 === 0 ? "row-reverse" : "row"}
                        spacing={4}
                        maxWidth={1200}>
                        <Link
                            href={project.liveUrl}
                            target='_blank'
                            sx={{
                                borderColor: theme.palette.primary.light,
                                borderRadius: 1,
                                overflow: 'hidden',
                                width: 720,
                                display: 'flex',
                                justifyContent: 'center',
                                boxShadow: '0 0 10px white',
                            }}
                        >
                            <Image
                                src={project.image}
                                alt='project'
                            />

                        </Link>
                        <Box display='grid' gap={2} >
                            <Stack direction='row'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'start',
                                }}>
                                <Typography component='h3' color='white' fontSize={40}>
                                    {project.name}
                                </Typography>
                                <Stack direction="row" spacing={2}>

                                    <Link
                                        href={project.liveUrl}
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

                                    <Link
                                        href={project.liveUrl}
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
                                </Stack>
                            </Stack>
                            <Box
                                sx={{
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
                                    <ListItem key={index} >
                                        {tag}
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Stack>
                ))}
            </Container >

        </Box >
    );
};

