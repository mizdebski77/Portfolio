import styled, { css } from "styled-components";
import { theme } from "../../core/theme";

export const Button = styled.button`
    position: relative;
    gap: 12px;
    height: 3rem;
    width: auto;
    padding: 0 32px;
    overflow: hidden;
    border: 1px solid ${theme.palette.secondColor};
    color: ${theme.palette.secondColor};
    background-color: transparent;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: color 0.3s, box-shadow 0.3s;
    border-radius: 12px;
    white-space: nowrap;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -50%;
        width: 200%;
        height: 0;
        background: ${theme.palette.secondColor};
        transform: translateY(-50%) rotate(45deg);
        transition: height 0.3s ease, transform 0.3s ease;
        z-index: 1;
    }

    &:hover {
        cursor: pointer;
        color: white;
        box-shadow: 0 4px 6px rgba(59, 130, 246, 0.5), 0 1px 3px rgba(59, 130, 246, 0.3); 
    }

    &:hover::before {
        height: 400%;
        transform: translateY(-50%) rotate(45deg);
        color: white;
    }
`;

export const ButtonContent = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    position: relative;

    z-index: 2;
`;

export const Title = styled.h3`
    font-size: 64px;
    font-weight: inherit;
    color: ${theme.palette.fontColor};
    text-align: center;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        font-size: 40px;
    }
`;

export const Border = styled.div`
    border: 1px solid ${theme.palette.secondColor2};
    box-shadow: 0 0 20px 0 ${theme.palette.secondColor};
    margin: 80px;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        margin: 40px;
    }
`;

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const SectionTitle = styled.h4<{ active?: boolean }>`
    background-image: linear-gradient(
        to right,
        ${theme.palette.secondColor},
        ${theme.palette.secondColor} 50%,
        ${theme.palette.fontColor} 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    font-size: 24px;
    font-weight: 200;
    padding: 8px 12px;

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

    &:hover {
        background-position: 0;
    }

    &:hover:before {
        width: 100%;
    }

    ${({ active }) => active && css`
        background-position: 0;
        &:before {
            width: 100%;
        }

        &:hover:before {
            width: 100%;
        }
    `}

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        font-size: 18px;
        margin:12px 0;
    }
`;