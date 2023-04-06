import FormCheckout from '@/components/CheckoutPage/FormCheckout/FormCheckout'
import { setFieldTest } from '@/test/formFieldTest.util'
import { toTestInputField } from '@/test/toTestInputField.util'
import renderModif from '@/utils/renderModif'
import { fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { Mock, beforeEach, describe, expect, it, vi } from 'vitest'

describe('<FormCheckout />', () => {
	const testName = 'Kevin'
	const testPhone = '+79271593625'
	const testEmail = 'test@test.ru'
	const testOrgName = 'someOrgName'
	const testCity = 'London'
	const testAddress = 'someAddress'

	let mockOnSubmit: Mock<any, any>

	let nameInput: HTMLElement
	let phoneInput: HTMLElement
	let emailInput: HTMLElement
	let orgNameInput: HTMLElement
	let cityInput: HTMLElement
	let addressInput: HTMLElement
	let submitBtn: HTMLElement

	beforeEach(() => {
		mockOnSubmit = vi.fn()
		const { getByPlaceholderText, getByText } = renderModif(
			<FormCheckout anotherOnSubmit={mockOnSubmit} />
		)
		nameInput = getByPlaceholderText('Введите ваше имя')
		phoneInput = getByPlaceholderText('Введите ваш телефон')
		emailInput = getByPlaceholderText('Введите ваш E-mail')
		orgNameInput = getByPlaceholderText('Введите название организации')
		cityInput = getByPlaceholderText('Введите ваше город')
		addressInput = getByPlaceholderText('Введите адрес доставки')
		submitBtn = getByText('Подтвердить заказ')
	})

	// Имя
	it('Имя', async () => {
		await toTestInputField(nameInput, testName, ['Обязательное поле'])
	})

	// Номер телефона
	it('Номер телефона', async () => {
		await toTestInputField(phoneInput, testPhone, [
			'Обязательное поле',
			'Некорректный номер телефона',
		])
	})

	// Email
	it('Email', async () => {
		await toTestInputField(emailInput, testEmail, ['Обязательное поле'])
	})

	// Название организации
	it('Название организации', async () => {
		await toTestInputField(orgNameInput, testOrgName, ['Обязательное поле'])
	})

	// Город
	it('Город', async () => {
		await toTestInputField(cityInput, testCity, ['Обязательное поле'])
	})

	// Адрес доставки
	it('Адрес доставки', async () => {
		await toTestInputField(addressInput, testAddress, ['Обязательное поле'])
	})

	///////////////////////////////////

	it('Форма отправляется', async () => {
		await setFieldTest(nameInput, testName)
		await setFieldTest(phoneInput, testPhone)
		await setFieldTest(emailInput, testEmail)
		await setFieldTest(orgNameInput, testOrgName)
		await setFieldTest(cityInput, testCity)
		await setFieldTest(addressInput, testAddress)

		await act(async () => {
			fireEvent.click(submitBtn)
		})

		expect(mockOnSubmit).toHaveBeenCalled()
	})
})
