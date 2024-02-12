import { Box, Container, Paper, Typography, } from '@mui/material';
import React from 'react';
import { theme } from '../../core/theme';
import { skills, } from '../../common/skillset';
import SvgIcon from '@mui/material/SvgIcon';
import { motion } from 'framer-motion';

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
                        <Container maxWidth='lg' sx={{ m: 'auto', overflow: 'hidden' }}>
                            <Box
                                component={motion.div}
                                initial={{ transform: 'translateX(0)' }}
                                animate={{ transform: 'translateX(calc(-250px))' }}
                                transition={{ duration: 10, repeat: Infinity }}
                                sx={{ display: 'flex', gap: 40, width: 'calc(250px * 18)' }}
                            >
                                {skill.elements.map((element, elementIndex) => (
                                    <Paper
                                        key={elementIndex}
                                        sx={{
                                            height: 200,
                                            width: 250,
                                            background: '#10100e',
                                            p: 6,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: 1,
                                            borderColor: theme.palette.primary.contrastText,
                                            boxShadow: 0,
                                        }}
                                    >
                                        <SvgIcon
                                            sx={{ color: theme.palette.primary.contrastText, width: '80px', height: '80px', margin: 'auto' }}
                                        >
                                            {element.icon}
                                        </SvgIcon>
                                    </Paper>

                                ))}

                            </Box>

                        </Container>
                        {/* <Box sx={{ display: 'flex', gap: 6 }}>
                            {skill.elements.map((element, elementIndex) => (
                                <Box
                                    key={elementIndex}
                                    sx={{
                                        display: 'grid',
                                        background: '#10100e',
                                        p: 6,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 2,
                                        border: 1,
                                        borderColor: theme.palette.primary.contrastText,
                                        boxShadow: 0,
                                        width: 260
                                    }}
                                >
                                    <SvgIcon
                                        sx={{ color: theme.palette.primary.contrastText, width: '80px', height: '80px', margin: 'auto' }}
                                    >
                                        {element.icon}
                                    </SvgIcon>
                                    <Typography
                                        component='span'
                                        sx={{
                                            color: theme.palette.primary.light,
                                            textAlign: 'center',
                                            fontSize: 24
                                        }}
                                    >
                                        {element.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Box> */}
                    </Box>
                ))
                }
            </Container >

        </Box >
    );
};

