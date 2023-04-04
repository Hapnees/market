import deliveryIcon from '@/assets/CheckoutPage/delivery.svg'
import walletIcon from '@/assets/CheckoutPage/wallet.svg'
import pencilIcon from '@/assets/pencil.svg'
import CompletedOrder from '@/components/CompletedOrder/CompletedOrder'
import ModalWindow from '@/components/ModalWindow/ModalWindow'
import Button from '@/components/UI/Button/Button'
import Input from '@/components/UI/Input/Input'
import TextArea from '@/components/UI/TextArea/TextArea'
import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import { ICheckout } from '@/types/product.interface'
import getTotalPrice from '@/utils/getTotalPrice'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import cl from './FormCheckout.module.scss'
import FormCheckoutAddress from './FormCheckoutAddress/FormCheckoutAddress'
import FormCheckoutContact from './FormCheckoutContact/FormCheckoutContact'
import FormCheckoutSecondColumn from './FormCheckoutSecondColumn/FormCheckoutSecondColumn'

const FormCheckout = () => {
	const { clearCart } = useActions()
	const navigate = useNavigate()
	const { products } = useAppSelector(state => state.cart)

	const totalPrice = getTotalPrice(products)

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
				<FormCheckoutContact register={register} errors={errors} />
				<FormCheckoutAddress register={register} errors={errors} />
				<Button className={cl.adaptiveOrderButton}>
					Подтв ерждение заказа
				</Button>
			</article>

			<FormCheckoutSecondColumn
				register={register}
				errorComment={errors.comment}
			/>

			<article className={cl.acceptOrderWrapper}>
				<div className={cl.priceWrapper}>
					<p className={cl.price}>{totalPrice} ₸</p>
					<Button srcImg={pencilIcon} className={cl.pencilButton}></Button>
				</div>
				<Button className={cl.acceptOrderButton}>Подтвердить заказ</Button>
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
