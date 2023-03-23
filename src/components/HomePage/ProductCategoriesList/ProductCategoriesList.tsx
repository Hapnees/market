import cl from './ProductCategoriesList.module.scss'

const ProductCategoriesList = () => {
	return (
		<ul className={cl.categoryList}>
			<li>
				<div className={cl.imgWrapper}>
					<img src='../ProductCategories/img1.png' alt='' />
				</div>
				<p className={cl.categoryTitle}>Бытовая химия</p>
			</li>
			<li>
				<div className={cl.imgWrapper}>
					<img src='../ProductCategories/img2.png' alt='' />
				</div>
				<p className={cl.categoryTitle}>Косметика и гигиена</p>
			</li>
			<li>
				<div className={cl.imgWrapper}>
					<img src='../ProductCategories/img3.png' alt='' />
				</div>
				<p className={cl.categoryTitle}>Товары для дома</p>
			</li>
			<li>
				<div className={cl.imgWrapper}>
					<img src='../ProductCategories/img4.png' alt='' />
				</div>
				<p className={cl.categoryTitle}>Товары для детей и мам</p>
			</li>
			<li>
				<div className={cl.imgWrapper}>
					<img src='../ProductCategories/img5.png' alt='' />
				</div>
				<p className={cl.categoryTitle}>Посуда</p>
			</li>
		</ul>
	)
}

export default ProductCategoriesList
