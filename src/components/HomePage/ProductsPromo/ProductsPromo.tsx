import { useGetProductsPromoQuery } from '@/api/api'
import Loader from '@/components/Loader/Loader'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import ProductGrid from '../../ProductGrid/ProductGrid'
import cl from './ProductsPromo.module.scss'

const ProductsPromo = () => {
	const { data: products, isLoading, isError } = useGetProductsPromoQuery()

	useEffect(() => {
		if (isError) toast.error('Ошибка при получении акционных товаров')
	}, [isError])

	return (
		<article className={cl.wrapper}>
			<p className='title'>
				<span>Акционные</span> товары
			</p>

			{isLoading ? (
				<Loader />
			) : (
				<ProductGrid products={products || []} className={cl.adaptiveGrid} />
			)}
		</article>
	)
}

export default ProductsPromo
