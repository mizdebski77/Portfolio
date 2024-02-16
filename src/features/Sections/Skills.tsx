import { Box, Container, Paper, Typography, } from '@mui/material';
import { theme } from '../../core/theme';
import { skills, } from '../../common/Arrays/skillset';
import SvgIcon from '@mui/material/SvgIcon';
import { motion } from 'framer-motion';
import useInViewAnimation from '../../core/useInView';
import { variantOpacity } from '../../common/animation';

export const Skills = () => {

    const { animation, ref } = useInViewAnimation(0.2);


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
            }}>

            <Typography
                variant='h1'
                sx={{
                    fontSize: 120,
                    mt: 12,
                    textAlign: 'center',
                    color: theme.palette.primary.contrastText,
                    letterSpacing: 20,
                }}>
                Tech Stack
            </Typography>

            <Container
                maxWidth='xl'
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 6,
                    px: 4,
                    py: 6
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
                            width: '180px',
                            height: '180px',
                            py: 4,
                            px: 2,
                            border: 1,
                            borderRadius: 2,
                            borderColor: 'white',
                            transition: "transform 0.3s ease-in-out",
                            boxShadow: '0 0 10px white',
                            "&:hover": {
                                transform: 'rotate(30deg)',
                                boxShadow: `0 0 10px ${theme.palette.primary.contrastText}`,
                                borderColor: theme.palette.primary.contrastText,
                            }
                        }} >
                        <SvgIcon
                            sx={{
                                color: theme.palette.primary.contrastText,
                                width: '64px',
                                height: '64px',
                                margin: 'auto'
                            }}
                        >
                            {skill.icon}
                        </SvgIcon>
                        <Typography
                            component='span'
                            sx={{
                                color: theme.palette.primary.light,
                                textAlign: 'center',
                                fontSize: 20
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

