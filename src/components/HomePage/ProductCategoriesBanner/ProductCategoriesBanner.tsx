import arrowIcon from '@/assets/HomePage/arrow.svg'
import bannerImage from '@/assets/ProductCategories/banner.png'
import womanImage from '@/assets/ProductCategories/woman.png'
import Button from '@/components/UI/Button/Button'
import Switcher from '@/components/UI/Switcher/Switcher'
import cl from './ProductCategoriesBanner.module.scss'

const ProductCategoriesBanner = () => {
	return (
		<article className={cl.wrapper}>
			<img src={bannerImage} alt='' className={cl.bannerImage} />
			<div className={cl.content}>
				<p className={cl.suptitle}>*Акция действует до 04/09/22</p>
				<p className={cl.title}>Название Акции</p>
				<p className={cl.subtitle}>
					Условия акции в пару строк, Условия акции в пару строк, Условия акции
					в пару строк
				</p>

				<Button className={cl.adaptiveBtn}>ПРИНЯТЬ УЧАСТИЕ</Button>
			</div>
			<img src={womanImage} alt='' className={cl.woman} />

			<div className={cl.arrows}>
				<div>
					<img src={arrowIcon} alt='' />
				</div>
				<div>
					<img src={arrowIcon} alt='' />
				</div>
			</div>

			<div className={cl.switcherWrapper}>
				<Switcher />
			</div>

			<div className={`${cl.switcherWrapper} ${cl.adaptiveSwitcher}`}>
				<Switcher selectedColor='#ffc85e' />
			</div>
		</article>
	)
}

export default ProductCategoriesBanner
