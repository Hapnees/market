import { useAppSelector } from '@/hooks/useAppSelector'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import AdminProductItemBtns from './AdminProductItemBtns/AdminProductItemBtns'
import cl from './ProductItem.module.scss'
import ProductItemInfo from './ProductItemInfo/ProductItemInfo'

interface IProps {
	product: IProduct
}

const ProductItem: FC<IProps> = ({ product }) => {
	const { isAdminMode } = useAppSelector(state => state.adminMode)

	return (
		<article className={cl.wrapper}>
			{isAdminMode && <AdminProductItemBtns product={product} />}
			{product.promo && <p className={cl.popular}>Поплуярное</p>}
			<img
				src={product.img}
				alt='Изображение не найдено'
				className={cl.productImg}
			/>

			<ProductItemInfo product={product} />
		</article>
	)
}

export default ProductItem
