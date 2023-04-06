import searchIcon from '@/assets/Search/search.svg'
import {
	DetailedHTMLProps,
	forwardRef,
	InputHTMLAttributes,
	KeyboardEvent,
} from 'react'
import { FieldError } from 'react-hook-form'
import cl from './Input.module.scss'

type IStringArgFunc = (value: string) => void
type IEmptyArgFunc = () => void

type IInputType = IStringArgFunc | IEmptyArgFunc

interface IProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	srcImg?: string
	searchEvent?: IInputType
	error?: string
	isAbsolute?: boolean
}

const Input = forwardRef<HTMLInputElement, IProps>(
	({ srcImg = searchIcon, searchEvent, isAbsolute, error, ...props }, ref) => {
		const onKeyDownEnter = (event: KeyboardEvent<HTMLInputElement>) => {
			if (!searchEvent) return

			if (event.key === 'Enter') {
				if (ref && searchEvent.length > 0) {
					searchEvent(
						(ref as React.RefObject<HTMLInputElement>).current?.value || ''
					)
					return
				}
				;(searchEvent as IEmptyArgFunc)()
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
					<img
						src={srcImg}
						alt=''
						className={cl.icon}
						onClick={() => {
							if (ref && searchEvent)
								searchEvent(
									(ref as React.RefObject<HTMLInputElement>).current?.value ||
										''
								)
						}}
					/>
				)}
				{error && (
					<p
						className={cl.error}
						style={{ position: isAbsolute ? 'absolute' : 'relative' }}
					>
						{error}
					</p>
				)}
			</div>
		)
	}
)

export default Input
