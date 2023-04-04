import trashIcon from '@/assets/CatalogPage/trash.svg'
import Button from '@/components/UI/Button/Button'
import ButtonAdjustment from '@/components/UI/ButtonAdjustment/ButtonAdjustment'
import VolumeBlock from '@/components/VolumeBlock/VolumeBlock'
import { useActions } from '@/hooks/useActions'
import { IProductModif } from '@/types/product.interface'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cl from './CartGrid.module.scss'

interface IProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	> {
	products: IProductModif[]
}

const CartGrid: FC<IProps> = ({ className, products, ...props }) => {
	const { changeQuantity, removeProductFromCart: removeProduct } = useActions()

	const onClickDecreaseQuantity = (id: number) => {
		changeQuantity({ id, quantity: -1 })
	}

	const onClickIncreaseQuantity = (id: number) => {
		changeQuantity({ id, quantity: 1 })
	}

	const onClickTrash = (id: number) => removeProduct(id)

	return (
		<ul className={`${cl.list} ${className}`} {...props}>
			{products.map(product => (
				<li key={product.id}>
					<img src={product.img} alt='Изображение не найдено' />

					<article className={cl.info}>
						{/*LEFT SIDE*/}
						<div>
							<VolumeBlock product={product} />
							<p className={cl.title}>{product.title}</p>
							<p className={cl.description}>{product.description}</p>
						</div>

						{/*RIGHT SIDE*/}
						<div className={cl.rightSide}>
							<div className={cl.controls}>
								<ButtonAdjustment
									onClick={() => onClickDecreaseQuantity(product.id)}
								>
									-
								</ButtonAdjustment>
								<p>{product.quantity}</p>
								<ButtonAdjustment
									onClick={() => onClickIncreaseQuantity(product.id)}
								>
									+
								</ButtonAdjustment>
							</div>

							<div className={cl.price}>
								{(product.price * product.quantity).toFixed(2)} ₸
							</div>

							<div>
								<Button
									srcImg={trashIcon}
									style={{ padding: '20px' }}
									onClick={() => onClickTrash(product.id)}
								></Button>
							</div>
						</div>
					</article>
				</li>
			))}
		</ul>
	)
}

export default CartGrid
