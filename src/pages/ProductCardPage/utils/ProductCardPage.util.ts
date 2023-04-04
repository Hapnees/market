import { IBreadCrumbsEl } from '@/types/breadcrumbs.interface'
import { IProduct } from '@/types/product.interface'

export const getBreadCrumbsProductCardPage = (
	product: IProduct | undefined
): IBreadCrumbsEl[] => {
	return [
		{
			title: 'Каталог',
			href: '/catalog',
		},
		{
			title: product?.title || '',
			href: `/product/${product?.id}`,
		},
	]
}
