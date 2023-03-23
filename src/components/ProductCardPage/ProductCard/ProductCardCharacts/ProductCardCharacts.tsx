import List from '@/components/UI/List/List'
import TitleWithArrow from '@/components/UI/TitleWithArrow/TitleWithArrow'
import { IProductInfo } from '@/types/list.interface'
import { IProduct } from '@/types/product.interface'
import getTypeSize from '@/utils/sizeTypeSpecifier'
import { FC, useState } from 'react'

interface IProps {
	product: IProduct
}

const ProductCardCharacts: FC<IProps> = ({ product }) => {
	const typesValue = product.types.join(',')
	const list: IProductInfo[] = [
		{ field: 'Тип', value: typesValue },
		{ field: 'Бренд', value: product.brend },
		{ field: 'Штрихкод', value: product.barcode },
		{
			field: getTypeSize(product.typeSize),
			value: `${product.size} ${product.typeSize}`,
		},
		{ field: 'Кол-во в коробке', value: product.amount },
	]

	const [isShow, setIsShow] = useState(true)

	const onClickArrow = () => {
		setIsShow(!isShow)
	}

	return (
		<article>
			<TitleWithArrow onClick={onClickArrow}>Характеристики</TitleWithArrow>
			{isShow && <List list={list} />}
		</article>
	)
}

export default ProductCardCharacts
