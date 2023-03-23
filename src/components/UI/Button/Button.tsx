import { FC, HTMLAttributes } from 'react'
import cl from './Button.module.scss'

interface IProps extends HTMLAttributes<HTMLDivElement> {
	srcImg?: string
	href?: string
}

const Button: FC<IProps> = ({ children, srcImg, ...props }) => {
	return (
		<div className={cl.wrapper} {...props}>
			{children && <p>{children}</p>}
			{srcImg && <img src={srcImg} alt='' />}
		</div>
	)
}

export default Button
