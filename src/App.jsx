import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Register from './pages/register';

import useProducts from './hooks/useProducts';

import './App.css'


const router = createBrowserRouter([
	{
		path: '/',
		element: <Register />
	},
	{
		path: '/register',
		element: <Register />
	}
])

function App() {
	const { callGetProducts } = useProducts()

	useEffect(() => {
		callGetProducts().catch(console.error)
		console.log('calling')
	}, [callGetProducts])

  return (
		<RouterProvider router={router}/>
  )
}

export default App
