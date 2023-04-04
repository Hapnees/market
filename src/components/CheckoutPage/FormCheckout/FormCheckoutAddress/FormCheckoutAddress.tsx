import Input from '@/components/UI/Input/Input'
import { FC } from 'react'
import { IFormCheckoutComponents } from '../FormCheckout.interface'
import outerCl from '../FormCheckout.module.scss'

const FormCheckoutAddress: FC<IFormCheckoutComponents> = ({
	errors,
	register,
}) => {
	return (
		<article className={outerCl.data}>
			<p className={outerCl.title}>
				<span>2</span> Адрес доставки
			</p>
			{/*CITY*/}
			<div className={outerCl.inputWrapper}>
				<p className={outerCl.inputTitle}>Город</p>
				<Input
					srcImg=''
					placeholder='Введите ваше город'
					{...register('city', { required: 'Обязательное поле' })}
					error={errors.city}
				/>
			</div>
			{/*ADDRESS*/}
			<div className={outerCl.inputWrapper}>
				<p className={outerCl.inputTitle}>Адрес</p>
				<Input
					srcImg=''
					placeholder='Введите адрес доставки'
					{...register('address', { required: 'Обязательное поле' })}
					error={errors.address}
				/>
			</div>
		</article>
	)
}

export default FormCheckoutAddress
