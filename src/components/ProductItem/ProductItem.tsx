import { IProductInfo } from '@/types/list.interface'
import List from '@/components/UI/List/List'
import cl from './ProductItem.module.scss'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '@/hooks/useActions'
import { toast } from 'react-toastify'

interface IProps {
	product: IProduct
}

const ProductItem: FC<IProps> = ({ product }) => {
	const list: IProductInfo[] = [
		{ field: 'Штрихкод', value: product.barcode },
		{ field: 'Производитель', value: product.producer },
		{ field: 'Бренд', value: product.brend },
	]

	const { addProduct } = useActions()

	const onClickCart = () => {
		if (!product.stock) {
			toast.error('Товар отсутствует в наличии')
			return
		}

		addProduct({ ...product, quantity: 1 })
	}

	return (
		<article className={cl.wrapper}>
			{product.promo && <p className={cl.popular}>Поплуярное</p>}
			<img
				src={product.img}
				alt='Изображение не найдено'
				className={cl.productImg}
			/>

			<div className={cl.info}>
				<div className={cl.volumeContainer}>
					<img src='../ProductItem/volume.svg' alt='' />
					<p>
						{product.amount > 1 ? `${product.amount}X` : ''}
						{product.size} {product.typeSize}
					</p>
				</div>

				<Link to={`/product/${product.id}`} className={cl.title}>
					{product.title}
				</Link>

				<div className={cl.listWrapper}>
					<List list={list} style={{ marginBottom: 0 }} />
				</div>

				<div className={cl.bottomContent}>
					<p className={cl.price}>{product.price} ₸</p>
					<div className={cl.cartButton} onClick={onClickCart}>
						<p>В корзину</p>
						<img src='../ProductItem/cart.svg' alt='' />
					</div>
				</div>
			</div>
		</article>
	)
}

export default ProductItem
