import LaptopIcon from '@mui/icons-material/Laptop';
import { AppBar, Box, IconButton, Tabs, Toolbar, Typography, Stack, SvgIcon } from '@mui/material';
import { navLinks } from './Arrays/navLinks';
import { NavLink } from './Navigation/StyledNavbar';
import ComputerIcon from '@mui/icons-material/Computer';

export const Navigation = () => {
    console.log();


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ zIndex: 10 }}>
                <Toolbar sx={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr' }}>
                    <Stack direction='row' alignItems='center' spacing={2}>
                        <SvgIcon sx={{ width: 40, height: 40 }}>
                            <ComputerIcon />
                        </SvgIcon>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 28, letterSpacing: 0 }}>
                            Marcin Izdebski
                        </Typography>
                    </Stack>

                    <Stack direction='row' justifyContent='space-evenly'>
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
                </Toolbar>
            </AppBar>
        </Box>
    );
};

