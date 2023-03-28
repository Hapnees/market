import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import arrowIcon from '@/assets/arrow_2.svg'
import cl from './BackButton.module.scss'

const BackButton: FC<
	DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, ...props }) => {
	return (
		<div className={`${cl.wrapper} ${className}`} {...props}>
			<img src={arrowIcon} alt='' className={cl.arrow} />
			<p>Назад</p>
		</div>
	)
}

export default BackButton
