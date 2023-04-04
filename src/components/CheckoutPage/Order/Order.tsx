import pencilIcon from '@/assets/CheckoutPage/pencil.svg'
import Button from '@/components/UI/Button/Button'
import VolumeBlock from '@/components/VolumeBlock/VolumeBlock'
import { IProductModif } from '@/types/product.interface'
import getTotalPrice from '@/utils/getTotalPrice'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import cl from './Order.module.scss'

interface IProps {
	products: IProductModif[]
}

const Order: FC<IProps> = ({ products }) => {
	const navigate = useNavigate()

	const totalPrice = getTotalPrice(products)

	const onClickEditOrder = () => {
		navigate('/cart')
	}

	return (
		<article className={cl.wrapper}>
			<h1 className={cl.title}>Ваш заказ</h1>

			<ul className={cl.orderList}>
				{products.map(product => (
					<li key={product.id}>
						<img src={product.img} alt='' className={cl.img} />

						<div>
							<VolumeBlock product={product} />
							<p className={cl.productTitle}>{product.title}</p>

							<p className={cl.price}>{product.price} ₸</p>
						</div>
					</li>
				))}
			</ul>

			<div className={cl.totalWrapper}>
				<p>ИТОГО</p>
				<p>{totalPrice} ₸</p>
			</div>
			<Button
				srcImg={pencilIcon}
				style={{ padding: '21px 30px' }}
				onClick={onClickEditOrder}
			>
				Редактировать заказ
			</Button>
		</article>
	)
}

export default Order
