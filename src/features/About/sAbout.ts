import styled from 'styled-components'
import { theme } from '../../core/theme';

export const Wrapper = styled.div`
    min-height: 100vh;
    padding: 40px;
    overflow: hidden;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        padding: 12px;
    }
`;

export const Container = styled.article`
    display: grid;
    max-width: 1500px;
    margin: 0 auto;
    grid-template-columns: 1fr 1.5fr;
    align-items: center;
    gap: 20px;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        grid-template-columns: 1fr;
    }
`;

export const Image = styled.img`
    max-width: 500px;
    width: 100%;
`;

export const ImageWrapper = styled.div`
    border: 4px solid ${theme.palette.secondColor6};
    box-shadow: 0 0 400px 0 ${theme.palette.secondColor6};
    max-width: 500px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    aspect-ratio: 1;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        max-width: 320px;
    }
`;

export const Article = styled.article`
    max-width: 800px;
`;

export const ArticleTitle = styled.span`
    color: ${theme.palette.fontColor};
    font-size: 24px;
    font-weight: 300;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        font-size: 20px;
    }
`;

export const ArticleText = styled.p`
    font-size: 18px;
    color: ${theme.palette.fontColor};
    font-weight: 200;
    text-align: left;
    line-height: 24px;
    opacity: 0.7;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        font-size: 14px;
    }
`;

export const LangWrapper = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 24px;
    justify-content: center;
    align-items: center;
`;

export const LangTitle = styled.p`
    color: ${theme.palette.fontColor};
    font-size: 24px;
    font-weight: 300;
    margin:  40px 0;
    text-align: center;
`;

export const LangImg = styled.img`
    max-width: 80px;
    margin: auto;
`;

export const Language = styled.div`
    display: grid;
    margin: auto;
`;

export const LangSpan = styled.span`
    font-size: 20px;
    font-weight: 300;
    color: ${theme.palette.fontColor};

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        font-size: 16px;
    }
`;
