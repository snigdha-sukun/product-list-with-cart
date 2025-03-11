import styled from "styled-components";
import { tablet } from "./utils/mixins";

export const Container = styled.div`
    display: flex;

    ${tablet`
        flex-direction: column;
    `}
`;

export const StyledOrderTotalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
`;

export const StyledOrderTotalText = styled.span`
    color: ${({ theme }) => theme.colors.rose500};
`;

export const StyledOrderTotal = styled.h3`
    color: ${({ theme }) => theme.colors.rose900};
    font-size: 1.4rem;
    font-weight: ${({ theme }) => theme.fontWeights.bolder};
`;

export const ItemName = styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.rose900};
`;

export const ItemQuantity = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.red};
`;

export const ItemPrice = styled.span`
    color: ${({ theme }) => theme.colors.rose500};
`;
