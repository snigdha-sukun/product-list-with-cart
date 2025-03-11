import { useEffect, useState } from "react";
import type { Product } from "../utils/types";

const useFetchProducts = () => {
	const url = "/data.json";
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMarks = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const result = await response.json();
				setProducts(result);
			} catch (error) {
				setError(error instanceof Error ? error.message : "An error occurred");
			} finally {
				setLoading(false);
			}
		};

		fetchMarks();
	}, []);

	return { products, loading, error };
};

export default useFetchProducts;