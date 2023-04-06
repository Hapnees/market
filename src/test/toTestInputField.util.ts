import { expect } from 'vitest'
import { setFieldTest } from './formFieldTest.util'

export const toTestInputField = async (
	htmlElement: HTMLElement,
	value: string,
	errorMessages: string[]
) => {
	await setFieldTest(htmlElement, value)

	errorMessages.forEach(message => {
		expect(htmlElement.closest('div')?.innerHTML).not.toMatch(message)
	})
}
