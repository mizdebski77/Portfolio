import styled from 'styled-components'
import { theme } from '../../../core/theme';
import { X } from 'lucide-react';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 20;
    height: 100%;
    width: 100%;
    padding: 40px;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CloseButton = styled(X)`
    color: ${theme.palette.fontColor};
    position: absolute;
    top: 20px;
    right: 40px;
    width:40px;
    height: 40px;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        transform: rotate(180deg);
    }
`;

export const Container = styled.div`
    background:${theme.palette.mainColor};
    padding: 120px;
    max-width: 1000px;
    width: 100%;
    height: auto;
    box-shadow: 0 0 120px 0 ${theme.palette.secondColor};
    border-radius: 12px;
`;


