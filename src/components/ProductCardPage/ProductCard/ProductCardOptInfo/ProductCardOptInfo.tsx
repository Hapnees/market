import List from '@/components/UI/List/List'
import { IProductInfo } from '@/types/list.interface'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

type IProps = Pick<IProduct, 'producer' | 'brend' | 'barcode'>

const ProductCardOptInfo: FC<IProps> = ({ producer, brend, barcode }) => {
	const list: IProductInfo[] = [
		{ field: 'Производитель', value: producer },
		{ field: 'Бренд', value: brend },
		{ field: 'Штрихкод', value: barcode },
	]

	return <List list={list} />
}

export default ProductCardOptInfo
