import { styled } from "styled-components";

const List = styled.ul`
    display: flex;
    gap: 5px;
`;

const Button = styled.button`
    padding: 9px 18px;
    border: 1px solid black;
    border-radius: 6px;
    background-color: transparent;

    &:hover,
    &:focus {
        background-color: black;
        color: white;
    }
`;

export { List, Button };
