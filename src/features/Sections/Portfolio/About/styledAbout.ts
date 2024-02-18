import { keyframes, styled } from "styled-components";

const rotate = keyframes`
100% {
    transform: rotate(1turn);
}
`

export const Tile = styled.div`
border-radius: 10px;
backdrop-filter: blur(3px);
overflow: hidden;
width: 100%;
padding: 40px;

&::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-position: 0 0;
    background-image: conic-gradient(transparent, white, transparent 50%);
    animation: ${rotate} 10s linear infinite; 
};

&::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #100c04;
    box-shadow: 0 0 10px #bcdb02;
    border-radius: 5px;
};

`;



