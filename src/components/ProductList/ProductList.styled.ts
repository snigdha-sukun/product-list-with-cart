import styled from "styled-components";
import { tablet } from "../../utils/mixins";

export const ProductListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
`;

export const StyledHeading = styled.h1`
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeights.bolder};
`;

export const StyledProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    list-style: none;
    padding: 0;

    ${tablet`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `}
`;