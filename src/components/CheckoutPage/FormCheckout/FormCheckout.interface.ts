import { ICheckout } from '@/types/product.interface'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface IFormCheckoutComponents {
	register: UseFormRegister<ICheckout>
	errors: FieldErrors<ICheckout>
}
