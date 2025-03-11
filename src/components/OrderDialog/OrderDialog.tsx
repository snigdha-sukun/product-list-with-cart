import {
	StyledOrderTotal,
	StyledOrderTotalContainer,
	StyledOrderTotalText,
} from "../../App.styled";
import { useCart } from "../../hooks/useCart";
import { showFormattedPrice } from "../../utils/utils";
import Button from "../Button/Button";
import OrderItem from "../OrderItem/OrderItem";
import {
	Modal,
	ModalContent,
	OrderDetails,
	StyledDivider,
	StyledOrderItemList,
} from "./OrderDialog.styled";

const OrderDialog = () => {
	const { cart, isModalOpen, closeModal, resetCart, getTotalCost } = useCart();
	const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};

	return (
		<Modal isOpen={isModalOpen} onClick={handleOutsideClick}>
			<ModalContent>
				<div>
					<img src="/images/icon-order-confirmed.svg" alt="Order confirmed" />
				</div>
				<h2>Order Confirmed</h2>
				<p>We hope you enjoy your food!</p>
				<OrderDetails>
					<StyledOrderItemList>
						{cart.map((item) => (
							<>
								<OrderItem key={item.id} item={item} />
								<StyledDivider key={item.id} />
							</>
						))}
					</StyledOrderItemList>
					<StyledOrderTotalContainer>
						<StyledOrderTotalText>Order Total</StyledOrderTotalText>
						<StyledOrderTotal>
							{showFormattedPrice(getTotalCost())}
						</StyledOrderTotal>
					</StyledOrderTotalContainer>
				</OrderDetails>
				<Button text="Start New Order" handleClick={resetCart} />
			</ModalContent>
		</Modal>
	);
};
export default OrderDialog;
