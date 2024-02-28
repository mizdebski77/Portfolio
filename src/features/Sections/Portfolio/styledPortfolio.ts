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

export const Image = styled.img`
    opacity: 1;
    display: block;
    max-width: 480px;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
    aspect-ratio: 4/3;
    object-fit: cover;
`;