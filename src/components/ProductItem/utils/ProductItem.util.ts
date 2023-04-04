import { IProductInfo } from '@/types/list.interface'
import { IProduct } from '@/types/product.interface'

export const getConfiguredProductInfo = (product: IProduct): IProductInfo[] => {
	return [
		{ field: 'Штрихкод', value: product.barcode },
		{ field: 'Производитель', value: product.producer },
		{ field: 'Бренд', value: product.brend },
	]
}

export const getCategoryProducts = (pathname: string) => {
	return pathname === '/' ? 'PROMO' : pathname === '/catalog' ? 'ALL' : ''
}
