import { IBreadCrumbsEl } from '@/types/breadcrumbs.interface'

export const getBreadCrumbsCheckoutPage = (): IBreadCrumbsEl[] => {
	return [
		{ title: 'Корзина', href: '/cart' },
		{ title: 'Оформление заказа', href: '/checkout' },
	]
}
