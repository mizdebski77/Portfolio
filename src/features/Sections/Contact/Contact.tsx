import React from 'react';
import { Box,  Typography, Stack } from '@mui/material';
import { theme } from '../../../core/theme';

export const Contact = () => {
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
                Contact
            </Typography>

            <Stack
                direction='row'
                spacing={4}
                maxWidth={1500}
                margin='auto'
            >
                <Box
                    sx={{ background: 'red', width: '100%', }}
                >
                    xd
                </Box>

                <Box sx={{ background: 'white', width: '100%' }}>
                    xd
                </Box>

            </Stack >

        </Box>
    );
};

