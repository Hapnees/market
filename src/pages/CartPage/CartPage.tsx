import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import AdaptiveCardGrid from '@/components/CartPage/AdaptiveCardGrid/AdaptiveCardGrid'
import CartGrid from '@/components/CartPage/CartGrid/CartGrid'
import BackButton from '@/components/UI/BackButton/BackButton'
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

	const onClickBackBtn = () => navigate('/')

	const onClickCheckout = () => navigate('/checkout')

	return (
		<main className={cl.wrapper}>
			<section className={cl.header}>
				<BackButton className={cl.backButton} onClick={onClickBackBtn} />
				<BreadCrumbs
					list={breadCrumbsList}
					className={cl.breadCrumbsAdaptive}
				/>
				<p className='title'>Корзина</p>
			</section>

			{products.length ? (
				<>
					<CartGrid products={products} className={cl.adaptiveCardGrid} />
					<AdaptiveCardGrid products={products} />
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
