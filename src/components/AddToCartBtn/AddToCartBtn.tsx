import { useCart } from "../../hooks/useCart";
import type { Product } from "../../utils/types";
import {
	IconButtonAdd,
	IconButtonRemove,
	StyledAddToCartBtn,
	StyledBtnText,
	StyledButtonContainer,
	StyledQty,
	StyledQtyButtonContainer,
} from "./AddToCartBtn.styled";

const AddToCartBtn = ({ product, qty }: { product: Product; qty?: number }) => {
	const { addToCart, reduceQty, increaseQty } = useCart();

	return (
		<StyledButtonContainer>
			{qty ? (
				<StyledQtyButtonContainer>
					<IconButtonRemove onClick={() => reduceQty(product)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="10"
							height="2"
							fill="none"
							viewBox="0 0 10 2"
						>
							<title>Decrement Quantity</title>
							<path d="M0 .375h10v1.25H0V.375Z" />
						</svg>
					</IconButtonRemove>
					<StyledQty>{qty}</StyledQty>
					<IconButtonAdd onClick={() => increaseQty(product)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="10"
							height="10"
							fill="none"
							viewBox="0 0 10 10"
						>
							<title>Increment Quantity</title>
							<path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
						</svg>
					</IconButtonAdd>
				</StyledQtyButtonContainer>
			) : (
				<StyledAddToCartBtn onClick={() => addToCart(product)}>
					<img src="/images/icon-add-to-cart.svg" alt="cart icon" />
					<StyledBtnText>Add to Cart</StyledBtnText>
				</StyledAddToCartBtn>
			)}
		</StyledButtonContainer>
	);
};
export default AddToCartBtn;
