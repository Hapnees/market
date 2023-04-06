import { baseApi } from '@/api/api'
import { store } from '@/store/store'
import { IBrend } from '@/types/filters.type.interface'
import { beforeAll, describe, expect, it } from 'vitest'
import { IValidType, IValueForCheck } from './api.test.interface'
import {
	brendRequiredProperties,
	checkObjectHaveProperties,
	checkTruthyArray,
} from './utils/api.test.utils'

///////////////////////////////////////////////////////////////////////////////
// Хостинг, на который я залил бэкенд немного тормознутный, поэтому порой ответ приходит очень долго из-за чего тесты могут иногда падать
// Запускайте тесты несколько раз
///////////////////////////////////////////////////////////////////////////////

const api = baseApi

describe('API-BRENDS', () => {
	let brends: IBrend[] | undefined

	beforeAll(async () => {
		brends = await store
			.dispatch(api.endpoints.getBrends.initiate())
			.then(res => res.data)
	})

	it('Получаем бренды', () => {
		expect(brends?.length).toBeTruthy()
	})

	it('Свойства брендов', () => {
		if (brends) {
			brends.forEach(brend => {
				checkObjectHaveProperties(brend, brendRequiredProperties)
			})
		}
	})

	it('Типы свойств брендов', () => {
		if (brends) {
			brends.forEach(brend => {
				const valuesForCheck: (Omit<IValueForCheck, 'type'> & {
					type: IValidType
				})[] = [
					{ title: 'id', value: brend.id, type: 'number' },
					{ title: 'title', value: brend.title, type: 'string' },
				]

				checkTruthyArray(valuesForCheck)
			})
		}
	})
})
