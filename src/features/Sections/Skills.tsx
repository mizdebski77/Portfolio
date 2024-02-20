import { Box, Container, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { theme } from '../../core/theme';
import { skills, } from '../../common/Arrays/skillset';
import SvgIcon from '@mui/material/SvgIcon';
import { motion } from 'framer-motion';
import useInViewAnimation from '../../core/useInView';
import { variantOpacity } from '../../common/animation';
import lines from '../../common/Images/lines.svg';

export const Skills = () => {

    const { animation, ref } = useInViewAnimation(0.2);

    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            id='skills'
            sx={{
                minHeight: '100vh',
                top: 0,
                position: 'sticky',
                width: '100%',
                background: 'linear-gradient(160deg, rgba(16,12,4,1) 57%, rgba(24,29,0,1) 100%)',
                pt: 4,
                overflow: 'hidden'
            }}>

            <Typography
                variant='h1'
                sx={{
                    fontSize: isMdScreen ? 40 : 110,
                    mt: 12,
                    textAlign: 'center',
                    color: theme.palette.primary.contrastText,
                    letterSpacing: 20,
                }}>
                Tech Stack
            </Typography>
            <img src={lines} style={{ position: 'absolute', top: 0, height: isSmScreen ? '100vh' : '', }} alt='background' />

            <Container
                maxWidth='xl'
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: isSmScreen ? 'space-around' : 'center',
                    position: 'relative',
                    gap: isSmScreen ? 3 : 6,
                    px: isSmScreen ? 2 : 4,
                    py: isSmScreen ? 2 : 6
                }}>
                {skills.map((skill, skillIndex) => (
                    <Paper
                        ref={ref}
                        key={skillIndex}
                        component={motion.div}
                        variants={variantOpacity}
                        initial="hidden"
                        animate={animation}
                        transition={{
                            duration: 0.8, delay: skillIndex * 0.2, ease: 'linear'
                        }}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            background: 'rgba(255, 255, 255, 0.1 ) ',
                            width: isSmScreen ? '80px' : '140px',
                            height: isSmScreen ? '80px' : '140px',
                            py: 2,
                            px: 1,
                            border: 1,
                            borderRadius: 4,
                            borderColor: 'white',
                            transition: "transform 0.3s ease-in-out",
                            boxShadow: isSmScreen ? '0 0 7px white' : '0 0 10px white',
                            "&:hover": {
                                transform: 'rotate(30deg)',
                                boxShadow: `0 0 10px ${theme.palette.primary.contrastText}`,
                                borderColor: theme.palette.primary.contrastText,
                            }
                        }} >
                        <SvgIcon
                            sx={{
                                color: theme.palette.primary.contrastText,
                                width: isSmScreen ? '28px' : '52px',
                                height: isSmScreen ? '28px' : '52px',
                                margin: 'auto'
                            }}
                        >
                            {skill.icon}
                        </SvgIcon>
                        <Typography
                            component='span'
                            sx={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: isSmScreen ? 12 : 16
                            }}
                        >
                            {skill.text}
                        </Typography>
                    </Paper>
                ))
                }
            </Container >
        </Box >
    );
};

