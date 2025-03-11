import styled from "styled-components";
import { IconButton, mobile, tablet } from "../../utils/mixins";

export const StyledAddToCartBtn = styled.button`
    color: ${({ theme }) => theme.colors.rose900};
    border: 2px solid ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.rose50};
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    transition: all 0.3s;
    &:hover {
        color: ${({ theme }) => theme.colors.red};
    }
`;

export const StyledBtnText = styled.span`
    margin-left: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const StyledButtonContainer = styled.div`
    position: absolute;
    bottom: 20%;
    left: 22%;

    ${tablet`
        bottom: 17%;
        left: 28%;
    `}

    ${mobile`
        bottom: 28%;
        left: 20%;
    `}
`;

export const StyledQtyButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 3rem;
    background-color: ${({ theme }) => theme.colors.red};
    padding: 1rem;
    border-radius: 2rem;
`;

export const IconButtonAdd = styled.button`
    ${IconButton("rose50", "red")};
    padding: 0 0.4rem;

    &:hover {
        background-color: ${({ theme }) => theme.colors.rose50};
    }
`;

export const IconButtonRemove = styled.button`
    ${IconButton("rose50", "red")};
    padding: 0.6rem 0.4rem;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.rose50};
    }
`;

export const StyledQty = styled.span`
    color: ${({ theme }) => theme.colors.rose50};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;