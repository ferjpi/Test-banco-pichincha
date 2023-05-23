import { useCallback } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct, validateProduct } from '../../api';

const useProducts = () => {


	const callGetProducts = useCallback(async () => {
		const res = await getProducts();
		console.log('res -> getProducts(): ', res);
	}, []);

	const callCreateProduct = useCallback(async (product) => {
		const res = await createProduct(product);
		console.log('res -> createProduct(): ', res);
	}, []);

	const callUpdateProduct = useCallback(async (product) => {
		const res = await updateProduct(product);
		console.log('res -> updateProduct(): ', res);
	}, []);

	const callDeleteProduct = useCallback(async (id) => {
		const res = await deleteProduct(id);
		console.log('res -> deleteProduct(): ', res);
	}, []);

	const callValidateProduct = useCallback(async (id) => {
		const res = await validateProduct(id);
		console.log('res -> validateProduct(): ', res);
	}, []);

	return {
		callGetProducts,
		callCreateProduct,
		callUpdateProduct,
		callDeleteProduct,
		callValidateProduct
	}
}


export default useProducts;
