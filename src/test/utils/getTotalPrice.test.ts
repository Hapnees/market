import { IProductModif } from '@/types/product.interface'
import getTotalPrice from '@/utils/getTotalPrice'
import { describe, expect, it } from 'vitest'

const testData = [
	{
		id: 1,
		title: 'AOS средство для мытья посуды Crystal',
		img: 'https://market-backend-hapnees.onrender.com/products/product_2.png',
		typeSize: 'мл',
		size: 450,
		amount: 1,
		types: ['Косметика и гигиена'],
		stock: true,
		barcode: 2976799361252,
		producer: 'Нэфис',
		brend: 'AOS',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, molestiae. Dolorem perspiciatis quae sunt iste dignissimos maiores commodi, unde recusandae similique dicta architecto veniam sit, totam magni distinctio nemo iusto!',
		price: 48.76,
		promo: false,
	},
	{
		id: 2,
		title:
			'ARIEL Автомат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
		img: 'https://market-backend-hapnees.onrender.com/products/product_3.png',
		typeSize: 'г',
		size: 28.8,
		amount: 15,
		types: ['Косметика и гигиена'],
		stock: true,
		barcode: 6146751648113,
		producer: 'Нэфис',
		brend: 'AOS',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, molestiae. Dolorem perspiciatis quae sunt iste dignissimos maiores commodi, unde recusandae similique dicta architecto veniam sit, totam magni distinctio nemo iusto!',
		price: 30.28,
		promo: false,
	},
]

describe('Итоговая цена', () => {
	it('Если товаров нет', () => {
		const initValue: IProductModif[] = []

		expect(getTotalPrice(initValue)).toEqual(0)
	})

	it('Если товары есть', () => {
		const initValue: IProductModif[] = testData.map((data, index) => ({
			...data,
			quantity: index + 1,
		}))

		expect(+getTotalPrice(initValue)).toEqual(109.32)
	})
})
