import styled from "styled-components";


export const Image = styled.img`
    transition: 0.4s;
    max-width: 600px;
    width: 100%;

    &:hover {
        transform: scale(1.05);
    }
`;

export const List = styled.ul`
    display: flex;
    color:#ffff;
    justify-content: space-around;
    flex-wrap:wrap;
    padding: 0;
    gap: 10px;

    @media (max-width: 600px) {
        gap: 10px;
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

