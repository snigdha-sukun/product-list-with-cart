import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 1rem 2rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.rose50};
    border-radius: 2rem;
    width: 100%;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.darkRed};
    }
`;