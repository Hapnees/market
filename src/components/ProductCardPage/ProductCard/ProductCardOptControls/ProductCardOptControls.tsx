import cl from './ProductCardOptControls.module.scss'
import shareIcon from '@/assets/ProductCard/share.svg'
import priceListIcon from '@/assets/ProductCard/priceList.svg'

const ProductCardOptControls = () => {
	return (
		<article className={cl.wrapper}>
			<div>
				<img src={shareIcon} alt='' />
			</div>
			<div>
				<p>
					При покупке от <span className={cl.price}>10 000 ₸</span> бесплатная
					доставка по Кокчетаву и области
				</p>
			</div>
			<div className={cl.priceListBtn}>
				<p>Прайс-лист</p>
				<img src={priceListIcon} alt='' width={12} height={12} />
			</div>
		</article>
	)
}

export default ProductCardOptControls
