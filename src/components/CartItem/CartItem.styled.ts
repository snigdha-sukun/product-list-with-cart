import styled from "styled-components";
import { IconButton } from "../../utils/mixins";

export const CartItemContainer = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    padding: 0.5rem 0;
`;

export const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ItemCost = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.rose500};
`;

export const ItemCartDetails = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const StyledDeleteBtn = styled.button`
    ${IconButton("rose300", "rose900")};
    padding: 0 0.4rem;

    &:hover {
        border-color: ${({ theme }) => theme.colors.rose900};
    }
`;
