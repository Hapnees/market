import { FC, HTMLAttributes, useState } from 'react'
import cl from './TitleWithArrow.module.scss'
import arrowBlackIcon from '@/assets/arrow_black.svg'

interface IProps extends HTMLAttributes<HTMLDivElement> {
	onClick: () => void
	condition?: boolean
}

const TitleWithArrow: FC<IProps> = ({
	children,
	onClick,
	condition,
	...props
}) => {
	const [isClicked, setIsClicked] = useState(false)
	const onClickModif = () => {
		setIsClicked(!isClicked)
		onClick()
	}

	return (
		<div className={cl.wrapper} onClick={onClickModif} {...props}>
			<p>{children}</p>
			<img
				className={cl.title}
				src={arrowBlackIcon}
				alt=''
				style={{ transform: isClicked || condition ? 'rotate(180deg)' : '' }}
			/>
		</div>
	)
}

export default TitleWithArrow
