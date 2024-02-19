import { Grid, Stack, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { aboutInformations } from '../../../common/Arrays/aboutSections';
import { Tile } from './styledAbout';
import { theme } from '../../../core/theme';

export const AboutTiles = () => {
    return (

        <Stack
            margin='auto'
            maxWidth={1200}
            justifyContent='space-evenly'
            padding='40px'
            direction='row'
        >

            {aboutInformations.map((section) => (
                <Tile>
                    <Typography
                        variant='h2'
                        sx={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 32,
                        }}>
                        {section.title}
                    </Typography>
                    {section.informations.map((information) => (
                        <Stack direction='row' spacing={2} alignItems='center'>
                            <img src={information.icon} style={{ width: 40, height: 40 }} />
                            <Grid>
                                <Typography sx={{ color: theme.palette.primary.contrastText, fontSize: 24 }}>
                                    {information.title} /
                                    <Typography component='span' sx={{ color: theme.palette.primary.light, fontSize: 20, marginLeft: 1 }}>
                                        {information.description}
                                    </Typography>
                                </Typography>

                                {information.years !== '' ? (
                                    <Typography sx={{ color: theme.palette.primary.light, fontSize: 20 }}>
                                        {information.years}
                                    </Typography>
                                ) : null}
                            </Grid>
                        </Stack>
                    ))}
                </Tile>

            ))
            }

        </Stack >

    );
};

