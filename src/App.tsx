import React from 'react'
import { Route, Routes } from 'react-router'
import MainLayout from './layouts/MainLayout/MainLayout'
import AdminFiltersPage from './pages/Admin/AdminFiltersPage/AdminFiltersPage'
import AdminHomePage from './pages/Admin/AdminHomePage/AdminHomePage'
import AdminProductPage from './pages/Admin/AdminProductPage/AdminProductPage'
import CartPage from './pages/CartPage/CartPage'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import HomePage from './pages/HomePage/HomePage'
import ProductCardPage from './pages/ProductCardPage/ProductCardPage'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<HomePage />} />
				<Route path='/product/:id' element={<ProductCardPage />} />
				<Route path='/catalog' element={<CatalogPage />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/checkout' element={<CheckoutPage />} />
				<Route path='/admin' element={<AdminHomePage />} />
				<Route path='/admin/product' element={<AdminProductPage />} />
				<Route path='/admin/product/:id' element={<AdminProductPage />} />
				<Route path='/admin/filters' element={<AdminFiltersPage />} />
			</Route>
		</Routes>
	)
}

export default App
