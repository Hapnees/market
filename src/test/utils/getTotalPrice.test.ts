import { IProductModif } from '@/types/product.interface'
import getTotalPrice from '@/utils/getTotalPrice'
import { describe, expect, test } from 'vitest'

describe('getTotalPrice', () => {
	test('Возвращаемое значение', () => {
		const initValue: IProductModif[] = []

		expect(getTotalPrice(initValue)).toEqual(0)
	})
})
