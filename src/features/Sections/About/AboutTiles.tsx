import { Grid, Stack, Typography, Box, useMediaQuery } from '@mui/material';
import { Languages, aboutInformations } from '../../../common/Arrays/aboutSections';
import { Tile } from './styledAbout';
import { theme } from '../../../core/theme';
import Slider from 'react-infinite-logo-slider'
import { motion } from 'framer-motion';
import { variantOpacity, variantText } from '../../../core/animation';
import useInViewAnimation from '../../../core/useInView';

export const AboutTiles = () => {

    const { animation, ref } = useInViewAnimation(0.2);

    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>
            <Stack
                margin='auto'
                maxWidth={1600}
                justifyContent='space-evenly'
                padding={isSmScreen ? '20px' : '40px'}
                direction={isMdScreen ? 'column' : 'row'}
                spacing={2}
                sx={{
                    py: isSmScreen ? 4 : 8,
                    pb: 1
                }}
            >
                {aboutInformations.map((section) => (
                    <Tile
                        ref={ref}
                        key={section.id}
                        as={motion.div}
                        variants={variantOpacity}
                        initial="hidden"
                        animate={animation}
                        transition={{
                            duration: 0.8, delay: section.id * 0.2, ease: 'linear'
                        }}
                    >
                        <Typography
                            variant='h2'
                            sx={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: isSmScreen ? 28 : 36,
                            }}>
                            <section.icon />  {section.title}
                        </Typography>
                        {section.informations.map((information) => (
                            <Grid key={information.title} sx={{ borderBottom: 1, borderColor: theme.palette.primary.light, p: isSmScreen ? 1 : 2 }}>
                                <Typography sx={{ color: theme.palette.primary.contrastText, fontSize: isSmScreen ? 16 : 24 }}>
                                    {information.title}
                                    <Typography component='span' sx={{ color: theme.palette.primary.light, fontSize: isSmScreen ? 14 : 24, marginLeft: 1 }}>
                                        {information.description}
                                    </Typography>
                                </Typography>

                                <Typography sx={{ color: theme.palette.primary.light, fontSize: isSmScreen ? 12 : 20 }}>
                                    {information.years}
                                </Typography>
                            </Grid>
                        ))}
                    </Tile>
                ))}
            </Stack >
            <Box
                sx={{ maxWidth: 1600, margin: 'auto', p: 4 }}
                component={motion.div}
                ref={ref}
                variants={variantText}
                initial="hidden"
                animate={animation}
            >
                <Slider
                    width={isSmScreen ? "200px" : "400px"}
                    duration={20}
                    pauseOnHover={true}
                    blurBorders={false}
                >
                    {Languages.map((language) => (
                        <Stack spacing={2} direction='row' alignItems='center' key={language.name}>
                            <img style={{ width: isSmScreen ? 54 : 80 }} src={language.icon} alt="any" />
                            <Typography component='span' sx={{ color: 'white', fontSize: isSmScreen ? 16 : 24, fontWeight: 'bold' }}>{language.name} / {language.level} </Typography >
                        </Stack>
                    ))}
                </Slider>
            </Box>
        </Box >
    );
};

