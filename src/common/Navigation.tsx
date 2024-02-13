import LaptopIcon from '@mui/icons-material/Laptop';
import { AppBar, Box, IconButton, Tabs, Toolbar, Typography } from '@mui/material';
import { navLinks } from './Arrays/navLinks';
import { Link } from 'react-scroll';

export const Navigation = () => {
    return (
        <AppBar
            sx={{
                position: 'sticky',
                px: 4,
                py: 2,
                zIndex: 10
            }}>
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    <IconButton
                        sx={{
                            color: 'primary.contrastText',
                            p: 0,
                        }} >
                        <LaptopIcon
                            sx={{
                                fontSize: '3.5rem',
                                mr: 2
                            }}
                        />
                    </IconButton>
                    <Typography
                        sx={{ fontSize: 40 }}
                        variant='h5'
                        component='span' >
                        Marcin
                        <Typography
                            sx={{ color: 'primary.light', fontSize: 40 }}
                            variant='h5'
                            component='span' >
                            Izdebski
                        </Typography>
                    </Typography>
                </Box>

                <div>
                    <Tabs
                        sx={{ color: 'primary.contrastText', }}
                        aria-label="Tabs where selection follows focus"
                        selectionFollowsFocus
                    >
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                spy={true}
                                to={link.to}
                                smooth={true}
                                style={{ color: 'red' }}
                            >{link.text}</Link>
                        ))}
                    </Tabs>
                </div>

            </Toolbar>
        </AppBar >
    );
};

