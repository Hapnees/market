import { baseApi } from '@/api/api'
import { store } from '@/store/store'
import { IProducer } from '@/types/filters.type.interface'
import { beforeAll, describe, expect, it } from 'vitest'
import { IValidType, IValueForCheck } from './api.test.interface'
import {
	checkObjectHaveProperties,
	checkTruthyArray,
	prodcuerRequiredProperties,
} from './utils/api.test.utils'

///////////////////////////////////////////////////////////////////////////////
// Хостинг, на который я залил бэкенд немного тормознутный, поэтому порой ответ приходит очень долго из-за чего тесты могут иногда падать
// Запускайте тесты несколько раз
///////////////////////////////////////////////////////////////////////////////

const api = baseApi

describe('API-PRODUCERS', () => {
	let producers: IProducer[] | undefined

	beforeAll(async () => {
		producers = await store
			.dispatch(api.endpoints.getProducers.initiate())
			.then(res => res.data)
	})

	it('Получаем производителей', () => {
		expect(producers?.length).toBeTruthy()
	})

	it('Свойства производителей', () => {
		if (producers) {
			producers.forEach(producer => {
				checkObjectHaveProperties(producer, prodcuerRequiredProperties)
			})
		}
	})

	it('Типы свойств производителей', () => {
		if (producers) {
			producers.forEach(producer => {
				const valuesForCheck: (Omit<IValueForCheck, 'type'> & {
					type: IValidType
				})[] = [
					{ title: 'id', value: producer.id, type: 'number' },
					{ title: 'title', value: producer.title, type: 'string' },
				]

				checkTruthyArray(valuesForCheck)
			})
		}
	})
})
