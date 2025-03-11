import styled from "styled-components";

export const StyledProductItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    gap: 2rem;
`;

export const StyledProductImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
`;

export const StyledProductImgContainer = styled.div<{ hasBorder: boolean }>`
    border-radius: 1rem;
    border: 0.25rem solid ${({ hasBorder, theme }) => hasBorder ? theme.colors.red : "transparent"};
    transition: all 0.3s ease;
`;

export const StyledProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
`;

export const StyledProductPrice = styled.p`
    color: ${({ theme }) => theme.colors.red};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const StyledProductCategory = styled.p`
    color: ${({ theme }) => theme.colors.rose500};
`;

export const StyledProductName = styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;