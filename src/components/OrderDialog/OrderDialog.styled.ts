import styled, { keyframes } from "styled-components";
import { mobile } from "../../utils/mixins";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Modal = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    z-index: 1;
    padding-top: 10rem;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    animation: ${fadeIn} 0.3s ease-in-out;

    ${mobile`
      padding-top: 25rem;
    `}
`;

export const ModalContent = styled.div`
    background-color: ${({ theme }) => theme.colors.rose50};
    margin: auto;
    padding: 2rem;
    width: fit-content;
    border-radius: 1rem;
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${mobile`
      width: 100%;
      margin: 0;
      border-radius: 1rem 1rem 0 0;
    `}
`;

export const OrderDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0;
    background-color: ${({ theme }) => theme.colors.rose100};
    padding: 1rem;
`;

export const StyledDivider = styled.hr`
    background-color: ${({ theme }) => theme.colors.rose300};
    border: none;
    height: 0.05rem;
`;

export const StyledOrderItemList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
`;