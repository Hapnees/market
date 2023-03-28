import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import FormCheckout from '@/components/CheckoutPage/FormCheckout/FormCheckout'
import Order from '@/components/CheckoutPage/Order/Order'
import BackButton from '@/components/UI/BackButton/BackButton'
import { useAppSelector } from '@/hooks/useAppSelector'
import { IBreadCrumbsEl } from '@/types/breadcrumbs.interface'
import { useNavigate } from 'react-router'
import cl from './CheckoutPage.module.scss'

const CheckoutPage = () => {
	const navigate = useNavigate()
	const { products } = useAppSelector(state => state.cart)
	const breadCrumbsList: IBreadCrumbsEl[] = [
		{ title: 'Корзина', href: '/cart' },
		{ title: 'Оформление заказа', href: '/checkout' },
	]

	const onClickBackButton = () => navigate('/cart')

	if (!products.length)
		return <h1 className={cl.emptyCartTitle}>Корзина пустая</h1>

	return (
		<main className={cl.main}>
			<div className={cl.header}>
				<BackButton className={cl.backButton} onClick={onClickBackButton} />
				<BreadCrumbs
					list={breadCrumbsList}
					className={cl.adaptiveBreadCrumbs}
				/>
				<p className={`title ${cl.title}`}>Оформление заказа</p>
			</div>

			<section className={cl.content}>
				<FormCheckout />
				<Order products={products} />
			</section>
		</main>
	)
}

export default CheckoutPage
