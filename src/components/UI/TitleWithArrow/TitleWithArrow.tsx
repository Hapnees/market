import { FC, HTMLAttributes, PropsWithChildren, useState } from 'react'
import cl from './TitleWithArrow.module.scss'

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
				src='../arrow_black.svg'
				alt=''
				style={{ transform: isClicked || condition ? 'rotate(180deg)' : '' }}
			/>
		</div>
	)
}

export default TitleWithArrow
