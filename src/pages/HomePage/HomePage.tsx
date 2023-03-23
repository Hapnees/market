import Banner from '@/components/HomePage/Banner/Banner'
import Map from '@/components/HomePage/Map/Map'
import ProductCategories from '@/components/HomePage/ProductCategories/ProductCategories'
import ProductsBest from '@/components/HomePage/ProductsBest/ProductsBest'
import ProductsPromo from '@/components/HomePage/ProductsPromo/ProductsPromo'

const HomePage = () => {
	return (
		<main>
			<Banner />
			<ProductsPromo />
			<ProductCategories />
			<ProductsBest />
			<Map />
		</main>
	)
}

export default HomePage
