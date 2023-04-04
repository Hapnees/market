import { useLazyGetProductByIdQuery } from '@/api/api'
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import Loader from '@/components/Loader/Loader'
import ProductCard from '@/components/ProductCardPage/ProductCard/ProductCard'
import BackButton from '@/components/UI/BackButton/BackButton'
import useGetProductById from '@/hooks/getProductById'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { toast } from 'react-toastify'
import cl from './ProductCardPage.module.scss'
import { getBreadCrumbsProductCardPage } from './utils/ProductCardPage.util'

const ProductCardPage = () => {
	const { id } = useParams<{ id: string }>()
	const { getProductById, product, isLoading } = useGetProductById()

	useEffect(() => {
		if (!id) return

		getProductById(id)
	}, [id])

	const breadCrumbsList = getBreadCrumbsProductCardPage(product)

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
