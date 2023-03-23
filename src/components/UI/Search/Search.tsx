import {
	DetailedHTMLProps,
	forwardRef,
	InputHTMLAttributes,
	KeyboardEvent,
} from 'react'
import cl from './Search.module.scss'

interface IProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	srcImg?: string
	searchEvent?: () => void
}

const Search = forwardRef<HTMLInputElement, IProps>(
	({ srcImg = '../Search/search.svg', searchEvent, ...props }, ref) => {
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
					{...props}
				/>
				{srcImg && (
					<img src={srcImg} alt='' className={cl.icon} onClick={searchEvent} />
				)}
			</div>
		)
	}
)

export default Search
