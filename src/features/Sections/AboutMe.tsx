import { Box, Container, Typography } from '@mui/material';
import { theme } from '../../core/theme';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import xd from '../../common/Images/profile.png'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export const About = () => {

    return (
        <Box
            id='about'
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
                About Me
            </Typography>

            <Container
                maxWidth='lg'
                sx={{
                    p: 4,
                }}
            >

                <Typography
                    variant='h2'
                    color={theme.palette.primary.light}
                    textAlign={'center'}
                    fontSize={40}
                >
                    Education
                </Typography>
                <Grid2 container spacing={2}>
                    <img src='https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/331687760_1616553892181493_884769890352635826_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=783fdb&_nc_ohc=FZdcEjQLEqcAX_W7Btx&_nc_ht=scontent-waw1-1.xx&oh=00_AfBK6dv4AeaCQ6Z4VOeKnrqOp_qZ1xV13b-inPhuvrwzHQ&oe=65D023D4'
                        style={{ width: '400px' }} />
                    <Box
                    >
                        <CalendarMonthIcon />
                        <Typography>Dlaczego </Typography>
                    </Box>
                </Grid2>
            </Container >

        </Box >
    );
};

