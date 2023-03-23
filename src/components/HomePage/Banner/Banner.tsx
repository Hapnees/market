import { useNavigate } from 'react-router'
import cl from './Banner.module.scss'

const Banner = () => {
	const navigate = useNavigate()

	const onClickCatalogBtn = () => {
		navigate('/catalog')
	}

	return (
		<article className={cl.wrapper}>
			<div className={cl.gradient}></div>

			<div className={cl.content}>
				<p className={cl.title}>Бытовая химия, косметика и хозтовары</p>
				<p className={cl.subtitle}>оптом по кокчетаву и области</p>

				<button className={cl.catalogBtn} onClick={onClickCatalogBtn}>
					в каталог
				</button>

				<ul className={cl.controlsList}>
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
			</div>
		</article>
	)
}

export default Banner
