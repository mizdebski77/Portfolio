import { Grid, Stack, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { aboutInformations } from '../../../common/Arrays/aboutSections';
import { Tile } from './styledAbout';
import { theme } from '../../../core/theme';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

export const AboutTiles = () => {
    return (

        <Stack
            margin='auto'
            maxWidth={1600}
            justifyContent='space-evenly'
            padding='40px'
            direction='row'
            spacing={2}
        >

            {aboutInformations.map((section) => (
                <Tile>
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
                        <Grid sx={{ borderBottom: 1, borderColor: theme.palette.primary.light, p: 2 }}>
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

            ))
            }

        </Stack >

    );
};

