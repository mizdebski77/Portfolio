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
                pt: 4
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

            <Container maxWidth='xl' sx={{ display: 'grid', gap: 6, p: 4 }}>
                {skills.map((skill, skillIndex) => (
                    <Box key={skillIndex}>
                        <Typography
                            variant='h3'
                            color='#ffff'
                            mb='10px'
                            fontSize={52}
                        >
                            {skill.title}
                        </Typography>

                        <Container maxWidth='lg' >

                            <Slider
                                duration={5}
                                pauseOnHover={true}
                                blurBorders={true}
                                blurBoderColor={'#fff'}>
                                {skill.elements.map((element, elementIndex) => (
                                    <Paper key={elementIndex} sx={{ height: '100%', width: '250px' }} >
                                        <SvgIcon sx={{ color: theme.palette.primary.contrastText, }}>
                                            {element.icon}
                                        </SvgIcon>
                                    </Paper>
                                ))}
                            </Slider>
                        </Container>
                    </Box>
                ))
                }
            </Container >
        </Box >
    );
};

