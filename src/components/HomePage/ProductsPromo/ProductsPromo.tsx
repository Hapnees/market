import { useGetProductsPromoQuery } from '@/api/api'
import ProductGrid from '../../ProductGrid/ProductGrid'
import cl from './ProductsPromo.module.scss'

const ProductsPromo = () => {
	const { data: products } = useGetProductsPromoQuery()

	return (
		<article className={cl.wrapper}>
			<p className='title'>
				<span>Акционные</span> товары
			</p>

			<ProductGrid products={products || []} style={{ marginTop: '50px' }} />
		</article>
	)
}

export default ProductsPromo
