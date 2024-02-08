import { Container } from "@mui/material";
import profile from '../common/Images/profile.png';

export const Home = () => {
    return (
        <Container sx={{  height: '100vh', display: 'flex', alignItems: 'center' }}>
            <img src={profile} />

        </Container>
    );
};

