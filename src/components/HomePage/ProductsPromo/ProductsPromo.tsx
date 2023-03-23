import { getProductsPromo } from '@/api/products.api'
import { IProduct } from '@/types/product.interface'
import { useEffect, useState } from 'react'
import ProductGrid from '../../ProductGrid/ProductGrid'
import cl from './ProductsPromo.module.scss'

const ProductsPromo = () => {
	const [products, setProducts] = useState<IProduct[]>([])

	useEffect(() => {
		getProductsPromo().then(data => setProducts(data))
	}, [])

	return (
		<article className={cl.wrapper}>
			<p className='title'>
				<span>Акционные</span> товары
			</p>

			<ProductGrid products={products} style={{ marginTop: '50px' }} />
		</article>
	)
}

export default ProductsPromo
