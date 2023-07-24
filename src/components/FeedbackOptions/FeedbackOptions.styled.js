import { styled } from "styled-components";

export const Button = styled.button`
    padding: 9px 18px;
    border: 1px solid black;
    border-radius: 6px;
    background-color: transparent;
    margin-right: 5px;

    &:last-child {
        margin-right: 0;
    }

    &:hover,
    &:focus {
        background-color: black;
        color: white;
    }
`;