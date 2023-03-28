import { useLazyGetBrendsQuery, useLazyGetProducersQuery } from '@/api/api'
import PriceController from '@/components/CatalogPage/PriceController/PriceController'
import getFormattedFilterList from '@/formatters/filterList.formatter'
import FilterBlock from '@/FilterBlock/FilterBlock'
import {
	DetailedHTMLProps,
	FC,
	HTMLAttributes,
	useEffect,
	useState,
} from 'react'
import arrowIcon from '@/assets/arrow_2.svg'
import trashIcon from '@/assets/CatalogPage/trash.svg'
import cl from './HeaderBurgerCatalogPage.module.scss'
import Button from '@/components/UI/Button/Button'
import { useNavigate } from 'react-router'
import BackButton from '@/components/UI/BackButton/BackButton'
import { useSearchParams } from 'react-router-dom'
import { IFilterListEl } from '@/types/product.interface'

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	closeBurger: () => void
}

const HeaderBurgerCatalogPage: FC<IProps> = ({
	closeBurger,
	className,
	...props
}) => {
	const navigate = useNavigate()

	const [getProducers] = useLazyGetProducersQuery()
	const [getBrends] = useLazyGetBrendsQuery()

	const [searchParams, setSearchParams] = useSearchParams()

	const [minPrice, setMinPrice] = useState<string | number>('')
	const [maxPrice, setMaxPrice] = useState<string | number>('')
	const [producersList, setProducersList] = useState<IFilterListEl[]>([])
	const [brendsList, setBrendsList] = useState<IFilterListEl[]>([])

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

	const onClickBackBtn = () => {
		closeBurger()
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
	}, [])

	useEffect(() => {
		//if (currentPage === 1) searchParams.delete('page')
		if (minPrice === 0) searchParams.delete('minPrice')
		if (maxPrice === 0) searchParams.delete('maxPrice')

		setSearchParams(searchParams)
	}, [minPrice, maxPrice])

	return (
		<article className={`${cl.wrapper} ${className}`} {...props}>
			<BackButton onClick={onClickBackBtn} />
			<h1 className={cl.title}>Косметика и гигиена</h1>
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
			<FilterBlock title='Бренд' list={brendsList} param='brend' />
			<div className={cl.filterBtns}>
				{/*REQUEST*/}
				<Button>Показать</Button>
				{/*REQUEST*/}
				<Button srcImg={trashIcon} style={{ padding: '20px' }}></Button>
			</div>
		</article>
	)
}

export default HeaderBurgerCatalogPage
