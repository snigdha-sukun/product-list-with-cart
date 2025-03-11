import styled from "styled-components";

export const StyledCartItemList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const StyledDivider = styled.hr`
    border: 1px solid ${({ theme }) => theme.colors.rose100};
`;

export const StyledCarbonNeutralContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.colors.rose100};
    padding: 1rem 2rem;
    border-radius: 0.5rem;
`;

export const StyledCarbonNeutralHighlight = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;