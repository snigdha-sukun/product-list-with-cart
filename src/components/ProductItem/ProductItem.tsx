import { useCart } from "../../hooks/useCart";
import useScreenSize from "../../hooks/useScreenSize";
import type { Product } from "../../utils/types";
import { showFormattedPrice } from "../../utils/utils";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import {
	StyledProductCategory,
	StyledProductImg,
	StyledProductImgContainer,
	StyledProductInfo,
	StyledProductItem,
	StyledProductName,
	StyledProductPrice,
} from "./ProductItem.styled";

const ProductItem = ({ product }: { product: Product }) => {
	const screenSize = useScreenSize();
	const imageUrl = product.image[screenSize];
	const { findCartItem } = useCart();
	const isCartItem = findCartItem(product.id);

	return (
		<StyledProductItem>
			<StyledProductImgContainer hasBorder={!!isCartItem}>
				<StyledProductImg src={imageUrl} alt={product.name} />
			</StyledProductImgContainer>
			<AddToCartBtn product={product} qty={isCartItem?.quantity} />
			<StyledProductInfo>
				<StyledProductCategory>{product.category}</StyledProductCategory>
				<StyledProductName>{product.name}</StyledProductName>
				<StyledProductPrice>
					{showFormattedPrice(product.price)}
				</StyledProductPrice>
			</StyledProductInfo>
		</StyledProductItem>
	);
};

export default ProductItem;
