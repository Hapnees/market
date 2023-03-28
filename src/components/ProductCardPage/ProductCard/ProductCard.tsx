import { IProduct } from '@/types/product.interface'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductCardInfo from './ProductCardInfo/ProductCardInfo'
import cl from './ProductCard.module.scss'

interface IProps {
	product?: IProduct
}

const ProductCard: FC<IProps> = ({ product }) => {
	return (
		<section className={cl.wrapper}>
			{product && (
				<>
					<img src={product.img} alt='' className={cl.img} />

					<ProductCardInfo product={product} />
				</>
			)}
		</section>
	)
}

export default ProductCard
