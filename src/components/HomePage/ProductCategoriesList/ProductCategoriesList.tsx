import cl from './ProductCategoriesList.module.scss'
import img1 from '@/assets/ProductCategories/img1.png'
import img2 from '@/assets/ProductCategories/img2.png'
import img3 from '@/assets/ProductCategories/img3.png'
import img4 from '@/assets/ProductCategories/img4.png'
import img5 from '@/assets/ProductCategories/img5.png'

const ProductCategoriesList = () => {
	const list = [
		{
			src: img1,
			title: 'Бытовая химия',
		},
		{
			src: img2,
			title: 'Косметика и гигиена',
		},
		{
			src: img3,
			title: 'Товары для дома',
		},
		{
			src: img4,
			title: 'Товары для детей и мам',
		},
		{
			src: img5,
			title: 'Посуда',
		},
	]

	return (
		<ul className={cl.categoryList}>
			{list.map(el => (
				<li key={el.title}>
					<div className={cl.imgWrapper}>
						<img src={el.src} alt='' />
					</div>
					<p className={cl.categoryTitle}>{el.title}</p>
				</li>
			))}
		</ul>
	)
}

export default ProductCategoriesList
