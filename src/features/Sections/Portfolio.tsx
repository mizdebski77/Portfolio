import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { theme } from '../../core/theme';

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


            </Container >

        </Box >
    );
};

