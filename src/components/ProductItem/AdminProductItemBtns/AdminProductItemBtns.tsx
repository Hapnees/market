import { useDeleteProductByIdMutation } from '@/api/admin-product.api'
import arrowIcon from '@/assets/arrow.svg'
import pencilIcon from '@/assets/pencil.svg'
import trashIcon from '@/assets/trash.svg'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getCategoryProducts } from '../utils/ProductItem.util'
import cl from './AdminProductItemBtns.module.scss'

interface IProps {
	product: IProduct
}

const AdminProductItemBtns: FC<IProps> = ({ product }) => {
	const { pathname } = useLocation()
	const categoryProducts = getCategoryProducts(pathname)
	const [deleteProduct] = useDeleteProductByIdMutation()

	const onClickTrash = (id: number) => {
		deleteProduct({ id, categoryProducts })
	}

	return (
		<div className={cl.wrapper}>
			<div className={cl.container}>
				<Link to={`/product/${product.id}`}>
					<img src={arrowIcon} alt='' className={cl.arrow} />
				</Link>
				<img
					src={trashIcon}
					alt=''
					className={`${cl.arrow} ${cl.trash}`}
					onClick={() => onClickTrash(product.id)}
				/>
				<Link to={`/admin/product/${product.id}`}>
					<img src={pencilIcon} alt='' className={`${cl.arrow} ${cl.pencil}`} />
				</Link>
			</div>
		</div>
	)
}

export default AdminProductItemBtns
