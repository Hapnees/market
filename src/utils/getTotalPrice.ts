import { IProductModif } from '@/types/product.interface'

const getTotalPrice = (products: IProductModif[]) => {
	return products.reduce((accum, item) => accum + item.price * item.quantity, 0)
}

export default getTotalPrice
