import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import profile from '../../common/Images/profile.png';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Link from '@mui/material/Link';
import { socialLinks } from "../../common/Arrays/socialLinks";
import Button from '@mui/material/Button';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { containerVariants, variantButton, variantText, variantTitle } from "../../core/animation";
import { theme } from "../../core/theme";
import { Blob } from "../../core/Blob/Blob";

export const Home = () => {

    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <Container
            id='home'
            maxWidth='lg'
            sx={{
                minHeight: isSmScreen ? '70vh' : '100vh', pt: 10
            }}>
            <Box
                maxWidth='xl'
                sx={{
                    position: isMdScreen ? '' : 'fixed',
                    display: "flex",
                    justifyContent: isMdScreen ? 'center' : "space-between",
                    alignItems: "center",
                    minHeight: '100vh',
                    gap: isSmScreen ? 4 : 20,
                    flexDirection: isMdScreen ? 'column' : '',
                }}
            >

                <Box
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    sx={{ display: 'flex', alignItems: 'center', position: 'relative', }}>
                    <svg style={{ position: 'absolute', bottom: 0 }} />
                    <Blob />

                    <Box
                        sx={{
                            maxWidth: isMdScreen ? '240px' : '550px',
                            width: '100%',
                            position: "sticky",
                            overflow: "hidden",
                            zIndex: 10,
                            display: 'flex',
                            background: '#100c04',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: 2,
                            borderColor: 'primary.contrastText',
                            borderRadius: '50%'
                        }}
                    >
                        <img src={profile} alt="Profile" style={{ maxWidth: 600, width: '100%' }} />
                    </Box>
                </Box>

                <Grid2 display='grid' alignItems='center' sx={{ gap: 1, p: 2 }}  >
                    <Typography
                        component={motion.h2}
                        variants={variantTitle}
                        initial="hidden"
                        animate="visible"
                        variant="h2"
                        sx={{ color: 'white', fontSize: isSmScreen ? 24 : 40 }}
                    >
                        Hello I'm Marcin Izdebski
                    </Typography>

                    <TypeAnimation
                        sequence={[
                            'Frontend Developer',
                            1000,
                        ]}
                        wrapper="h1"
                        speed={4}
                        style={{ fontSize: isSmScreen ? 32 : 88, display: 'inline-block', color: '#bcdb02', margin: 0 }}
                        repeat={Infinity}
                    />

                    <Typography
                        component={motion.span}
                        variants={variantText}
                        initial="hidden"
                        animate="visible"
                        variant="h3"
                        sx={{
                            color: 'primary.light',
                            fontSize: isSmScreen ? 16 : 24,
                            maxWidth: 780,
                            width: '100%',
                            textAlign: "justify"
                        }}>
                        I'm an enthusiastic Frontend Developer with a
                        strong passion for new technologies and a deep
                        commitment to learning React. I am highly motivated
                        and thrive on being a fast learner. Currently, I
                        am actively seeking new job opportunities to further
                        enhance my skills and contribute to innovative projects.
                    </Typography>

                    <Box
                        sx={{
                            m: isSmScreen ? 1 : 4,
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            px: isSmScreen ? 0 : 4
                        }}>
                        {socialLinks.map((link, index) => (
                            <Link
                                component={motion.a}
                                initial={{ opacity: 0, x: '100vh' }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5, delay: index * 0.2, type: "spring", }}
                                href={link.href}
                                target="_blank"
                                key={index}
                            >
                                <link.icon
                                    sx={{
                                        fontSize: '4rem',
                                        border: 1,
                                        p: 1.5,
                                        borderRadius: '50%',
                                        maxWidth: isSmScreen ? 52 : 64,
                                        maxHeight: isSmScreen ? 52 : 64,
                                        background: theme.palette.primary.main,
                                        color: theme.palette.primary.contrastText,
                                        transition: "background 0.4s, color 0.4s",
                                        "&:hover": {
                                            color: theme.palette.primary.main,
                                            background: theme.palette.primary.contrastText,
                                        }
                                    }}
                                />
                            </Link>
                        ))}
                    </Box>

                    <Button
                        component={motion.button}
                        variants={variantButton}
                        initial="hidden"
                        animate="visible"
                        variant="contained"
                        sx={{
                            maxWidth: isSmScreen ? 140 : 200,
                            width: '100%',
                            m: 'auto',
                            py: 1.25,
                            fontWeight: 600,
                            fontSize: isSmScreen ? 12 : 16,
                            border: 1,
                            background: theme.palette.primary.contrastText,
                            color: theme.palette.primary.main,
                            transition: "background 0.4s, color 0.4s",
                            "&:hover": {
                                color: theme.palette.primary.contrastText,
                                background: theme.palette.primary.main,
                            }
                        }}>
                        Contact Me
                    </Button>
                </Grid2>
            </Box>
        </Container >
    );
};
