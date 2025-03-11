import styled from "styled-components";

export const StyledOrderItem = styled.li`
  display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    padding: 0.5rem;
`;

export const StyledOrderItemContent = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`;

export const StyledOrderImg = styled.img`
    width: 100%;
    border-radius: 0.5rem;
`;

export const StyledOrderImgContainer = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
`;

export const StyledOrderItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const StyledOrderItemQtyDetails = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

export const StyledOrderItemCost = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;