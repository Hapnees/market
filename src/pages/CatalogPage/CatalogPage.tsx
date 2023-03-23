import {
	getBrends,
	getProducers,
	getProducts,
	getTypes,
} from '@/api/products.api'
import FilterBlock from '@/components/CatalogPage/FilterBlock/FilterBlock'
import PriceController from '@/components/CatalogPage/PriceController/PriceController'
import Pagination from '@/components/Pagination/Pagination'
import ProductGrid from '@/components/ProductGrid/ProductGrid'
import Button from '@/components/UI/Button/Button'
import { IGetProductsArgs, IProduct } from '@/types/product.interface'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import cl from './CatalogPage.module.scss'

const limit = 15

const CatalogPage = () => {
	const [producersList, setProducersList] = useState<string[]>([])
	const [brendsList, setBrendsList] = useState<string[]>([])
	const [typesList, setTypesList] = useState<string[]>([])
	const [productsList, setProductsList] = useState<IProduct[]>([])

	const [searchParams, setSearchParams] = useSearchParams()

	// Минимальная и максимальная цены
	// Берём их из URL, если они там указаны
	const [minPrice, setMinPrice] = useState<string | number>(
		searchParams.get('minPrice') || ''
	)

	const [maxPrice, setMaxPrice] = useState<string | number>(
		searchParams.get('maxPrice') || ''
	)

	const producersParam = searchParams.get('producer') || ''
	const brendsParam = searchParams.get('brend') || ''
	const typesParam = searchParams.get('type') || ''

	// Для пагинации
	// Сначала пытаемся достать номер страницы из URL, если его там нет, то ставим значение 1
	const [currentPage, setCurrentPage] = useState(
		+(searchParams.get('page') || 1)
	)

	const [totalPages, setTotalPages] = useState(0)

	// При изменении минимальной цены
	const onChangeMinPrice = (value: string) => {
		searchParams.set('minPrice', value)
		//setSearchParams(searchParams)
		setMinPrice(+value)
	}

	// При изменении максимальной цены
	const onChangeMaxPrice = (value: string) => {
		searchParams.set('maxPrice', value)
		setMaxPrice(+value)
	}

	// Меняем номер текущей страницы
	const paginate = (numPage: number) => {
		setCurrentPage(numPage)
		searchParams.set('page', numPage.toString())
	}

	// При клике на кнопку "Показать" отправляем запрос с фильтрами
	const onClickShow = () => {
		const params: IGetProductsArgs = {}
		if (currentPage > 1) params.page = currentPage
		if (limit > 0) params.limit = limit
		if (brendsParam) params.brends = brendsParam
		if (producersParam) params.producers = producersParam
		if (typesParam) params.types = typesParam
		if (+minPrice > 0) params.minPrice = +minPrice
		if (+maxPrice > minPrice) params.maxPrice = +maxPrice

		getProducts(params).then(res => {
			setProductsList(res.data)
			// Получаем общее число продуктов
			setTotalPages(Math.ceil(res.data.length / limit))
		})
	}

	useEffect(() => {
		// Получаем производителей, бренды и типы ухода
		getProducers().then(data => setProducersList(data))
		getBrends().then(data => setBrendsList(data))
		getTypes().then(data => setTypesList(data))
	}, [])

	// Следим за фильтрами и пагинацией
	// Если какой-то параметр равен своему минимальному значению, удаляем его из URL
	// Сетаем параметр в URl при его изменении
	useEffect(() => {
		if (currentPage === 1) searchParams.delete('page')
		if (minPrice === 0) searchParams.delete('minPrice')
		if (maxPrice === 0) searchParams.delete('maxPrice')

		setSearchParams(searchParams)
	}, [minPrice, maxPrice, currentPage])

	// Получаем продукты
	useEffect(() => {
		getProducts({ page: currentPage, limit }).then(res => {
			setProductsList(res.data)
			// Получаем общее число продуктов
			const totalCount = res.headers['x-total-count']
			setTotalPages(Math.ceil(totalCount / limit))
		})
	}, [currentPage])

	return (
		<main className={cl.main}>
			{/*HEADER*/}
			<section>
				{/*BREADCRUMBS*/}
				<ul className={cl.breadcrumbs}>
					<li>
						<Link to='/'>Главная</Link>
					</li>
					<li>Косметика и гигиена</li>
				</ul>
				{/*HEADER TOP CONTENT*/}
				<div className={cl.headerTopContent}>
					<h1 className={cl.title}>Косметика и гигиена</h1>
					<div className={cl.sortWrapper}>
						<p className={cl.sortTitle}>Сортировка:</p>
						<div className={cl.sortNameWrapper}>
							<p>Название</p>
							<img src='../arrow_black.svg' alt='' />
						</div>
					</div>
				</div>
				{/*HEADER BOTTOM CONTENT*/}
				<ul className={cl.typesList}>
					{typesList.map((type, idx) => (
						<li key={idx}>{type}</li>
					))}
				</ul>
			</section>

			{/*FILTER BLOCK*/}
			<section className={cl.content}>
				<article>
					<div>
						<p className={cl.filterBlockTitle}>ПОДБОР ПО ПАРАМЕТРАМ</p>
						<PriceController
							minPrice={minPrice}
							maxPrice={maxPrice}
							onChangeMaxPrice={onChangeMaxPrice}
							onChangeMinPrice={onChangeMinPrice}
						/>
						<FilterBlock
							title='Производитель'
							list={producersList}
							param='producer'
						/>
						<FilterBlock
							title='Бренд'
							list={brendsList}
							isShowBorder={false}
							param='brend'
						/>
					</div>
					<div className={cl.filterBtns}>
						{/*REQUEST*/}
						<Button onClick={onClickShow}>Показать</Button>
						{/*REQUEST*/}
						<Button
							srcImg='../CatalogPage/trash.svg'
							style={{ padding: '20px' }}
						></Button>
					</div>
					<FilterBlock
						title='Тип ухода'
						list={typesList}
						isShowBorder={false}
						param='type'
					/>
				</article>

				{productsList?.length ? (
					<article className={cl.productGridWrapper}>
						<ProductGrid
							products={productsList}
							columns={3}
							style={{ marginBottom: '50px' }}
						/>
						<Pagination
							currentPage={currentPage}
							paginate={paginate}
							totalPages={totalPages}
						/>
					</article>
				) : (
					<p className={cl.notFound}>Товары не найдены</p>
				)}
			</section>
		</main>
	)
}

export default CatalogPage
