import Button from '@/components/UI/Button/Button'
import Switcher from '@/components/UI/Switcher/Switcher'
import cl from './ProductCategoriesBanner.module.scss'
import bannerImage from '@/assets/ProductCategories/banner.png'
import womanImage from '@/assets/ProductCategories/woman.png'
import arrowIcon from '@/assets/HomePage/arrow.svg'

const ProductCategoriesBanner = () => {
	return (
		<article className={cl.wrapper}>
			<img src={bannerImage} alt='' />
			<div className={cl.content}>
				<p className={cl.suptitle}>*Акция действует до 04/09/22</p>
				<p className={cl.title}>Название Акции</p>
				<p className={cl.subtitle}>
					Условия акции в пару строк, Условия акции в пару строк, Условия акции
					в пару строк
				</p>

				<Button>ПРИНЯТЬ УЧАСТИЕ</Button>
			</div>
			<img src={womanImage} alt='' className={cl.woman} />

			<div className={cl.arrows}>
				<img src={arrowIcon} alt='' />
				<img src={arrowIcon} alt='' />
			</div>

			<div className={cl.switcherWrapper}>
				<Switcher />
			</div>
		</article>
	)
}

export default ProductCategoriesBanner
