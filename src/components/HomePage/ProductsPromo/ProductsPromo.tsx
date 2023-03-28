import { useGetProductsPromoQuery } from '@/api/api'
import Loader from '@/components/Loader/Loader'
import ProductGrid from '../../ProductGrid/ProductGrid'
import cl from './ProductsPromo.module.scss'

const ProductsPromo = () => {
	const { data: products, isLoading } = useGetProductsPromoQuery()

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
