import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import React from 'react';
import xd from '../icon.png';

export const Navigation = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
};
