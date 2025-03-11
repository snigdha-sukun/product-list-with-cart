import { ItemName, ItemPrice, ItemQuantity } from "../../App.styled";
import type { CartItemType } from "../../utils/types";
import { showFormattedPrice } from "../../utils/utils";
import {
	StyledOrderImg,
	StyledOrderImgContainer,
	StyledOrderItem,
	StyledOrderItemContent,
	StyledOrderItemCost,
	StyledOrderItemDetails,
	StyledOrderItemQtyDetails,
} from "./OrderItem.styled";

const OrderItem = ({ item }: { item: CartItemType }) => {
	return (
		<StyledOrderItem>
			<StyledOrderItemContent>
				<StyledOrderImgContainer>
					<StyledOrderImg src={item.image.thumbnail} alt={item.name} />
				</StyledOrderImgContainer>
				<StyledOrderItemDetails>
					<ItemName>{item.name}</ItemName>
					<StyledOrderItemQtyDetails>
						<ItemQuantity>{item.quantity}x</ItemQuantity>
						<ItemPrice>@{showFormattedPrice(item.price)}</ItemPrice>
					</StyledOrderItemQtyDetails>
				</StyledOrderItemDetails>
			</StyledOrderItemContent>
			<StyledOrderItemCost>{showFormattedPrice(item.quantity * item.price)}</StyledOrderItemCost>
		</StyledOrderItem>
	);
};
export default OrderItem;
