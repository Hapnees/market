import { useNavigate } from 'react-router'
import cl from './Banner.module.scss'
import bannerImg from '@/assets/HomePage/banner.png'
import BannerControls from '../BannerControls/BannerControls'
import BannerControlsAdaptive from '../BannerControlsAdaptive/BannerControlsAdaptive'

const Banner = () => {
	const navigate = useNavigate()

	const onClickCatalogBtn = () => {
		navigate({ pathname: '/catalog', search: 'type=Косметика и гигиена' })
	}

	return (
		<article className={cl.wrapper}>
			<img src={bannerImg} alt='' className={cl.bannerImg} />
			<div className={cl.contentWrapper}>
				<div className={cl.gradient}></div>

				<div className={cl.content}>
					<p className={cl.title}>Бытовая химия, косметика и хозтовары</p>
					<p className={cl.subtitle}>оптом по кокчетаву и области</p>

					<button className={cl.catalogBtn} onClick={onClickCatalogBtn}>
						в каталог
					</button>

					<BannerControls />
				</div>
			</div>
			<BannerControlsAdaptive />
		</article>
	)
}

export default Banner
