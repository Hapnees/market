import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import cl from './Button.module.scss'

interface IProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	srcImg?: string
	href?: string
}

const Button: FC<IProps> = ({ children, className, srcImg, ...props }) => {
	return (
		<button className={`${cl.wrapper} ${className}`} {...props}>
			{children && <p>{children}</p>}
			{srcImg && <img src={srcImg} alt='' />}
		</button>
	)
}

export default Button
