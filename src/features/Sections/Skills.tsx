import { Box, Container, Typography, } from '@mui/material';
import React from 'react';
import { theme } from '../../core/theme';
import { FaHtml5 } from 'react-icons/fa';

export const Skills = () => {
    return (
        <Box
            id='skills'
            sx={{
                height: '100vh',
                top: 0,
                position: 'sticky',
                width: '100%',
                background: 'linear-gradient(160deg, rgba(16,12,4,1) 57%, rgba(24,29,0,1) 100%)',
                pt: 10
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

            <Container maxWidth='xl'>
                <Box>
                    <FaHtml5
                        style={{ fill: 'red' }}
                    />
                </Box>
            </Container>
        </Box>
    );
};

