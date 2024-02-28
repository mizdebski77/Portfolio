import styled from "styled-components";



export const List = styled.ul`
    display: flex;
    color:#ffff;
    justify-content: space-around;
    flex-wrap:wrap;
    padding: 0;
    gap: 10px;

    @media (max-width: 600px) {
        gap: 16px;
        justify-content:center;
    }
`;

export const ListItem = styled.li`
    list-style: none;
    font-family: Armio, sans-serif;
    font-size: 14px;
    color: #bcdb02;

    @media (max-width: 600px) {
        font-size: 12px;
    }
`;

export const Container = styled.a`
    position: relative;
    width: 50%;
    border-radius: 20px;
    overflow: hidden;
`;

export const Image = styled.img`
    opacity: 1;
    display: block;
    max-width: 600px;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;

    ${Container}:hover & {
        opacity: 0.1;
        scale: 1.1;
    }
`;

export const Middle = styled.div`
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;

    ${Container}:hover & {
        opacity: 1;
    }
`;

export const Text = styled.div`
    color: #bcdb02;
    font-size: 24px;
    padding: 16px 32px;
    border-bottom: 2px solid ;
`;

