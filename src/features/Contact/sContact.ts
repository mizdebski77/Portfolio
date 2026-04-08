import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize';
import { theme } from '../../core/theme';

export const Wrapper = styled.div`
    padding: 40px;
    overflow: hidden;
    min-height: 100vh;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        padding: 12px;
    }
`;


export const FormTitle = styled.p`
    color: ${theme.palette.fontColor};
    font-size: 28px;
    text-align: center;
    font-weight: 200;
`;

export const Form = styled.form`
    display: grid;
    gap: 40px;
    max-width: 640px;
    margin: auto;
    padding: 40px;
    box-shadow: 0 0 400px 0 ${theme.palette.secondColor6};
    border-radius: 12px;
    border: 4px solid ${theme.palette.secondColor6};
    
    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        padding: 24px 12px;
    }
`;

export const Label = styled.label`
    width: 100%;
`;

export const Legend = styled.legend`
    font-size: 16px;
    color: ${theme.palette.fontColor};
    font-weight: 200;
    margin: 0 0  12px 0;
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    padding: 12px;
    background: none;
    border-radius: 12px;
    border: 2px solid ${theme.palette.secondColor6};
    box-shadow: 0 0 20px 0 ${theme.palette.secondColor2};
    width: 100%;
    color: ${theme.palette.fontColor};
    outline: none;

    &:focus {
        box-shadow: 0 0 20px 0 ${theme.palette.secondColor};
    }
`;

export const TextArea = styled(TextareaAutosize)`
    min-height: 80px;
    resize: none;
    outline: none;
    color: ${theme.palette.fontColor};
    padding: 12px;
    background: none;
    border-radius: 12px;
    border: 2px solid ${theme.palette.secondColor6};
    box-shadow: 0 0 20px 0 ${theme.palette.secondColor2};
    width: 100%;

    &:focus {
        box-shadow: 0 0 20px 0 ${theme.palette.secondColor};
    }
`;
