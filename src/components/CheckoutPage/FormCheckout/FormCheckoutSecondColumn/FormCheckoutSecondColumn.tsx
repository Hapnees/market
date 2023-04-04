import deliveryIcon from '@/assets/CheckoutPage/delivery.svg'
import walletIcon from '@/assets/CheckoutPage/wallet.svg'
import TextArea from '@/components/UI/TextArea/TextArea'
import { ICheckout } from '@/types/product.interface'
import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import outerCl from '../FormCheckout.module.scss'
import cl from './FormCheckoutSecondColumn.module.scss'

interface IProps {
	register: UseFormRegister<ICheckout>
	errorComment: FieldError | undefined
}

const FormCheckoutSecondColumn: FC<IProps> = ({ register, errorComment }) => {
	return (
		<article className={cl.wrapper}>
			{/*DELIVERY*/}
			<article className={cl.blockList}>
				{/*PAYMENT*/}
				<div className={cl.block}>
					<p className={outerCl.title} style={{ marginBottom: '15px' }}>
						<span>
							<img src={walletIcon} alt='' />
						</span>
						Оплата
					</p>

					<p className={cl.subtitle}>
						Принимаем оплату наличными, по карте и через расчетный счет.
					</p>
				</div>

				<div className={cl.block}>
					<p className={outerCl.title} style={{ marginBottom: '15px' }}>
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
					<p className={outerCl.title} style={{ marginBottom: '15px' }}>
						<span>?</span>
						возникли вопросы?
					</p>
					<p className={cl.subtitle}>
						Звоните: <span>+7 777 490 00 91</span> <br />
						Менеджер Вам ответит на все вопросы.
					</p>
				</div>
			</article>

			<div className={cl.adaptiveComment}>
				<p className={outerCl.title}>
					<span>3</span> Дополнительно
				</p>
				<div className={outerCl.inputWrapper}>
					<p className={outerCl.inputTitle}>Комментарий</p>
					<TextArea
						placeholder='Введите ваш комментарий'
						{...register('comment')}
						error={errorComment}
					/>
				</div>
			</div>
		</article>
	)
}

export default FormCheckoutSecondColumn
