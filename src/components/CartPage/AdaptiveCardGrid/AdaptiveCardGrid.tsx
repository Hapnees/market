import Button from '@/components/UI/Button/Button'
import ButtonAdjustment from '@/components/UI/ButtonAdjustment/ButtonAdjustment'
import VolumeBlock from '@/components/VolumeBlock/VolumeBlock'
import { IProductModif } from '@/types/product.interface'
import { FC } from 'react'
import trashIcon from '@/assets/trash.svg'
import cl from './AdaptiveCardGrid.module.scss'
import { useActions } from '@/hooks/useActions'

interface IProps {
	products: IProductModif[]
}

const AdaptiveCardGrid: FC<IProps> = ({ products }) => {
	const { changeQuantity } = useActions()

	const onClickPlus = (id: number) => {
		changeQuantity({ id, quantity: 1 })
	}

	const onClickMinus = (id: number) => {
		changeQuantity({ id, quantity: -1 })
	}

	return (
		<ul className={cl.list}>
			{products.map(product => (
				<li key={product.id}>
					<img src={product.img} alt='' className={cl.img} />
					<VolumeBlock product={product} />
					<p className={cl.title}>{product.title}</p>
					<p className={cl.description}>{product.description}</p>
					<div className={cl.controls}>
						<div className={cl.adjustmentBtnsWrapper}>
							<ButtonAdjustment onClick={() => onClickMinus(product.id)}>
								-
							</ButtonAdjustment>
							<p>{product.quantity}</p>
							<ButtonAdjustment onClick={() => onClickPlus(product.id)}>
								+
							</ButtonAdjustment>
						</div>
						<div className={cl.price}>
							{(product.price * product.quantity).toFixed(2)} ₸
						</div>
						<Button srcImg={trashIcon} className={cl.trashBtn}></Button>
					</div>
				</li>
			))}
		</ul>
	)
}

export default AdaptiveCardGrid
