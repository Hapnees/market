import { ChangeEvent, FC, useState } from 'react'
import cl from './Switcher.module.scss'

interface IElement {
	id: number
	color: string
}

interface IProps {
	color?: string
	selectedColor?: string
	size?: number
}

const Switcher: FC<IProps> = ({
	color = '#3f4e651A',
	selectedColor = '#fff',
	size = 4,
}) => {
	const [switcherName, _] = useState(Date.now())
	const [elements, setElements] = useState<IElement[]>(
		new Array(size)
			.fill(0)
			.map((_, idx) => ({ id: idx, color: idx === 0 ? selectedColor : color }))
	)

	const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		const copy = [...elements]
		const id = +event.target.id.split('-')[1]
		const tmpCopy = copy.map(el => ({ ...el, color }))
		tmpCopy[id].color = selectedColor
		setElements(tmpCopy)
	}

	return (
		<div className={cl.switcher}>
			{elements.map(el => (
				<div key={el.id}>
					<input
						type='radio'
						name={`${switcherName}`}
						id={`${switcherName}-${el.id}`}
						onChange={event => onChangeInput(event)}
						defaultChecked={el.id === 0}
					/>
					<label
						htmlFor={`${switcherName}-${el.id}`}
						style={{ backgroundColor: el.color }}
					></label>
				</div>
			))}
		</div>
	)
}

export default Switcher
