import { createContext } from "react";
import type { CartItemType, Product } from "../utils/types";

interface CartContextType {
	products: Product[];
	cart: CartItemType[];
	addToCart: (product: Product) => void;
	removeFromCart: (productId: number) => void;
	emptyCart: () => void;
	findCartItem: (productId: number) => CartItemType | undefined;
	reduceQty: (product: Product) => void;
	increaseQty: (product: Product) => void;
	getTotalCost: () => number;
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	resetCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
	undefined,
);
