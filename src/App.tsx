import React from 'react'
import { Route, Routes } from 'react-router'
import MainLayout from './layouts/MainLayout/MainLayout'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import HomePage from './pages/HomePage/HomePage'
import ProductCardPage from './pages/ProductCardPage/ProductCardPage'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<HomePage />} />
				<Route path='/product/:id' element={<ProductCardPage />} />
				<Route path='/catalog' element={<CatalogPage />} />
			</Route>
		</Routes>
	)
}

export default App
