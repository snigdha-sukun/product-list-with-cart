import { useCart } from "../../hooks/useCart";
import ProductItem from "../ProductItem/ProductItem";
import {
	ProductListContainer,
	StyledHeading,
	StyledProductList,
} from "./ProductList.styled";

const ProductList = () => {
	const { products } = useCart();

	return (
		<ProductListContainer>
			<StyledHeading>Desserts</StyledHeading>
			<StyledProductList>
				{products.map((product) => (
					<ProductItem product={product} key={product.id} />
				))}
			</StyledProductList>
		</ProductListContainer>
	);
};
export default ProductList;
