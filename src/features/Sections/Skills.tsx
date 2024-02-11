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
                sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2, }}
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
                                border: 1,
                                borderColor: theme.palette.primary.contrastText
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
                                    textAlign: 'center'

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

