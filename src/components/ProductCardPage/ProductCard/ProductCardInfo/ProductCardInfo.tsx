import VolumeBlock from '@/components/VolumeBlock/VolumeBlock'
import { IProduct } from '@/types/product.interface'
import modifTitle from '@/utils/modifTitle'
import { FC } from 'react'
import ProductCardCharacts from '../ProductCardCharacts/ProductCardCharacts'
import ProductCardDescrip from '../ProductCardDescrip/ProductCardDescrip'
import ProductCardMainControls from '../ProductCardMainControls/ProductCardMainControls'
import ProductCardOptControls from '../ProductCardOptControls/ProductCardOptControls'
import ProductCardOptInfo from '../ProductCardOptInfo/ProductCardOptInfo'
import cl from './ProductCardInfo.module.scss'

interface IProps {
	product: IProduct
}

const ProductCardInfo: FC<IProps> = ({ product }) => {
	const { firstLetter, title } = modifTitle(product.title)
	const inStock = product.stock ? 'В наличии' : 'Нет в наличии'

	return (
		<article className={cl.wrapper}>
			<p
				className={cl.stock}
				style={{ color: product.stock ? '#1fd85d' : '#d81f1f' }}
			>
				{inStock}
			</p>

			<p className={cl.title}>
				<span>{firstLetter}</span> {title}
			</p>

			<VolumeBlock product={product} />

			{/*CONTROLS*/}
			<ProductCardMainControls product={product} />
			<ProductCardOptControls />

			<ProductCardOptInfo
				barcode={product.barcode}
				brend={product.brend}
				producer={product.producer}
			/>

			{/*DESCRIPTION BLOCK*/}
			<ProductCardDescrip description={product.description} />

			{/*CHARACTERISTICS BLOCK*/}
			<ProductCardCharacts product={product} />
		</article>
	)
}

export default ProductCardInfo
