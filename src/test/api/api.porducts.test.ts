import { baseApi } from '@/api/api'
import { store } from '@/store/store'
import { IProduct } from '@/types/product.interface'
import { beforeAll, describe, expect, it } from 'vitest'
import { IValidType, IValueForCheck } from './api.test.interface'
import {
	checkObjectHaveProperties,
	checkTruthyArray,
	prodcuerRequiredProperties,
	productRequiredProperties,
} from './utils/api.test.utils'

///////////////////////////////////////////////////////////////////////////////
// Хостинг, на который я залил бэкенд немного тормознутный, поэтому порой ответ приходит очень долго из-за чего тесты могут иногда падать
// Запускайте тесты несколько раз
///////////////////////////////////////////////////////////////////////////////

const api = baseApi
const limit = 15
describe('API-PRODUCTS', async () => {
	let products: IProduct[] | undefined

	beforeAll(async () => {
		products = await store
			.dispatch(api.endpoints.getProducts.initiate({ limit }))
			.then(res => res.data?.products)
	})

	it('Получаем товары', () => {
		expect(products?.length).toBeTruthy()
	})

	it('Свойства товаров', () => {
		if (products) {
			products.forEach(product => {
				checkObjectHaveProperties(product, productRequiredProperties)
			})
		}
	})

	it('Типы свойств товаров', () => {
		if (products) {
			products.forEach(product => {
				const valuesForCheck: (Omit<IValueForCheck, 'type'> & {
					type: IValidType
				})[] = [
					{ title: 'id', value: product.id, type: 'number' },
					{ title: 'title', value: product.title, type: 'string' },
					{ title: 'typeSize', value: product.typeSize, type: 'string' },
					{ title: 'amount', value: product.amount, type: 'number' },
					{ title: 'types', value: product.types, type: 'stringArray' },
					{ title: 'stock', value: product.stock, type: 'boolean' },
					{ title: 'barcode', value: product.barcode, type: 'number' },
					{ title: 'producer', value: product.producer, type: 'string' },
					{ title: 'brend', value: product.brend, type: 'string' },
					{ title: 'description', value: product.description, type: 'string' },
					{ title: 'price', value: product.price, type: 'number' },
					{ title: 'promo', value: product.promo, type: 'boolean' },
				]

				checkTruthyArray(valuesForCheck)
			})
		}
	})
})
