import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import CartGrid from '@/components/CartPage/CartGrid/CartGrid'
import Button from '@/components/UI/Button/Button'
import { useAppSelector } from '@/hooks/useAppSelector'
import { IBreadCrumbsEl } from '@/types/breadcrumbs.interface'
import { useNavigate } from 'react-router'
import cl from './CartPage.module.scss'

const CartPage = () => {
	const navigate = useNavigate()
	const { products } = useAppSelector(state => state.cart)
	const breadCrumbsList: IBreadCrumbsEl[] = [
		{ title: 'Корзина', href: '/cart' },
	]
	const totalPrice = products.reduce(
		(accum, item) => accum + item.price * item.quantity,
		0
	)

	const onClickCheckout = () => navigate('/checkout')

	return (
		<main className={cl.wrapper}>
			<section className={cl.header}>
				<BreadCrumbs list={breadCrumbsList} />
				<p className='title'>Корзина</p>
			</section>

			{products.length ? (
				<>
					<CartGrid products={products} />
					<div className={cl.buttonContent}>
						<Button onClick={onClickCheckout}>Оформить заказ</Button>
						<p className={cl.price}>{totalPrice.toFixed(2)} ₸</p>
					</div>
				</>
			) : (
				<h1>Корзина пустая</h1>
			)}
		</main>
	)
}

export default CartPage
