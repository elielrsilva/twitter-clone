import styled from "styled-components";

export const Container = styled.div `
    background: var(--primary);
`;

export const Wrapper = styled.div `
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    > button {
        padding: 8px;
        border-radius: 50%;
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: 0;
        cursor: pointer;

        &:hover {
            backgorund: var(--twitter-dark-hover);
        }
    }

`;