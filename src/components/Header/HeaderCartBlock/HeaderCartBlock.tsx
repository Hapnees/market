import { useAppSelector } from '@/hooks/useAppSelector'
import cl from './HeaderCartBlock.module.scss'

const HeaderCartBlock = () => {
	const { products } = useAppSelector(state => state.cart)
	const totalPrice = products.reduce(
		(accum, item) => accum + item.price * item.quantity,
		0
	)

	return (
		<article className={cl.wrapper}>
			<div className={cl.imgContainer}>
				<div className={cl.circle}>
					<div className={cl.innerCircle}>{products.length}</div>
				</div>
				<img src='../Header/cart.svg' alt='' />
			</div>

			<div className={cl.info}>
				<p>Корзина</p>
				<p>{totalPrice.toFixed(2)} ₸</p>
			</div>
		</article>
	)
}

export default HeaderCartBlock
