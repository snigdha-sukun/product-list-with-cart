import { useCart } from "../../hooks/useCart";
import CartWithItems from "../CartWithItems/CartWithItems";
import EmptyCart from "../EmptyCart/EmptyCart";
import { CartContainer, StyledCartHeading } from "./Cart.styled";

const Cart = () => {
	const { cart } = useCart();

	return (
		<CartContainer>
			<StyledCartHeading>Your Cart</StyledCartHeading>
			{cart.length ? <CartWithItems /> : <EmptyCart />}
		</CartContainer>
	);
};
export default Cart;
