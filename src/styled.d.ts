import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			red: string;
			green: string;
			rose50: string;
			rose100: string;
			rose300: string;
			rose400: string;
			rose500: string;
			rose900: string;
			darkRed: string;
		};
		fontSizes: {
			base: string;
		};
		fontWeights: {
			base: number;
			bold: number;
			bolder: number;
		};
	}
}
