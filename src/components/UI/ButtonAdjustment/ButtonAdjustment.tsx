import { FC, HTMLAttributes } from 'react'
import cl from './ButtonAdjustment.module.scss'

const ButtonAdjustment: FC<HTMLAttributes<HTMLButtonElement>> = ({
	children,
	...props
}) => {
	return (
		<button className={cl.button} {...props}>
			{children}
		</button>
	)
}

export default ButtonAdjustment
