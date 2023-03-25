import { useAppSelector } from '@/hooks/useAppSelector'
import { useNavigate } from 'react-router'
import cl from './HeaderCartBlock.module.scss'
import cartIcon from '@/assets/Header/cart.svg'

const HeaderCartBlock = () => {
	const navigate = useNavigate()
	const { products } = useAppSelector(state => state.cart)
	const totalPrice = products.reduce(
		(accum, item) => accum + item.price * item.quantity,
		0
	)

	const onClickWrapper = () => {
		navigate('/cart')
	}

	return (
		<article className={cl.wrapper} onClick={onClickWrapper}>
			<div className={cl.imgContainer}>
				<div className={cl.circle}>
					<div className={cl.innerCircle}>{products.length}</div>
				</div>
				<img src={cartIcon} alt='' />
			</div>

			<div className={cl.info}>
				<p>Корзина</p>
				<p>{totalPrice.toFixed(2)} ₸</p>
			</div>
		</article>
	)
}

export default HeaderCartBlock
