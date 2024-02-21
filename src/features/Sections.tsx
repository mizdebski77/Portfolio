import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import { About } from './Sections/About/AboutMe';
import { Skills } from './Sections/Skills';
import { Portfolio } from './Sections/Portfolio/Portfolio';
import bg from '../common/Images/bg.svg';
import { theme } from '../core/theme';

export const Sections = () => {
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                background: isSmScreen ? '' : 'linear-gradient(160deg, rgba(16,12,4,1) 57%, rgba(24,29,0,1) 100%)',
                position: 'sticky',
                overflow: 'hidden'
            }}
        >
            <img src={bg} style={{ position: 'absolute', height: '100%', top: 0 }} alt='background' />
            <About />
            <Skills />
            <Portfolio />

        </Box>
    );
};

