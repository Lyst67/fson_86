import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodoPage from './pages/TodoPage'
import ProductsPage from './pages/ProductsPage'
import Layout from './Layout'
import ProductsPageDetails from './pages/ProductsPage/ProductsPageDetails'

const App = () => {
	return (
		<Routes>
			<Route path='/home' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='todos' element={<TodoPage />} />
				<Route path='products' element={<ProductsPage />} />
				<Route path='products/:productId' element={<ProductsPageDetails />} />
				{/* <Route path='products' element={<ProductsPage />}>
					<Route path=':productId' element={<ProductsPageDetails />} />
				</Route> */}
			</Route>
			<Route path='/products' element={<ProductsPage />} />
		</Routes>
	)
}

export default App
