import { useLazyGetProductsQuery } from '@/api/api'
import { IGetProductsParams } from '@/types/product.interface'
import { useState } from 'react'
import { toast } from 'react-toastify'

const useGetProducts = (limit = 15) => {
	const [totalPages, setTotalPages] = useState(0)

	const [
		weakGetProducts,
		{ data: productsData, isLoading: isLoadingProducts },
	] = useLazyGetProductsQuery()

	const getProducts = (params: IGetProductsParams) => {
		weakGetProducts(params)
			.unwrap()
			.then(res => {
				setTotalPages(Math.ceil(res.totalCount / limit))
			})
			.catch(() => toast.error('Ошибка при получении товаров'))
	}

	return { getProducts, productsData, isLoadingProducts, totalPages }
}

export default useGetProducts
