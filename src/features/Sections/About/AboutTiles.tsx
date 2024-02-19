import { Grid, Stack, SvgIcon, Typography, Box } from '@mui/material';
import { Languages, aboutInformations } from '../../../common/Arrays/aboutSections';
import { Tile } from './styledAbout';
import { theme } from '../../../core/theme';
import Slider from 'react-infinite-logo-slider'

export const AboutTiles = () => {
    return (
        <Box>

            <Stack
                margin='auto'
                maxWidth={1600}
                justifyContent='space-evenly'
                padding='40px'
                direction='row'
                spacing={2}
            >

                {aboutInformations.map((section) => (
                    <Tile key={section.id}>
                        <Typography
                            variant='h2'
                            sx={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 36,
                            }}>
                            <section.icon />  {section.title}
                        </Typography>
                        {section.informations.map((information) => (
                            <Grid key={information.title} sx={{ borderBottom: 1, borderColor: theme.palette.primary.light, p: 2 }}>
                                <Typography sx={{ color: theme.palette.primary.contrastText, fontSize: 24 }}>
                                    {information.title}
                                    <Typography component='span' sx={{ color: theme.palette.primary.light, fontSize: 20, marginLeft: 1 }}>
                                        {information.description}
                                    </Typography>
                                </Typography>

                                <Typography sx={{ color: theme.palette.primary.light, fontSize: 20 }}>
                                    {information.years}
                                </Typography>
                            </Grid>
                        ))}
                    </Tile>
                ))}
            </Stack >
            <Slider
                width="250px"
                duration={40}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                {Languages.map((language) => (
                    <Slider.Slide>
                        <span>{language.name} / {language.level} </span>
                        <img src={language.icon} alt="any" />
                    </Slider.Slide>
                ))}
            </Slider>
        </Box>
    );
};

