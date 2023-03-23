import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import cl from './InputPrice.module.scss'

const InputPrice: FC<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ ...props }) => {
	return <input type='number' className={cl.input} {...props} />
}

export default InputPrice
