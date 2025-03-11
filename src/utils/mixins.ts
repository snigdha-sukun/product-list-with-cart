import { css } from "styled-components";

export const tablet = (styles: TemplateStringsArray) => css`
  @media (max-width: 768px) {
    ${styles}
  }
`;

export const mobile = (styles: TemplateStringsArray) => css`
  @media (max-width: 480px) {
    ${styles}
  }
`;

type ColorKeys =
	| "red"
	| "green"
	| "rose50"
	| "rose100"
	| "rose300"
	| "rose400"
	| "rose500"
	| "rose900"
	| "darkRed";

export const IconButton = (color: ColorKeys, hoverColor: ColorKeys) => css`
    all: unset;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors[color]};
    transition: all 0.3s ease;

    svg path {
        fill: ${({ theme }) => theme.colors[color]};
    }

    &:hover {
        svg path {
            fill: ${({ theme }) => theme.colors[hoverColor]};
        }
    }
`;
