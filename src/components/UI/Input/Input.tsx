import {
	DetailedHTMLProps,
	forwardRef,
	InputHTMLAttributes,
	KeyboardEvent,
} from 'react'
import { FieldError } from 'react-hook-form'
import cl from './Input.module.scss'
import searcIcon from '@/assets/Search/search.svg'

interface IProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	srcImg?: string
	searchEvent?: () => void
	error?: FieldError
	isAbsolute?: boolean
}

const Input = forwardRef<HTMLInputElement, IProps>(
	({ srcImg = searcIcon, searchEvent, isAbsolute, error, ...props }, ref) => {
		const onKeyDownEnter = (event: KeyboardEvent<HTMLInputElement>) => {
			if (!searchEvent) return

			if (event.key === 'Enter') {
				searchEvent()
			}
		}

		return (
			<div className={cl.wrapper}>
				<input
					type='text'
					className={cl.input}
					placeholder='Поиск...'
					ref={ref}
					onKeyDown={event => onKeyDownEnter(event)}
					style={{ paddingRight: srcImg ? '55px' : '20px' }}
					{...props}
				/>
				{srcImg && (
					<img src={srcImg} alt='' className={cl.icon} onClick={searchEvent} />
				)}
				{error && (
					<p
						className={cl.error}
						style={{ position: isAbsolute ? 'absolute' : 'relative' }}
					>
						{error.message}
					</p>
				)}
			</div>
		)
	}
)

export default Input
