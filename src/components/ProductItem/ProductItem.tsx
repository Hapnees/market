import { IProductInfo } from '@/types/list.interface'
import List from '@/components/UI/List/List'
import cl from './ProductItem.module.scss'
import { ICategoryProducts, IProduct } from '@/types/product.interface'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useActions } from '@/hooks/useActions'
import { toast } from 'react-toastify'
import VolumeBlock from '../VolumeBlock/VolumeBlock'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useDeleteProductByIdMutation } from '@/api/admin-product.api'
import arrowIcon from '@/assets/arrow.svg'
import trashIcon from '@/assets/trash.svg'
import pencilIcon from '@/assets/pencil.svg'
import cartSvg from '@/assets/ProductItem/cart.svg'

interface IProps {
	product: IProduct
}

const ProductItem: FC<IProps> = ({ product }) => {
	const location = useLocation()
	const categoryProducts: ICategoryProducts =
		location.pathname === '/'
			? 'PROMO'
			: location.pathname === '/catalog'
			? 'ALL'
			: ''

	const [deleteProduct] = useDeleteProductByIdMutation()
	const { isAdminMode } = useAppSelector(state => state.adminMode)
	const list: IProductInfo[] = [
		{ field: 'Штрихкод', value: product.barcode },
		{ field: 'Производитель', value: product.producer },
		{ field: 'Бренд', value: product.brend },
	]

	const { addProductToCart: addProduct } = useActions()

	const onClickCart = () => {
		if (!product.stock) {
			toast.error('Товар отсутствует в наличии')
			return
		}

		addProduct({ ...product, quantity: 1 })
	}

	//// Для админ-мода
	const onClickTrash = (id: number) => {
		deleteProduct({ id, categoryProducts })
	}
	/////

	return (
		<article className={cl.wrapper}>
			{/*IN ADMIN MODE*/}
			{/*////*/}
			{isAdminMode && (
				<div className={cl.adminWindowWrapper}>
					<div className={cl.adminWindow}>
						<Link to={`/product/${product.id}`}>
							<img src={arrowIcon} alt='' className={cl.adminArrow} />
						</Link>
						<img
							src={trashIcon}
							alt=''
							className={`${cl.adminArrow} ${cl.adminTrash}`}
							onClick={() => onClickTrash(product.id)}
						/>
						<Link to={`/admin/product/${product.id}`}>
							<img
								src={pencilIcon}
								alt=''
								className={`${cl.adminArrow} ${cl.adminPencil}`}
							/>
						</Link>
					</div>
				</div>
			)}
			{/*////*/}
			{product.promo && <p className={cl.popular}>Поплуярное</p>}
			<img
				src={product.img}
				alt='Изображение не найдено'
				className={cl.productImg}
			/>

			<div className={cl.info}>
				<VolumeBlock product={product} />

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
						<img src={cartSvg} alt='' />
					</div>
				</div>
			</div>
		</article>
	)
}

export default ProductItem
