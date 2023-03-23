import Button from '@/components/UI/Button/Button'
import ButtonAdjustment from '@/components/UI/ButtonAdjustment/ButtonAdjustment'
import { useActions } from '@/hooks/useActions'
import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import cl from './ProductCardMainControls.module.scss'

interface IProps {
	product: IProduct
}

const ProductCardMainControls: FC<IProps> = ({ product }) => {
	const { addProduct } = useActions()
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

	return (
		<article className={cl.wrapper}>
			<p className={cl.price}>{product.price} ₸</p>

			<div className={cl.controls}>
				<ButtonAdjustment onClick={onClickDecrease}>-</ButtonAdjustment>
				<p className={cl.amount}>{quantity}</p>
				<ButtonAdjustment onClick={onClickIncrease}>+</ButtonAdjustment>
			</div>

			<Button srcImg='../ProductCard/cart.svg' onClick={onClickCart}>
				В корзину
			</Button>
		</article>
	)
}

export default ProductCardMainControls
