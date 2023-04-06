import Input from '@/components/UI/Input/Input'
import { FC } from 'react'
import { IFormCheckoutComponents } from '../FormCheckout.interface'
import outerCl from '../FormCheckout.module.scss'

const phonePattern = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g

const FormCheckoutContact: FC<IFormCheckoutComponents> = ({
	register,
	errors,
}) => {
	return (
		<article className={outerCl.data}>
			<div>
				<p className={outerCl.title}>
					<span>1</span> Контактные данные
				</p>
				{/*NAME*/}
				<div className={outerCl.inputWrapper}>
					<p className={outerCl.inputTitle}>Имя*</p>
					<Input
						srcImg=''
						placeholder='Введите ваше имя'
						{...register('name', {
							required: 'Обязательное поле',
						})}
						error={errors.name?.message}
					/>
				</div>
				{/*PHONE*/}
				<div className={outerCl.inputWrapper}>
					<p className={outerCl.inputTitle}>Телефон*</p>
					<Input
						srcImg=''
						placeholder='Введите ваш телефон'
						{...register('phone', {
							required: 'Обязательное поле',
							pattern: {
								value: phonePattern,
								message: 'Некорректный номер телефона',
							},
						})}
						error={errors.phone?.message}
					/>
				</div>
				{/*E-MAIL*/}
				<div className={outerCl.inputWrapper}>
					<p className={outerCl.inputTitle}>E-mail*</p>
					<Input
						srcImg=''
						placeholder='Введите ваш E-mail'
						{...register('email', { required: 'Обязательное поле' })}
						error={errors.email?.message}
					/>
				</div>
				{/*ORG NAME*/}
				<div className={outerCl.inputWrapper}>
					<p className={outerCl.inputTitle}>Название организации</p>
					<Input
						srcImg=''
						placeholder='Введите название организации'
						{...register('orgName', { required: 'Обязательное поле' })}
						error={errors.orgName?.message}
					/>
				</div>
			</div>
		</article>
	)
}

export default FormCheckoutContact
