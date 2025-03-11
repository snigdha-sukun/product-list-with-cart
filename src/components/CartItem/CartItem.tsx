import { ItemName, ItemPrice, ItemQuantity } from "../../App.styled";
import { useCart } from "../../hooks/useCart";
import type { CartItemType } from "../../utils/types";
import { showFormattedPrice } from "../../utils/utils";
import {
	CartItemContainer,
	ItemDetails,
	ItemCost,
	ItemCartDetails,
	StyledDeleteBtn,
} from "./CartItem.styled";

const CartItem = ({ item }: { item: CartItemType }) => {
	const { removeFromCart } = useCart();
	return (
		<CartItemContainer>
			<ItemDetails>
				<ItemName>{item.name}</ItemName>
				<ItemCartDetails>
					<ItemQuantity>{item.quantity}x</ItemQuantity>
					<ItemPrice>@{showFormattedPrice(item.price)}</ItemPrice>
					<ItemCost>{showFormattedPrice(item.quantity * item.price)}</ItemCost>
				</ItemCartDetails>
			</ItemDetails>
			<StyledDeleteBtn type="button" onClick={() => removeFromCart(item.id)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="10"
					fill="none"
					viewBox="0 0 10 10"
				>
					<title>Remove item</title>
					<path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
				</svg>
			</StyledDeleteBtn>
		</CartItemContainer>
	);
};
export default CartItem;
