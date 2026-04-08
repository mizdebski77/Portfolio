import styled from 'styled-components'
import { theme } from '../../core/theme';
import { SocialIcon } from 'react-social-icons';


export const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    max-width: 1920px;
    margin: 0 auto;
    grid-template-columns: 1.1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 40px 120px; 
    gap: 40px;
    overflow: hidden;
    background: radial-gradient(circle, rgba(21,69,70,0.36738445378151263) 7%, rgba(38,89,195,0) 87%);
    position: relative;
    top: 0;

    @media (max-width: ${theme.breakPoints.tablet}px){
        grid-template-columns: 1fr;
        padding: 40px;
    };

    @media (max-width: ${theme.breakPoints.mobileMd}px){
        padding: 80px 20px;
    };
`;

export const TextSection = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media (max-width: ${theme.breakPoints.mobileMd}px){
        gap: 20px;
    };
`;

export const Title = styled.h1`
    font-size: 96px;
    font-weight: normal;
    color: ${theme.palette.fontColor};
    font-weight: 100;
    text-align: center;
    width: 600px;
    margin: 0;

    @media (max-width: ${theme.breakPoints.mobileMd}px){
        font-size: 32px;
        width: auto;
    };
`;

export const Role = styled.h2`
    font-size: 32px;
    font-weight: 300;
    background: linear-gradient(to right, #14adff 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;

    @media (max-width: ${theme.breakPoints.mobileMd}px){
        font-size: 20px;
        text-align: center;
    };
`;

export const Text = styled.p`
    font-size: 20px;
    color: ${theme.palette.fontColor};
    font-weight: 200;
    text-align: justify;
    margin: 0;
    line-height: 30px;

    @media (max-width: ${theme.breakPoints.mobileMd}px){
        font-size: 16px;
    };
`;

export const ContactIconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    max-width: 400px;
    width: 100%;
    margin: 0;

    @media (max-width: ${theme.breakPoints.mobileMd}px){
        gap: 8px;
        flex-wrap: wrap;
    };
`;

export const SocialLink = styled(SocialIcon)`
    transition: 0.3s;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const ImageWrapper = styled.div`
    border: 1px solid ${theme.palette.fontColor};
    background: ${theme.palette.secondColor2};
    display: flex;
    justify-content: center;
    align-items: end;
    border-radius: 100%;
    overflow: hidden;
    max-width: 432px;
    padding: 40px;
    width: 100%;
    aspect-ratio: 1;
    position: relative;
    margin: auto;
    box-shadow: 10px -60px 120px  5px ${theme.palette.secondColor6};
    z-index: 7;

    @media (max-width: ${theme.breakPoints.mobileMd}px){
        max-width: 240px;
        box-shadow: 10px -20px 120px  10px #11373d;
    };
`;

export const Image = styled.img`
    margin: 0 auto;
    max-width: 550px;
    width: 100%;
    bottom: 0px;   
    top: 0;
    position: absolute;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 24px;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        flex-direction: column;
    }
`;


