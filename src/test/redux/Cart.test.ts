import { useActions } from '@/hooks/useActions'
import { cartSlice } from '@/store/slices/cart.slice'
import { IProduct, IProductModif } from '@/types/product.interface'
import { describe, expect, it, vi } from 'vitest'

vi.mock('react-redux')

const product: IProduct = {
	id: 1,
	amount: 1,
	barcode: 1,
	brend: '1',
	description: '1',
	price: 1,
	producer: '1',
	promo: false,
	size: 1,
	stock: true,
	title: '1',
	types: ['1'],
	typeSize: '1',
	img: '1',
}

const modifProduct: IProductModif = { ...product, quantity: 1 }

const { addProductToCart } = cartSlice.actions
const action = {
	type: addProductToCart.type,
	payload: modifProduct,
}

describe('Cart', () => {
	it('Редакс-стейт по умолчанию', () => {
		const result = cartSlice.reducer(undefined, { type: '' })

		expect(result).toEqual({ products: [] })
	})

	it('Добавление в корзину', () => {
		const result = cartSlice.reducer({ products: [] }, action)

		expect(result.products).toEqual([modifProduct])
	})

	it('Повторное добавление в корзину', () => {
		// При повторном добавлении товара в корзину, его свойство quantity увеличивается на 1
		// Длина массива товаров остаётся прежней
		const result = cartSlice.reducer({ products: [modifProduct] }, action)

		expect(result.products.length).toEqual(1)
		expect(result.products[0].quantity).toEqual(2)
	})
})
