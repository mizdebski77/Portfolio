import { Box, Container, Typography, } from '@mui/material';
import React from 'react';
import { theme } from '../../core/theme';
import { technologies } from '../../common/skillset';
import SvgIcon from '@mui/material/SvgIcon';

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

            <Container maxWidth='xl'
                sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6, p: 4 }}
            >
                {
                    technologies.map((technology, index) => (
                        <Box
                            key={index}
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
                            }}
                        >
                            <SvgIcon
                                sx={{ color: theme.palette.primary.contrastText, width: '80px', height: '80px', margin: 'auto' }}
                            >
                                {technology.icon}
                            </SvgIcon>
                            <Typography
                                component='span'
                                sx={{
                                    color: theme.palette.primary.light,
                                    textAlign: 'center',
                                    fontSize: 24
                                }}
                            >
                                {technology.text}
                            </Typography>
                        </Box>
                    ))
                }

            </Container>
        </Box >
    );
};

