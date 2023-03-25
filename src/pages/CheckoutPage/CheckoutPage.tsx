import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import FormCheckout from '@/components/CheckoutPage/FormCheckout/FormCheckout'
import Order from '@/components/CheckoutPage/Order/Order'
import { useAppSelector } from '@/hooks/useAppSelector'
import { IBreadCrumbsEl } from '@/types/breadcrumbs.interface'
import cl from './CheckoutPage.module.scss'

const CheckoutPage = () => {
	const { products } = useAppSelector(state => state.cart)
	const breadCrumbsList: IBreadCrumbsEl[] = [
		{ title: 'Корзина', href: '/cart' },
		{ title: 'Оформление заказа', href: '/checkout' },
	]

	if (!products.length)
		return <h1 className={cl.emptyCartTitle}>Корзина пустая</h1>

	return (
		<main className={cl.main}>
			<BreadCrumbs list={breadCrumbsList} />
			<p className='title' style={{ marginBottom: '50px' }}>
				Оформление заказа
			</p>

			<section className={cl.content}>
				<FormCheckout />
				<Order products={products} />
			</section>
		</main>
	)
}

export default CheckoutPage
