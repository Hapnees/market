import cl from './ProductCardOptControls.module.scss'

const ProductCardOptControls = () => {
	return (
		<article className={cl.wrapper}>
			<div>
				<img src='../ProductCard/share.svg' alt='' />
			</div>
			<div>
				<p>
					При покупке от <span className={cl.price}>10 000 ₸</span> бесплатная
					доставка по Кокчетаву и области
				</p>
			</div>
			<div className={cl.priceListBtn}>
				<p>Прайс-лист</p>
				<img src='../ProductCard/priceList.svg' alt='' width={12} height={12} />
			</div>
		</article>
	)
}

export default ProductCardOptControls
