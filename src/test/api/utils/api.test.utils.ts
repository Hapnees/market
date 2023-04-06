import { expect } from 'vitest'
import { IValueForCheck } from '../api.test.interface'

// Проверяем, обладает ли товар всеми обязательными свойствами
export const checkObjectHaveProperties = (
	product: object,
	properties: string[]
) => {
	properties.forEach(property => expect(product).toHaveProperty(property))
}

// Проверяем, является ли каждый элемент массива строкой
export const checkStringArray = (array: any[]) => {
	const booleanArray = array.map(el => typeof el === 'string')
	return booleanArray.some(el => el === false) ? 'anyArray' : 'stringArray'
}

// Проверяем соответствие типов свойств товара
export const checkTruthyArray = (values: IValueForCheck[]) => {
	const truthyArray: IValueForCheck[] = values.map(value => ({
		...value,
		type:
			value.type === 'stringArray'
				? checkStringArray(value.value)
				: typeof value.value,
	}))

	expect(values).toEqual(truthyArray)
}

export const productRequiredProperties = [
	'id',
	'title',
	'typeSize',
	'size',
	'amount',
	'types',
	'stock',
	'barcode',
	'producer',
	'brend',
	'description',
	'price',
	'promo',
]

export const prodcuerRequiredProperties = ['id', 'title']
export const brendRequiredProperties = ['id', 'title']
export const typeRequiredProperties = ['id', 'title']
