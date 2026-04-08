'use client'
import { css, styled } from "styled-components";
import { theme } from "../../core/theme";
import { Link } from 'react-scroll';

export const Wrapper = styled.nav`
    padding: 20px 52px;
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.3s ease;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        padding: 20px;
    };

`;


export const Container = styled.div`
    display: flex;
    gap: 40px;

    @media (max-width: ${theme.breakPoints.mobileMd}) {
        gap: 20px;
    };

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        display: none;
    };
`;
export const LanguagesWrapper = styled.div`
    display: flex;
    gap: 40px;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
      gap: 20px;
    }
`;

export const LanguageContainer = styled.div<{ isActive?: boolean }>`
    border-radius: 100%;
    overflow: hidden;
    max-width: 40px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    opacity: 0.5;
    
    &:hover {
        transform: scale(1.1);
    };

    ${({ isActive }) => isActive && css`
        opacity: 1;
        box-shadow: 0 0 30px 0px ${theme.palette.secondColor};
        cursor: no-drop;

        &:hover {
            transform: none;
        };
    `};

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
      max-width:32px;
    }
`;

export const LanguageIcon = styled.img`
    transform: scale(1.4);
`;

const activeLink = "active";

export const NavLink = styled(Link)<{ active?: boolean }>`
  background-image: linear-gradient(
    to right,
    ${theme.palette.secondColor},
    ${theme.palette.secondColor} 50%,
    ${theme.palette.fontColor} 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: flex;
  gap: 20px;
  padding: 8px 12px;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  color: white;

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
    color: ${theme.palette.secondColor};
  }

  &:hover:before {
    width: 100%;
  }

  &.${activeLink} {
    background-position: 0;
    color: ${theme.palette.secondColor};

    &:before {
      width: 100%;
    }

    &:hover:before {
      width: 100%;
    }
  }

  @media (max-width: ${theme.breakPoints.mobileMd}px) {
    font-size: 18px;
    margin: 12px 0;
  }
`;
