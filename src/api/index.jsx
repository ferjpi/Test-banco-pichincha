const headers = new Headers();
headers.append('authorId', 'test');

export const getProducts = async () => {
	const res = 	await fetch('https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products', {
		method: 'GET',
		mode: 'no-cors',
		headers
	})
	const data = await res.json();
	return data;
}


export const createProduct = async (product) => {
	const res = 	await fetch('https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products', {
		method: 'POST',
		data: product
	})
	const data = await res.json();
	return data;
}

export const updateProduct = async (product) => {
	const res = 	await fetch('https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products', {
		method: 'PUT',
		data: product
	});
	const data = await res.json();
	return data;
}

export const deleteProduct = async (id) => {
	const res = 	await fetch(
		`https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products?id=${id}`, 
		{
			method: 'DELETE',
		})
	const data = await res.json();
	return data;
}

export const validateProduct = async (id) => {
	const res = 	await fetch(
		`https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products?id=${id}`, 
		{
			method: 'GET',
		})
	const data = await res.json();
	return data;
}
