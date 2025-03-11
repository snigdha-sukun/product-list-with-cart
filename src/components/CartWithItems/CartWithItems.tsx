import { StyledOrderTotal, StyledOrderTotalContainer, StyledOrderTotalText } from "../../App.styled";
import { useCart } from "../../hooks/useCart";
import {  showFormattedPrice } from "../../utils/utils";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import {
	StyledCarbonNeutralContainer,
	StyledCarbonNeutralHighlight,
	StyledCartItemList,
	StyledDivider,
} from "./CartWithItems.styled";

const CartWithItems = () => {
	const { cart, getTotalCost, openModal } = useCart();

	return (
		<>
			<StyledCartItemList>
				{cart.map((item) => (
					<>
						<CartItem item={item} key={item.id} />
						<StyledDivider key={`divider-${item.id}`} />
					</>
				))}
			</StyledCartItemList>
			<StyledOrderTotalContainer>
				<StyledOrderTotalText>Order Total</StyledOrderTotalText>
				<StyledOrderTotal>
					{showFormattedPrice(getTotalCost())}
				</StyledOrderTotal>
			</StyledOrderTotalContainer>
			<StyledCarbonNeutralContainer>
				<div>
					<img src="/images/icon-carbon-neutral.svg" alt="Carbon Neutral" />
				</div>
				<div>
					This is a{" "}
					<StyledCarbonNeutralHighlight>
						carbon-neutral
					</StyledCarbonNeutralHighlight>{" "}
					delivery
				</div>
			</StyledCarbonNeutralContainer>
            <Button text="Confirm Order" handleClick={openModal} />
		</>
	);
};
export default CartWithItems;
