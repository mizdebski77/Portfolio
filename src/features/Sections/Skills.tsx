import { Box, Container, Paper, Typography, keyframes, } from '@mui/material';
import React from 'react';
import { theme } from '../../core/theme';
import { skills, } from '../../common/skillset';
import SvgIcon from '@mui/material/SvgIcon';
import { motion } from 'framer-motion';
import Slider from 'react-infinite-logo-slider'

export const Skills = () => {

    return (
        <Box
            id='skills'
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
                Skills
            </Typography>

            <Container
                maxWidth='xl'
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 6,
                    p: 4
                }}>
                {skills.map((skill, skillIndex) => (
                    <Paper
                        key={skillIndex}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            background: '#10100e ',
                            width: '180px',
                            height: '180px',
                            py: 4,
                            px: 2,
                            border: 1,
                            borderColor: theme.palette.primary.contrastText,
                        }} >
                        <SvgIcon
                            sx={{
                                color: theme.palette.primary.contrastText,
                                width: '64px',
                                height: '64px',
                                margin: 'auto'
                            }}
                        >
                            {skill.icon}
                        </SvgIcon>
                        <Typography
                            component='span'
                            sx={{
                                color: theme.palette.primary.light,
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {skill.text}
                        </Typography>
                    </Paper>
                ))
                }
            </Container >
        </Box >
    );
};

