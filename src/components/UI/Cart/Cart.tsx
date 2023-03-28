import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import cartIcon from '@/assets/Header/cart.svg'
import cl from './Cart.module.scss'
import { useNavigate } from 'react-router'

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	numProducts: number
}

const Cart: FC<IProps> = ({ numProducts, ...props }) => {
	const navigate = useNavigate()

	const onClickCart = () => {
		navigate('/cart')
	}

	return (
		<div className={cl.imgContainer} onClick={onClickCart} {...props}>
			<div className={cl.circle}>
				<div className={cl.innerCircle}>{numProducts}</div>
			</div>
			<img src={cartIcon} alt='' className={cl.img} />
		</div>
	)
}

export default Cart
