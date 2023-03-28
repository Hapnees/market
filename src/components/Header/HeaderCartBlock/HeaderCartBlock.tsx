import { useAppSelector } from '@/hooks/useAppSelector'
import { useNavigate } from 'react-router'
import cl from './HeaderCartBlock.module.scss'
import Cart from '@/components/UI/Cart/Cart'

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
			<Cart numProducts={products.length} style={{ marginRight: '25px' }} />

			<div className={cl.info}>
				<p>Корзина</p>
				<p>{totalPrice.toFixed(2)} ₸</p>
			</div>
		</article>
	)
}

export default HeaderCartBlock
