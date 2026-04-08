import styled from 'styled-components'
import { theme } from '../../core/theme';

export const Wrapper = styled.section`
    min-height: 100vh;
    overflow: hidden;
`;

export const Article = styled.p`
    text-align: center;
    color: ${theme.palette.fontColor};
    text-align: center;
    max-width: 800px;
    opacity: 0.6;
    font-weight: 300;
    margin: 0 auto;
    font-size: 18px;
    line-height: 28px;
`;

export const TechContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        padding: 40px 12px;
    }
`;

export const TechWrapper = styled.div`
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 40px;
`;

export const TechTitle = styled.p`
    font-size: 28px;
    color: ${theme.palette.fontColor};
    margin: 40px 0; 
    text-align: center;
    font-weight: 300;
`;

export const TechIcon = styled.div`
    border: 4px solid ${theme.palette.secondColor6};
    border-radius: 12px;
    font-size: 72px;
    padding: 20px;
    color: rgb(96 165 250);
    display: flex;
    align-items: center;
    justify-content: center;
    display: grid;
    text-align: center;
    gap: 12px;
    max-width: 180px;
    width: 100%;
    aspect-ratio: 1;
    box-shadow: 0 0 20px 0 ${theme.palette.secondColor};
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: rotate(20deg) ;
    };

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        padding: 12px;
        max-width: 120px;
        font-size: 52px;
    }
`;