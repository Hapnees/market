import { baseApi } from '@/api/api'
import { store } from '@/store/store'
import { IType } from '@/types/filters.type.interface'
import { beforeAll, describe, expect, it } from 'vitest'
import { IValidType, IValueForCheck } from './api.test.interface'
import {
	brendRequiredProperties,
	checkObjectHaveProperties,
	checkTruthyArray,
	typeRequiredProperties,
} from './utils/api.test.utils'

///////////////////////////////////////////////////////////////////////////////
// Хостинг, на который я залил бэкенд немного тормознутный, поэтому порой ответ приходит очень долго из-за чего тесты могут иногда падать
// Запускайте тесты несколько раз
///////////////////////////////////////////////////////////////////////////////

const api = baseApi

describe('API-TYPES', () => {
	let types: IType[] | undefined

	beforeAll(async () => {
		types = await store
			.dispatch(api.endpoints.getTypes.initiate())
			.then(res => res.data)
	})

	it('Получаем типы ухода', () => {
		expect(types?.length).toBeTruthy()
	})

	it('Свойства типов ухода', () => {
		if (types) {
			types.forEach(type => {
				checkObjectHaveProperties(type, typeRequiredProperties)
			})
		}
	})

	it('Типы свойств типов ухода', () => {
		if (types) {
			types.forEach(type => {
				const valuesForCheck: (Omit<IValueForCheck, 'type'> & {
					type: IValidType
				})[] = [
					{ title: 'id', value: type.id, type: 'number' },
					{ title: 'title', value: type.title, type: 'string' },
				]

				checkTruthyArray(valuesForCheck)
			})
		}
	})
})
