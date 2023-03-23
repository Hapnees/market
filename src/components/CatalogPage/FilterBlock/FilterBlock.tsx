import Search from '@/components/UI/Search/Search'
import TitleWithArrow from '@/components/UI/TitleWithArrow/TitleWithArrow'
import { FC, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import cl from './FilterBlock.module.scss'

interface IProps {
	title: string
	list: string[]
	isShowBorder?: boolean
	param: string
}

const FilterBlock: FC<IProps> = ({
	title,
	list,
	isShowBorder = true,
	param,
}) => {
	const search = useRef<HTMLInputElement>(null)
	const [currentList, setCurrentList] = useState(list)
	const [searchParams, setSearchParams] = useSearchParams()

	const [isShowAll, setIsShowAll] = useState(false)

	// Сетаем параметр в URl при его изменении
	const onChangeCheckbox = (value: string) => {
		const paramList = searchParams.get(param)
			? searchParams.get(param)!.split(',')
			: []

		if (paramList?.includes(value))
			searchParams.set(param, paramList.filter(el => el !== value).join(','))
		else searchParams.set(param, [...paramList, value].join(','))

		setSearchParams(searchParams)
	}

	const onClickTitleArrow = () => {
		setIsShowAll(!isShowAll)
	}

	// Действие для поиска
	// Фильтруем массив 'list' по значению в инпуте
	// Если значение пустое, показываем массив 'list'
	const searchEvent = () => {
		if (!search.current) return

		if (!search.current.value) {
			setCurrentList(list)
			setIsShowAll(false)
		} else {
			setCurrentList(
				list.filter(el =>
					el.toLowerCase().includes(search.current!.value.toLowerCase())
				)
			)
			setIsShowAll(true)
		}
	}

	// Следим за фильтром
	// Если параметр равен своему минимальному значению, удаляем его из URL
	useEffect(() => {
		console.log(searchParams.get(param))
		if (!searchParams.get(param)) searchParams.delete(param)
		setSearchParams(searchParams)
	}, [searchParams.get(param)])

	// Сетаем список пунктов
	useEffect(() => {
		setCurrentList(list)
	}, [list])

	return (
		<article className={cl.wrapper}>
			<div>
				<div>
					<p className={cl.title} style={{ marginBottom: '15px' }}>
						{title}
					</p>
					<Search
						ref={search}
						style={{ marginBottom: '15px' }}
						searchEvent={searchEvent}
					/>

					<div className={isShowBorder ? `${cl.producersListWrapper}` : ''}>
						<ul className={cl.producersList}>
							{(isShowAll ? currentList : currentList?.slice(0, 4))?.map(
								producer => (
									<li key={producer}>
										<input
											type='checkbox'
											id={producer}
											onChange={event => onChangeCheckbox(event.target.id)}
										/>
										<label htmlFor={producer}>{producer}</label>
									</li>
								)
							)}
						</ul>
						<TitleWithArrow
							onClick={onClickTitleArrow}
							style={{ color: '#3f4e65', fontSize: '12px' }}
							condition={isShowAll}
						>
							Показать все
						</TitleWithArrow>
					</div>
				</div>
			</div>
		</article>
	)
}

export default FilterBlock
