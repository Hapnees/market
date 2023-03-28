import { useLazyGetProductByIdQuery } from '@/api/api'
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import Loader from '@/components/Loader/Loader'
import ProductCard from '@/components/ProductCardPage/ProductCard/ProductCard'
import BackButton from '@/components/UI/BackButton/BackButton'
import { IBreadCrumbsEl } from '@/types/breadcrumbs.interface'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import cl from './ProductCardPage.module.scss'

const ProductCardPage = () => {
	const params = useParams<{ id: string }>()
	const [getProduct, { data: product, isLoading }] =
		useLazyGetProductByIdQuery()

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

	if (isLoading) return <Loader />

	return (
		<main className={cl.main}>
			<BackButton className={cl.backButton} />
			<BreadCrumbs list={breadCrumbsList} className={cl.adaptiveBreadCrumbs} />

			<ProductCard product={product} />
		</main>
	)
}

export default ProductCardPage
