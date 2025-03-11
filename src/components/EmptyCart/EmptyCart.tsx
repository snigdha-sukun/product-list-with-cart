import { StyledCartImg, StyledCartImgContainer, StyledEmptyCartContainer, StyledEmptyCartText } from "./EmptyCart.styled";

const EmptyCart = () => {
	return (
		<StyledEmptyCartContainer>
			<StyledCartImgContainer>
				<StyledCartImg
					src="/images/illustration-empty-cart.svg"
					alt="Empty Cart"
				/>
			</StyledCartImgContainer>
			<StyledEmptyCartText>
				Your added items will appear here
			</StyledEmptyCartText>
		</StyledEmptyCartContainer>
	);
};
export default EmptyCart;
