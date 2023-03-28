import FilterBlock from '@/FilterBlock/FilterBlock'
import PriceController from '@/components/CatalogPage/PriceController/PriceController'
import Pagination from '@/components/Pagination/Pagination'
import ProductGrid from '@/components/ProductGrid/ProductGrid'
import Button from '@/components/UI/Button/Button'
import { IFilterListEl, IGetProductsParams } from '@/types/product.interface'
import getFormattedFilterList from '@/formatters/filterList.formatter'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import cl from './CatalogPage.module.scss'
import {
	useLazyGetBrendsQuery,
	useLazyGetProducersQuery,
	useLazyGetProductsQuery,
	useLazyGetTypesQuery,
} from '@/api/api'
import trashIcon from '@/assets/CatalogPage/trash.svg'
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import { IBreadCrumbsEl } from '@/types/breadcrumbs.interface'
import FilterTypesMini from '@/components/FilterTypesMini/FilterTypesMini'
import BackButton from '@/components/UI/BackButton/BackButton'
import Loader from '@/components/Loader/Loader'

const limit = 15

const CatalogPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const type = searchParams.get('type') || ''

	const navigate = useNavigate()
	const breadCrumbsList: IBreadCrumbsEl[] = [{ title: type, href: '/catalog' }]

	const [getProducts, { data: productsData, isLoading: isLoadingProducts }] =
		useLazyGetProductsQuery()
	const [getProducers, { isLoading: isLoadingProducers }] =
		useLazyGetProducersQuery()
	const [getBrends, { isLoading: isLoadingBrends }] = useLazyGetBrendsQuery()
	const [getTypes, { isLoading: isLoadingTypes }] = useLazyGetTypesQuery()

	const [producersList, setProducersList] = useState<IFilterListEl[]>([])
	const [brendsList, setBrendsList] = useState<IFilterListEl[]>([])
	const [typesList, setTypesList] = useState<string[]>([])

	const [order, setOrder] = useState<string | undefined>(undefined)
	const [sort, setSort] = useState<string | undefined>(undefined)

	// Минимальная и максимальная цены
	// Берём их из URL, если они там указаны
	const [minPrice, setMinPrice] = useState<string | number>(
		searchParams.get('minPrice') || ''
	)

	const [maxPrice, setMaxPrice] = useState<string | number>(
		searchParams.get('maxPrice') || ''
	)

	// Параметры фильтрации
	// Берём их из URL, если они там указаны
	const sortParam = searchParams.get('sort')
	const orderParam = searchParams.get('order')
	const producersParam = searchParams.get('producer') || ''
	const brendsParam = searchParams.get('brend') || ''
	const typeParam = searchParams.get('type') || ''

	// Для пагинации
	// Сначала пытаемся достать номер страницы из URL, если его там нет, то ставим значение 1
	const [currentPage, setCurrentPage] = useState(
		+(searchParams.get('page') || 1)
	)

	const [totalPages, setTotalPages] = useState(0)

	// При изменении минимальной цены
	const onChangeMinPrice = (value: string) => {
		searchParams.set('minPrice', value)
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
		const params: IGetProductsParams = {}
		if (currentPage > 1) params.page = currentPage
		if (limit > 0) params.limit = limit
		if (brendsParam) params.brends = brendsParam
		if (producersParam) params.producers = producersParam
		if (typeParam) params.types = typeParam
		if (+minPrice > 0) params.minPrice = +minPrice
		if (+maxPrice > minPrice) params.maxPrice = +maxPrice
		if (sortParam) params.sort = sortParam
		if (orderParam) params.order = orderParam

		getProducts(params)
			.unwrap()
			.then(res => {
				// Получаем общее число продуктов
				setTotalPages(Math.ceil(res.totalCount / limit))
			})
	}

	const onClickTypesListEl = (title: string) => {
		searchParams.set('type', title)
		setSearchParams(searchParams)
	}

	const onChangeSelector = (name: string, value: string) => {
		searchParams.set(name, value)
		setSearchParams(searchParams)
	}

	// Очищаем все фильтры и параметры сортировки
	const onClickTrash = () => {
		searchParams.delete('minPrice')
		searchParams.delete('maxPrice')
		searchParams.delete('page')
		searchParams.delete('brend')
		searchParams.delete('producer')

		setSearchParams(searchParams)

		setSort(undefined)
		setOrder(undefined)
		setMinPrice('')
		setMaxPrice('')
	}

	const onClickBackBtn = () => {
		navigate('/')
	}

	useEffect(() => {
		// Получаем производителей, бренды и типы ухода
		getProducers()
			.unwrap()
			.then(data => {
				const resultData = getFormattedFilterList(
					searchParams,
					data,
					'producer'
				)
				setProducersList(resultData)
			})
		getBrends()
			.unwrap()
			.then(data => {
				const resultData = getFormattedFilterList(searchParams, data, 'brend')
				setBrendsList(resultData)
			})
		getTypes({ IsOnlyString: true })
			.unwrap()
			.then(data => {
				setTypesList(data as string[])
			})
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
		onClickShow()
	}, [currentPage, type])

	return (
		<main className={cl.main}>
			{isLoadingBrends ||
			isLoadingProducers ||
			isLoadingTypes ||
			isLoadingProducts ? (
				<Loader />
			) : (
				<>
					{/*HEADER*/}
					<section>
						<BackButton onClick={onClickBackBtn} className={cl.backButton} />
						<BreadCrumbs
							list={breadCrumbsList}
							className={cl.adaptiveBreadCrumbs}
						/>
						<div className={cl.headerTopContent}>
							<h1 className={cl.title}>{type}</h1>
							{/*MINI*/}
							<FilterTypesMini typesList={typesList} />
							{/*MINI*/}
							<div className={cl.sortListWrapper}>
								<p className={cl.sortTitle}>Сортировка:</p>
								{/*SORT BLOCK*/}
								<div className={cl.sortListContainer}>
									<div className={cl.sortWrapper}>
										<select
											name='order'
											id='order'
											className={cl.selector}
											value={order}
											onClick={event =>
												onChangeSelector(
													event.currentTarget.name,
													event.currentTarget.value
												)
											}
											defaultValue={orderParam || undefined}
										>
											<option disabled defaultChecked>
												Направление
											</option>
											<option value='asc'>По возрастанию</option>
											<option value='desc'>По убыванию</option>
										</select>
									</div>
									<div className={cl.sortNameWrapper}>
										<select
											name='sort'
											id='sort'
											className={cl.selector}
											value={sort}
											onChange={event =>
												onChangeSelector(
													event.currentTarget.name,
													event.currentTarget.value
												)
											}
											defaultValue={sortParam || undefined}
										>
											<option disabled defaultChecked>
												Поле
											</option>
											<option value='title'>Название</option>
											<option value='price'>Цена</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						{/*HEADER BOTTOM CONTENT*/}
						<ul className={cl.typesList}>
							{typesList.map(typeEl => (
								<li
									key={typeEl}
									className={typeEl === type ? cl.active : ''}
									onClick={() => onClickTypesListEl(typeEl)}
								>
									{typeEl}
								</li>
							))}
						</ul>
					</section>

					{/*FILTER BLOCK*/}
					<section className={cl.content}>
						<article className={cl.filterBlockWrapper}>
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
									srcImg={trashIcon}
									style={{ padding: '20px' }}
									onClick={onClickTrash}
								></Button>
							</div>
							<FilterBlock
								title='Тип ухода'
								list={typesList}
								isShowBorder={false}
								param='type'
								isRadioList={true}
							/>
						</article>

						{productsData?.products?.length ? (
							<article className={cl.productGridWrapper}>
								<ProductGrid
									products={productsData.products}
									columns={3}
									className={cl.adaptiveGrid}
								/>
								{totalPages > 1 && (
									<Pagination
										currentPage={currentPage}
										paginate={paginate}
										totalPages={totalPages}
									/>
								)}
							</article>
						) : (
							<p className={cl.notFound}>Товары не найдены</p>
						)}
					</section>
				</>
			)}
		</main>
	)
}

export default CatalogPage
