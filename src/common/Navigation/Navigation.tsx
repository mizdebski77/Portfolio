import { AppBar, Box, Toolbar, Typography, Stack,  useMediaQuery } from '@mui/material';
import { navLinks } from '../Arrays/navLinks';
import { NavLink } from './StyledNavbar';
import { theme } from '../../core/theme';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Divide as Hamburger } from 'hamburger-react';
import { mobileNavAnimation } from '../../core/animation';
import { Link } from 'react-scroll';

export const Navigation = () => {
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [phoneNavbar, setPhoneNavbar] = useState(false);

    const togglePhoneNavbar = () => {
        setPhoneNavbar(!phoneNavbar);
    };

    const onLinkClick = () => {
        togglePhoneNavbar();
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ zIndex: 10, py: 1, }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', }}>
                        <Link to='home' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }} >
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: isSmScreen ? 20 : 28, letterSpacing: isMdScreen ? 1 : 6 }}>
                                Marcin <span style={{ color: theme.palette.primary.light }}>Izdebski</span>
                            </Typography>
                        </Link>

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
                        background: 'rgba(16, 12, 4, 0.9)',
                        position: 'fixed',
                        width: '100%',
                        zIndex: 9,
                        display: isSmScreen ? '' : 'none',
                        pt: '72px'
                    }}>
                    <Stack spacing={2} justifyContent='center' alignItems='center'>
                        {navLinks.map((link, index) => (
                            <NavLink
                                onClick={onLinkClick}
                                key={index}
                                spy={true}
                                offset={-24}
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

