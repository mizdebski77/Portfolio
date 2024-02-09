import { Box, Container, Typography } from "@mui/material";
import profile from '../common/Images/profile.png';
import { Blob } from "./Blob";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Link from '@mui/material/Link';
import { socialLinks } from "../common/socialLinks";
import Button from '@mui/material/Button';
import { theme } from "../core/theme";

export const Home = () => {

    return (
        <Container maxWidth='xl' sx={{ height: '100vh', display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', }}>
                <svg style={{ position: 'absolute', bottom: 0 }} />

                <Box
                    sx={{
                        maxWidth: '550px',
                        width: '100%',
                        position: "sticky",
                        overflow: "hidden",
                        zIndex: 10,
                        display: 'flex',
                        background: '#100c04',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '50px -50px 60px #3c4601, -80px 60px 60px #191e00',
                        border: 2,
                        borderColor: 'primary.contrastText',
                        borderRadius: '50%'
                    }}
                >
                    <img src={profile} alt="Profile" />
                </Box>
                <Blob />
            </Box>


            <Grid2 display='grid' alignItems='center' sx={{ gap: 1 }}  >
                <Typography variant="h2" sx={{ color: 'white', fontSize: 40 }}>Hello I'm Marcin Izdebski </Typography>
                <Typography variant="h1" sx={{ color: 'primary.contrastText', fontSize: 88 }}>Frontend Developer </Typography>
                <Typography variant="h3" component='span' sx={{ color: 'primary.light', fontSize: 24, maxWidth: 720, textAlign: "justify" }}>
                    I'm an enthusiastic Frontend Developer with a strong passion for new technologies and a deep commitment to learning React. I am highly motivated and thrive on being a fast learner. Currently, I am actively seeking new job opportunities to further enhance my skills and contribute to innovative projects.
                </Typography>

                <Box sx={{ mt: 4, mb: 4, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', px: 4 }}>

                    {socialLinks.map((link, index) => (
                        <Link
                            href={link.href}
                            target="_blank"
                            sx={{ p: 0, }}
                            key={index}
                        >
                            <link.icon
                                sx={{
                                    fontSize: '4rem',
                                    border: 1, p: 1.5,
                                    borderRadius: '50%',
                                    background: '#bcdb02',
                                    transition: "background 0.4s, color 0.4s",
                                    "&:hover": {
                                        background: "transparent",
                                        color: "#bcdb02"
                                    }
                                }}
                            />
                        </Link>
                    ))}
                </Box>

                <Button variant="contained"
                    sx={{
                        background: 'transparent',
                        color: theme.palette.secondary.main,
                        maxWidth: 200,
                        width: '100%',
                        m: 'auto',
                        py: 1.25,
                        fontWeight: 600,
                        fontSize: 16,
                        border: 1,
                        transition: "background 0.4s, color 0.4s",
                        "&:hover": {
                            color: theme.palette.secondary.contrastText,
                            background: theme.palette.secondary.main,
                            border: 1,
                            borderColor: '#bcdb02'
                        }
                    }}
                >
                    Contact Me
                </Button>

            </Grid2>


        </Container >
    );
};
