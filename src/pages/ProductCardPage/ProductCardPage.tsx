import { useLazyGetProductByIdQuery } from '@/api/api'
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import ProductCard from '@/components/ProductCardPage/ProductCard/ProductCard'
import { IBreadCrumbsEl } from '@/types/breadcrumbs.interface'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import cl from './ProductCardPage.module.scss'

const ProductCardPage = () => {
	const params = useParams<{ id: string }>()
	const [getProduct, { data: product }] = useLazyGetProductByIdQuery()

	useEffect(() => {
		if (!params.id) return

		getProduct(+params.id!)
	}, [params.id])

	const breadCrumbsList: IBreadCrumbsEl[] = [
		{
			title: 'Каталог',
			href: '/catalog',
		},
		{
			title: product?.title || '',
			href: `/product/${product?.id}`,
		},
	]

	return (
		<main className={cl.main}>
			<BreadCrumbs list={breadCrumbsList} />
			{/*<ProductCardPageNav />*/}
			<ProductCard product={product} />
		</main>
	)
}

export default ProductCardPage
