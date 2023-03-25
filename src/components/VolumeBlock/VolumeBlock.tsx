import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import cl from './VolumeBlock.module.scss'
import getTypeSize from '@/utils/sizeTypeSpecifier'
import volumeImg1 from '@/assets/ProductItem/volume_1.svg'
import volumeImg2 from '@/assets/ProductItem/volume_2.svg'

interface IProps {
	product: IProduct
}

const VolumeBlock: FC<IProps> = ({ product }) => {
	const iconSrc =
		getTypeSize(product.typeSize) === 'Объём'
			? volumeImg1
			: getTypeSize(product.typeSize) === 'Вес'
			? volumeImg2
			: ''

	return (
		<div className={cl.container}>
			<img src={iconSrc} alt='' />
			<p>
				{product.amount > 1 && `${product.amount}X`}
				{product.size} {product.typeSize}
			</p>
		</div>
	)
}

export default VolumeBlock
