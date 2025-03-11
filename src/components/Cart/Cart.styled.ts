import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 3rem;
    margin: 2rem 1rem;
    border-radius: 1rem;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.rose50};
    text-wrap: nowrap;
`;

export const StyledCartHeading = styled.h2`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bolder};
    color: ${({ theme }) => theme.colors.red};
`;




