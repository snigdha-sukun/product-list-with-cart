import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { GlobalStyles } from "./utils/globalStyles";
import { Container } from "./App.styled";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./providers/CartProvider";
import OrderDialog from "./components/OrderDialog/OrderDialog";

function App() {

	return (
		<ThemeProvider theme={theme}>
			<CartProvider>
				<GlobalStyles />
				<Container>
					<ProductList />
					<Cart />
				</Container>
				<OrderDialog />
			</CartProvider>
		</ThemeProvider>
	);
}

export default App;
