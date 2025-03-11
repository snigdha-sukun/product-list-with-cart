export interface Product {
	image: {
		thumbnail: string;
		mobile: string;
		tablet: string;
		desktop: string;
	};
	id: number;
	name: string;
	category: string;
	price: number;
}

export interface CartItemType extends Product {
	quantity: number;
}
