import { IProduct } from '@/types/product.interface'
import { FC, HTMLAttributes } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import cl from './ProductGrid.module.scss'

interface IProps extends HTMLAttributes<HTMLUListElement> {
	products: IProduct[]
	columns?: number
}

const ProductGrid: FC<IProps> = ({
	products,
	columns = 4,
	style,
	...props
}) => {
	return (
		<ul
			className={cl.list}
			style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, ...style }}
			{...props}
		>
			{products.map(product => (
				<li key={product.id}>
					<ProductItem product={product} />
				</li>
			))}
		</ul>
	)
}

export default ProductGrid
