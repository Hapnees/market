import cl from './BannerControls.module.scss'

const BannerControls = () => {
	return (
		<ul className={cl.list}>
			<li>
				<button>+</button>
				<p>Только самые выгодные предложения</p>
			</li>
			<li>
				<button>+</button>
				<p>
					Бесплатная доставка по <span>Кокчетаву от 10 тыс ₸</span>
				</p>
			</li>
		</ul>
	)
}

export default BannerControls
