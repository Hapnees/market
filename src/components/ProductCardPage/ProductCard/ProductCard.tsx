import { getProductById } from '@/api/products.api'
import { IProduct } from '@/types/product.interface'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductCardInfo from './ProductCardInfo/ProductCardInfo'
import cl from './ProductCard.module.scss'

const ProductCard = () => {
	const params = useParams<{ id: string }>()
	const [product, setProduct] = useState<IProduct>()

	useEffect(() => {
		getProductById(+params.id!).then(data => setProduct(data))
	}, [])

	return (
		<section className={cl.wrapper}>
			{product && (
				<>
					<img
						src={product.img}
						alt=''
						width={664}
						height={471}
						className={cl.img}
					/>

					<ProductCardInfo product={product} />
				</>
			)}
		</section>
	)
}

export default ProductCard
