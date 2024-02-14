import styled from "styled-components";


export const Image = styled.img`
    transition: 0.4s;
    max-width: 600px;

    &:hover {
        transform: scale(1.05);
    }
`;

export const List = styled.ul`
    display: flex;
    color:#ffff;
    justify-content: space-around;
    flex-wrap:wrap;
`;

export const ListItem = styled.li`
    margin-right: 10;
    list-style: none;
    font-family: Armio, sans-serif;
    font-size: 14px;
    color: #bcdb02;
`;

