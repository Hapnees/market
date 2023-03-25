import { FC, memo, useEffect, useRef, useState } from 'react'
import Input from '../Input/Input'
import cl from './Radio.module.scss'

interface IProps {
	title: string
	listElements: string[]
	callback?: Function
	defaultValue?: string
}

const Radio: FC<IProps> = ({
	title,
	listElements: list,
	callback,
	defaultValue,
}) => {
	const [name, _] = useState(Date.now())
	const inputRef = useRef<HTMLInputElement>(null)
	const [currentList, setCurrentList] = useState<string[]>(list)

	const searchEvent = () => {
		if (!inputRef.current?.value) {
			setCurrentList(list)
			return
		}

		const newList = list.filter(el =>
			el.toLowerCase().includes(inputRef.current!.value.toLowerCase())
		)
		setCurrentList(newList)
	}

	const onChangeRadio = (value: string) => {
		if (callback) {
			callback(value)
		}
	}

	useEffect(() => {
		setCurrentList(list)
	}, [list])

	return (
		<div>
			<p className={cl.title}>{title}</p>
			<Input
				style={{ marginBottom: '10px' }}
				ref={inputRef}
				searchEvent={searchEvent}
			/>
			<ul className={cl.list}>
				{currentList.map(el => (
					<li key={el}>
						<input
							type='radio'
							name={name.toString()}
							id={el}
							onChange={event => onChangeRadio(event.target.id)}
							defaultChecked={el === defaultValue}
						/>
						<label htmlFor={el}>{el}</label>
					</li>
				))}
			</ul>
		</div>
	)
}

export default memo(Radio)
