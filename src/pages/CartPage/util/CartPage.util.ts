import { IBreadCrumbsEl } from '@/types/breadcrumbs.interface'

export const getBreadCrumbsCartPage = (): IBreadCrumbsEl[] => {
	return [{ title: 'Корзина', href: '/cart' }]
}
