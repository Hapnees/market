import { useDeleteProductByIdMutation } from '@/api/admin-product.api'
import Button from '@/components/UI/Button/Button'
import ButtonAdjustment from '@/components/UI/ButtonAdjustment/ButtonAdjustment'
import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import cl from './ProductCardMainControls.module.scss'
import cartIcon from '@/assets/ProductCard/cart.svg'
import trashIcon from '@/assets/trash.svg'

interface IProps {
	product: IProduct
}

const ProductCardMainControls: FC<IProps> = ({ product }) => {
	const { isAdminMode } = useAppSelector(state => state.adminMode)
	const [deleteProduct] = useDeleteProductByIdMutation()
	const { addProductToCart: addProduct } = useActions()
	const [quantity, setQuantity] = useState(1)

	const onClickCart = () => {
		if (!product.stock) {
			toast.error('Товар отсутствует в наличии')
			return
		}

		addProduct({ ...product, quantity })
	}

	const onClickDecrease = () => {
		if (quantity === 1) return
		setQuantity(prev => --prev)
	}

	const onClickIncrease = () => {
		setQuantity(prev => ++prev)
	}

	// Для админ-мода
	const onClickTrash = () => {
		deleteProduct({ id: product.id }).then(() => toast.success('Товар удалён'))
	}

	return (
		<article className={cl.wrapper}>
			<p className={cl.price}>{product.price} ₸</p>

			<div className={cl.controls}>
				<ButtonAdjustment onClick={onClickDecrease}>-</ButtonAdjustment>
				<p className={cl.amount}>{quantity}</p>
				<ButtonAdjustment onClick={onClickIncrease}>+</ButtonAdjustment>
			</div>

			<div className={cl.buttons}>
				<Button srcImg={cartIcon} onClick={onClickCart}>
					В корзину
				</Button>
				{/*// В админ-моде*/}
				{isAdminMode && (
					<Button
						srcImg={trashIcon}
						style={{ padding: '5px 20px' }}
						onClick={onClickTrash}
					></Button>
				)}
			</div>
		</article>
	)
}

export default ProductCardMainControls
