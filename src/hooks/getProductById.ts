import { useLazyGetProductByIdQuery } from '@/api/api'
import { toast } from 'react-toastify'

const useGetProductById = () => {
	const [getProduct, { data: product, isLoading }] =
		useLazyGetProductByIdQuery()

	const getProductById = (id: string | undefined): void => {
		getProduct(+id!).catch(() => toast.error('Ошибка при получении товара'))
	}

	return { getProductById, product, isLoading }
}

export default useGetProductById
