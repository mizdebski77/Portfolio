import { Box, Container } from "@mui/material";
import profile from '../common/Images/profile.png';
import gif from '../common/Images/xd.svg';

export const Home = () => {
    return (
        <Container sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
            <svg style={{ position: 'absolute', bottom: 0 }} />
            <Box sx={{
                maxWidth: '550px',
                width: '100%',
                position: "sticky",
                overflow: "hidden",
                display: 'flex',
                background: '#100c04',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '50px -50px 60px #3c4601, -80px 60px 60px #191e00',
                border: 2,
                borderColor: 'primary.contrastText',
                borderRadius: '50%'
            }}>
                <img src={profile} />
            </Box>

        </Container>
    );
};

