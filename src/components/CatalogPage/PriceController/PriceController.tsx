import InputPrice from '@/components/UI/InputPrice/InputPrice'
import { FC } from 'react'
import cl from './PriceController.module.scss'

interface IProps {
	minPrice: string | number
	maxPrice: string | number
	onChangeMinPrice: (value: string) => void
	onChangeMaxPrice: (value: string) => void
}

const PriceController: FC<IProps> = ({
	maxPrice,
	minPrice,
	onChangeMaxPrice,
	onChangeMinPrice,
}) => {
	return (
		<article>
			<p className={cl.price}>
				<span>Цена</span>
				<span>₸</span>
			</p>

			<div className={cl.priceController}>
				<InputPrice
					value={minPrice}
					onChange={event => onChangeMinPrice(event.target.value)}
					placeholder='0'
				/>
				<p>-</p>
				<InputPrice
					value={maxPrice}
					onChange={event => onChangeMaxPrice(event.target.value)}
					placeholder='10 000'
				/>
			</div>
		</article>
	)
}

export default PriceController
