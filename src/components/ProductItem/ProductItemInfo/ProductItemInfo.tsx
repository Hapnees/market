import cartSvg from '@/assets/ProductItem/cart.svg'
import List from '@/components/UI/List/List'
import VolumeBlock from '@/components/VolumeBlock/VolumeBlock'
import { useActions } from '@/hooks/useActions'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getConfiguredProductInfo } from '../utils/ProductItem.util'
import cl from './ProductItemInfo.module.scss'

interface IProps {
	product: IProduct
}

const ProductItemInfo: FC<IProps> = ({ product }) => {
	const productInfo = getConfiguredProductInfo(product)
	const { addProductToCart: addProduct } = useActions()

	const onClickCart = () => {
		if (!product.stock) {
			toast.error('Товар отсутствует в наличии')
			return
		}

		addProduct({ ...product, quantity: 1 })
	}

	return (
		<div className={cl.wrapper}>
			<VolumeBlock product={product} />

			<Link to={`/product/${product.id}`} className={cl.title}>
				{product.title}
			</Link>

			<div className={cl.listWrapper}>
				<List list={productInfo} style={{ marginBottom: 0 }} />
			</div>

			<div className={cl.bottomContent}>
				<p className={cl.price}>{product.price} ₸</p>
				<div className={cl.cartButton} onClick={onClickCart}>
					<p>В корзину</p>
					<img src={cartSvg} alt='' />
				</div>
			</div>
		</div>
	)
}

export default ProductItemInfo
