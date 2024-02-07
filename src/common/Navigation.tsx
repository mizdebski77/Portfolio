import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import xd from '../icon.png';

export const Navigation = () => {
    return (
        <Box sx={{ width: '100%', }}>
            <Box sx={{ borderBottom: 1, py: 0.5, px: 4, borderColor: 'divider', backgroundColor: 'orange', display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img style={{ maxWidth: '40px', height: 'auto' }} src={xd} alt="Icon" />
                    <span>Marcin Izdebski</span>
                </Box>

                <Tabs aria-label="basic tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </Box>
        </Box>
    );
};
