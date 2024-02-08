import LaptopIcon from '@mui/icons-material/Laptop';
import { AppBar, Box, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const Navigation = () => {
    return (
        <AppBar position='static' sx={{ px: 20, }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ color: 'primary.contrastText', p: 0, }} >
                        <LaptopIcon sx={{ fontSize: '2.5rem', mr: 2 }} />
                    </IconButton>
                    <Typography sx={{ fontSize: 28 }} variant='h5' component='span' >
                        Marcin
                        <Typography sx={{ color: 'primary.light', fontSize: 28 }} variant='h5' component='span' > Izdebski</Typography>
                    </Typography>
                </Box>

                <div>
                    <Tabs
                        sx={{ color: 'primary.contrastText' }}
                        aria-label="Tabs where selection follows focus"
                        selectionFollowsFocus
                    >
                        <Tab label="Home" sx={{ color: 'primary.contrastText' }} />
                        <Tab label="Skills" sx={{ color: 'primary.contrastText' }} />
                        <Tab label="Portfolio" sx={{ color: 'primary.contrastText' }} />
                        <Tab label="Contact" sx={{ color: 'primary.contrastText' }} />
                    </Tabs>
                </div>

            </Toolbar>
        </AppBar >
    );
};

