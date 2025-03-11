import styled from "styled-components";

export const StyledCartImgContainer = styled.div`
    width: 10rem;
    height: auto;
    display: grid;
    place-items: center;
`;

export const StyledCartImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const StyledEmptyCartContainer = styled.div`
    display: grid;
    place-items: center;
`;

export const StyledEmptyCartText = styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.rose500};
`;