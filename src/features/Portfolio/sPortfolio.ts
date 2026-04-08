import styled from 'styled-components'
import { theme } from '../../core/theme';

export const Wrapper = styled.section`
    min-height: 100vh;
    overflow-x: hidden;
`;

export const Section = styled.div`
    margin: 0 auto;
    padding: 40px;
    display: grid;
    justify-content: center;
    gap: 80px;
    max-width: 1500px;
    padding: 12px;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        gap: 40px;
    }
`;

export const ProjectCard = styled.div`
    display:  grid;
    grid-template-columns: 1fr 1.5fr;
    border-radius: 12px;
    align-items: center;
    color: ${theme.palette.fontColor};
    gap: 40px;
    max-width: 1000px;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        grid-template-columns: 1fr;
        gap: 20px;
    };
`;

export const ImgWrapper = styled.div`
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 40px 0px ${theme.palette.secondColor};
    cursor: pointer;
    border-radius: 12px ;
    aspect-ratio: 16/9;
    max-width: 520px;
    margin: 0 auto;
    &:hover img {
        transform: scale(1.1);
    };

    &:hover span {
        opacity: 1;
    };

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        min-width: 100px;
    }
`;

export const ImgText = styled.a`
    transition: 0.3s ease;
    text-decoration: none;
    color: ${theme.palette.fontColor};
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    z-index: 1;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    backdrop-filter: blur(2px);

    &:hover {
        opacity: 1;
    }
`;

export const ProjectImage = styled.img`
    opacity: 1;
    display: block;
    max-width: 540px;
    width: 100%;
    transition: 0.3s ease;
    object-fit: cover;
    height: 100%;
    
`;

export const TextWrapper = styled.div`
    display: grid;
    justify-items: start;
    width: 100%;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const ProjectLink = styled.a`
    display: flex;
    gap:12px;
    color: white;
    align-items: center;
    background-image: linear-gradient(
        to right,
        ${theme.palette.secondColor},
        ${theme.palette.secondColor} 50%,
        ${theme.palette.fontColor} 50%
    );
    text-decoration: none;
    background-image: linear-gradient(
        to right,
        ${theme.palette.secondColor},
        ${theme.palette.secondColor} 50%,
        ${theme.palette.fontColor} 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    font-size: 20px;


    &:before {
        content: '';
        background: ${theme.palette.secondColor};
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        transition: all 0.3s ease-in-out;
    }

    
    &:before {
        content: '';
        background: ${theme.palette.secondColor};
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        transition: all 0.3s ease-in-out;
        color: ${theme.palette.secondColor};
    }

    &:hover {
        background-position: 0;
        color: ${theme.palette.secondColor};
    }

    &:hover:before {
        width: 100%;
    }
`;

export const ProjectArticle = styled.p`
    font-size: 16px;
    line-height: 20px;
    font-weight: 200;
    color: ${theme.palette.fontColor};
    text-align: justify;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        font-size: 14px;
    }
`;

export const StackWrapper = styled.div`
    display: flex; 
    justify-content: start;
    flex-wrap: wrap;
    gap: 28px;
    row-gap: 20px;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        gap: 16px;
    }
`;

export const Stack = styled.span`
    font-size: 16px;
    color: ${theme.palette.fontColor};
    background: ${theme.palette.thirdColor};
    padding: 8px 12px;
    border-radius: 12px;
    box-shadow: 0 0 20px ${theme.palette.thirdColor};

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        font-size: 14px;
    }
`;
