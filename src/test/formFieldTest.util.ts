import { fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

export const setFieldTest = async (htmlElement: HTMLElement, value: string) =>
	await act(async () => {
		fireEvent.change(htmlElement, {
			target: { value: value },
		})

		fireEvent.blur(htmlElement)
	})
