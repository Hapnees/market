import { IProductModif } from '@/types/product.interface'

const getTotalPrice = (products: IProductModif[]) => {
	return products.length
		? products
				.reduce((accum, item) => accum + item.price * item.quantity, 0)
				.toFixed(2)
		: 0
}

export default getTotalPrice
