import { Stack, Typography } from '@mui/material';
import React from 'react';
import { aboutInformations } from '../../../common/Arrays/aboutSections';
import { Tile } from './styledAbout';

export const AboutTiles = () => {
    return (

        < Stack
            margin='auto'
            direction='row'
            spacing={4}
            maxWidth={1600}
            justifyContent='space-evenly'
            padding='40px'
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
                    {section.informations.map((xd) => (
                        <div>
                            <Typography>
                                {xd.title}
                            </Typography>

                            {xd.years !== '' ? (
                                <Typography>
                                    {xd.years}
                                </Typography>
                            ) : null}
                        </div>
                    ))}

                </Tile>
            ))
            }
        </Stack >

    );
};

