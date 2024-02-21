import { Box } from '@mui/material';
import React from 'react';
import { About } from './About/AboutMe';
import { Skills } from './Skills';
import { Portfolio } from './Portfolio/Portfolio';
import bg from '../../common/Images/bg.svg';

export const Sections = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(160deg, rgba(16,12,4,1) 57%, rgba(24,29,0,1) 100%)',
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

