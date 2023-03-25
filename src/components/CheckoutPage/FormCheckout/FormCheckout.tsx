import CompletedOrder from '@/components/CompletedOrder/CompletedOrder'
import ModalWindow from '@/components/ModalWindow/ModalWindow'
import Button from '@/components/UI/Button/Button'
import Input from '@/components/UI/Input/Input'
import TextArea from '@/components/UI/TextArea/TextArea'
import { useActions } from '@/hooks/useActions'
import { ICheckout } from '@/types/product.interface'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import cl from './FormCheckout.module.scss'
import walletIcon from '@/assets/CheckoutPage/wallet.svg'
import deliveryIcon from '@/assets/CheckoutPage/delivery.svg'

const FormCheckout = () => {
	const { clearCart } = useActions()
	const navigate = useNavigate()

	const [isShowModal, setIsShowModal] = useState(false)

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<ICheckout>({ mode: 'onBlur' })

	const onClickClose = () => {
		setIsShowModal(false)
		clearCart()
		navigate('/')
	}

	// Действия при отправке формы
	const onSubmit: SubmitHandler<ICheckout> = async data => {
		setIsShowModal(true)
	}

	return (
		<form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
			{/*FIRST COLUMN*/}
			<article>
				{/*CONTACT DATA*/}
				<article className={cl.data}>
					<div>
						<p className={cl.title}>
							<span>1</span> Контактные данные
						</p>
						{/*NAME*/}
						<div className={cl.inputWrapper}>
							<p className={cl.inputTitle}>Имя*</p>
							<Input
								srcImg=''
								placeholder='Введите ваше имя'
								{...register('name', { required: 'Обязательное поле' })}
								error={errors.name}
							/>
						</div>
						{/*PHONE*/}
						<div className={cl.inputWrapper}>
							<p className={cl.inputTitle}>Телефон*</p>
							<Input
								srcImg=''
								placeholder='Введите ваш телефон'
								{...register('phone', { required: 'Обязательное поле' })}
								error={errors.phone}
							/>
						</div>
						{/*E-MAIL*/}
						<div className={cl.inputWrapper}>
							<p className={cl.inputTitle}>E-mail*</p>
							<Input
								srcImg=''
								placeholder='Введите ваш E-mail'
								{...register('email', { required: 'Обязательное поле' })}
								error={errors.email}
							/>
						</div>
						{/*ORG NAME*/}
						<div className={cl.inputWrapper}>
							<p className={cl.inputTitle}>Название организации</p>
							<Input
								srcImg=''
								placeholder='Введите название организации'
								{...register('orgName', { required: 'Обязательное поле' })}
								error={errors.orgName}
							/>
						</div>
					</div>
				</article>
				<article className={cl.data}>
					<p className={cl.title}>
						<span>2</span> Адрес доставки
					</p>
					{/*CITY*/}
					<div className={cl.inputWrapper}>
						<p className={cl.inputTitle}>Город</p>
						<Input
							srcImg=''
							placeholder='Введите ваше город'
							{...register('city', { required: 'Обязательное поле' })}
							error={errors.city}
						/>
					</div>
					{/*ADDRESS*/}
					<div className={cl.inputWrapper}>
						<p className={cl.inputTitle}>Адрес</p>
						<Input
							srcImg=''
							placeholder='Введите адрес доставки'
							{...register('address', { required: 'Обязательное поле' })}
							error={errors.address}
						/>
					</div>
				</article>
				<Button>Подтверждение заказа</Button>
			</article>
			{/*SECOND COLUMN*/}
			<article>
				{/*PAYMENT*/}
				<div className={cl.block}>
					<p className={cl.title} style={{ marginBottom: '15px' }}>
						<span>
							<img src={walletIcon} alt='' />
						</span>
						Оплата
					</p>

					<p className={cl.subtitle}>
						Принимаем оплату наличными, по карте и через расчетный счет.
					</p>
				</div>

				{/*DELIVERY*/}
				<article className={cl.blockList}>
					<div className={cl.block}>
						<p className={cl.title} style={{ marginBottom: '15px' }}>
							<span>
								<img src={deliveryIcon} alt='' />
							</span>
							Доставка
						</p>
						<p className={cl.subtitle}>
							Бесплатная доставка от <span>10 000 ₸</span> по области. Наша
							доставка работает ежедневно.
						</p>
					</div>
					{/*QUESTIONS*/}
					<div className={cl.block}>
						<p className={cl.title} style={{ marginBottom: '15px' }}>
							<span>?</span>
							возникли вопросы?
						</p>
						<p className={cl.subtitle}>
							Звоните: <span>+7 777 490 00 91</span> <br />
							Менеджер Вам ответит на все вопросы.
						</p>
					</div>
				</article>

				<div>
					<p className={cl.title}>
						<span>3</span> Дополнительно
					</p>
					<div className={cl.inputWrapper}>
						<p className={cl.inputTitle}>Комментарий</p>
						<TextArea
							placeholder='Введите ваш комментарий'
							{...register('comment')}
							error={errors.comment}
						/>
					</div>
				</div>
			</article>
			{isShowModal && (
				<ModalWindow>
					<CompletedOrder onClickClose={onClickClose} />
				</ModalWindow>
			)}
		</form>
	)
}

export default FormCheckout
