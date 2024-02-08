import JavascriptIcon from '@mui/icons-material/Javascript';
import { AppBar, Box, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const Navigation = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton sx={{ color: 'primary.contrastText', p: 0 }} >
                    <JavascriptIcon sx={{ fontSize: '4rem' }} />
                </IconButton>
                <Typography sx={{ fontSize: 28 }} variant='h5' component='span' >
                    Marcin
                    <Typography sx={{ color: 'primary.light', fontSize: 28 }} variant='h5' component='span' > Izdebski</Typography>
                </Typography>
            </Toolbar>
        </AppBar >
    );
};

