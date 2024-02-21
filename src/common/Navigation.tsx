import { AppBar, Box, Toolbar, Typography, Stack, SvgIcon, useMediaQuery } from '@mui/material';
import { navLinks } from './Arrays/navLinks';
import { NavLink } from './Navigation/StyledNavbar';
import ComputerIcon from '@mui/icons-material/Computer';
import { theme } from '../core/theme';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Divide as Hamburger } from 'hamburger-react';
import { mobileNavAnimation } from './animation';

export const Navigation = () => {
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [phoneNavbar, setPhoneNavbar] = useState(false);

    const togglePhoneNavbar = () => {
        setPhoneNavbar(!phoneNavbar);
    };


    const onLinkClick = () => {
        togglePhoneNavbar();
        window.scrollTo(0, 0);
    };

    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ zIndex: 10 }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Stack direction='row' alignItems='center' spacing={2}>
                            <SvgIcon sx={{ width: 40, height: 40 }}>
                                <ComputerIcon />
                            </SvgIcon>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 28, letterSpacing: 0 }}>
                                Marcin <span style={{ color: theme.palette.primary.light }}>Izdebski</span>
                            </Typography>
                        </Stack>

                        {!isSmScreen && (
                            <Stack direction='row' justifyContent='space-evenly' spacing={6}>
                                {navLinks.map((link, index) => (
                                    <NavLink
                                        key={index}
                                        spy={true}
                                        to={link.to}
                                        smooth={true}
                                    >
                                        {link.text}
                                    </NavLink>
                                ))}

                            </Stack>
                        )}

                        <Box onClick={togglePhoneNavbar} sx={{ display: isSmScreen ? '' : 'none' }}>
                            <Hamburger color='#bcdb02' size={28} toggled={phoneNavbar} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            <AnimatePresence>
                <AppBar
                    component={motion.div}
                    initial="hidden"
                    animate={phoneNavbar ? "visible" : "hidden"}
                    exit="hidden"
                    variants={mobileNavAnimation}
                    sx={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        position: 'fixed',
                        width: '100%',
                        zIndex: 1,
                        display: isSmScreen ? '' : 'none'
                    }}>
                    <Stack spacing={2}>
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                spy={true}
                                to={link.to}
                                smooth={true}
                            >
                                {link.text}
                            </NavLink>
                        ))}

                    </Stack>
                </AppBar>

            </AnimatePresence>
        </>
    );
};

