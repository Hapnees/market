import { FC } from 'react'
import cl from './CompletedOrder.module.scss'
import crossIcon from '@/assets/CompletedOrder/cross.svg'
import checkIcon from '@/assets/CompletedOrder/check.svg'

interface IProps {
	onClickClose: () => void
}

const CompletedOrder: FC<IProps> = ({ onClickClose }) => {
	return (
		<div className={cl.wrapper}>
			<img src={crossIcon} alt='' className={cl.cross} onClick={onClickClose} />
			<img src={checkIcon} alt='' className={cl.img} />
			<h1 className={cl.title}>Спасибо за заказ</h1>
			<p className={cl.subtitle}>
				Наш менеджер свяжется с вами в ближайшее время
			</p>
		</div>
	)
}

export default CompletedOrder
