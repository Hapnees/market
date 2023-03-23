import TitleWithArrow from '@/components/UI/TitleWithArrow/TitleWithArrow'
import { FC, useState } from 'react'
import cl from './ProductCardDescrip.module.scss'

interface IProps {
	description: string
}

const ProductCardDescrip: FC<IProps> = ({ description }) => {
	const [isShow, setIsShow] = useState(true)

	const onClickArrow = () => {
		setIsShow(!isShow)
	}

	return (
		<article className={cl.wrapper}>
			<TitleWithArrow onClick={onClickArrow}>Описание</TitleWithArrow>

			{isShow && <p className={cl.description}>{description}</p>}
		</article>
	)
}

export default ProductCardDescrip
