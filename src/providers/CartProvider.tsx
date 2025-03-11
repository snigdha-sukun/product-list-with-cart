import { useCallback, useMemo, useState } from "react";
import type { CartItemType, Product } from "../utils/types";
import useFetchProducts from "../hooks/useFetchProducts";
import { CartContext } from "./CartContext";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const { products } = useFetchProducts();

	const [cart, setCart] = useState<CartItemType[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = useCallback(() => setIsModalOpen(true), []);
	const closeModal = useCallback(() => setIsModalOpen(false), []);

	const resetCart = useCallback(() => {
		setCart([]);
		closeModal();
	}, [closeModal]);

	const addToCart = useCallback((product: Product) => {
		setCart((prevCart) => {
			return [...prevCart, { ...product, quantity: 1 }];
		});
	}, []);

	const increaseQty = useCallback((product: Product) => {
		setCart((prevCart) => {
			return prevCart.map((item) =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item,
			);
		});
	}, []);

	const reduceQty = useCallback((product: Product) => {
		setCart((prevCart) => {
			const updatedCart = prevCart
				.map((item) => {
					if (item.id === product.id) {
						const qty = item.quantity;
						if (qty === 1) {
							return null;
						}
						return { ...item, quantity: item.quantity - 1 };
					}
					return item;
				})
				.filter((item): item is CartItemType => item !== null);
			return updatedCart;
		});
	}, []);

	const removeFromCart = useCallback((productId: number) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
	}, []);

	const emptyCart = useCallback(() => {
		setCart([]);
	}, []);

	const findCartItem = useCallback(
		(productId: number) => {
			return cart.find((item) => item.id === productId);
		},
		[cart],
	);

	const getTotalCost = useCallback(() => {
		return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
	}, [cart]);

	const contextValue = useMemo(
		() => ({
			products,
			cart,
			addToCart,
			removeFromCart,
			emptyCart,
			findCartItem,
			reduceQty,
			increaseQty,
			getTotalCost,
			isModalOpen,
			openModal,
			closeModal,
			resetCart,
		}),
		[
			products,
			cart,
			addToCart,
			removeFromCart,
			emptyCart,
			findCartItem,
			reduceQty,
			increaseQty,
			getTotalCost,
			isModalOpen,
			openModal,
			closeModal,
			resetCart,
		],
	);

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};
