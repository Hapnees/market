import ProductCard from '@/components/ProductCardPage/ProductCard/ProductCard'
import ProductCardPageNav from '@/components/ProductCardPage/ProductCardPageNav/ProductCardPageNav'
import cl from './ProductCardPage.module.scss'

const ProductCardPage = () => {
	return (
		<main className={cl.main}>
			<ProductCardPageNav />
			<ProductCard />
		</main>
	)
}

export default ProductCardPage
