import Button from '@/components/UI/Button/Button'
import Switcher from '@/components/UI/Switcher/Switcher'
import { MouseEvent } from 'react'
import cl from './ProductCategoriesBanner.module.scss'

const ProductCategoriesBanner = () => {
	return (
		<article className={cl.wrapper}>
			<img src='../ProductCategories/banner.png' alt='' />
			<div className={cl.content}>
				<p className={cl.suptitle}>*Акция действует до 04/09/22</p>
				<p className={cl.title}>Название Акции</p>
				<p className={cl.subtitle}>
					Условия акции в пару строк, Условия акции в пару строк, Условия акции
					в пару строк
				</p>

				<Button>ПРИНЯТЬ УЧАСТИЕ</Button>
			</div>
			<img src='../ProductCategories/woman.png' alt='' className={cl.woman} />

			<div className={cl.arrows}>
				<img src='../HomePage/arrow.svg' alt='' />
				<img src='../HomePage/arrow.svg' alt='' />
			</div>

			<div className={cl.switcherWrapper}>
				<Switcher />
			</div>
		</article>
	)
}

export default ProductCategoriesBanner
