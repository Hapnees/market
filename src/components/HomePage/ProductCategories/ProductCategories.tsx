import ProductCategoriesBanner from '../ProductCategoriesBanner/ProductCategoriesBanner'
import ProductCategoriesList from '../ProductCategoriesList/ProductCategoriesList'
import cl from './ProductCategories.module.scss'

const ProductCategories = () => {
	return (
		<article className={cl.wrapper}>
			<p className='title' style={{ marginBottom: '15px' }}>
				<span>категории</span> товаров
			</p>
			<p className='subtitle'>10 000+ ходовых позиций по спецмальным ценам</p>

			<ProductCategoriesList />
			<ProductCategoriesBanner />
		</article>
	)
}

export default ProductCategories
