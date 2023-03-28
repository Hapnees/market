import Input from '@/components/UI/Input/Input'
import TitleWithArrow from '@/components/UI/TitleWithArrow/TitleWithArrow'
import useSetUrlParams from '@/hooks/useSetSearchParams'
import { IFilterListEl } from '@/types/product.interface'
import {
	FC,
	HtmlHTMLAttributes,
	memo,
	useEffect,
	useRef,
	useState,
} from 'react'
import { useSearchParams } from 'react-router-dom'
import cl from './FilterBlock.module.scss'
import getFormattedFilterList from '@/formatters/filterList.formatter'

interface IProps extends HtmlHTMLAttributes<HTMLDivElement> {
	title: string
	list: IFilterListEl[] | string[]
	isShowBorder?: boolean
	param?: string
	callback?: (value: string) => unknown
	isRadioList?: boolean
}

const FilterBlock: FC<IProps> = ({
	title,
	list,
	isShowBorder = true,
	param,
	callback,
	isRadioList,
	...props
}) => {
	const isGotList = useRef<boolean>(false)
	const search = useRef<HTMLInputElement>(null)
	const [currentList, setCurrentList] = useState(list)
	const [searchParams, setSearchParams] = useSearchParams()

	const setUrlParams = useSetUrlParams(searchParams, setSearchParams)

	const [isShowAll, setIsShowAll] = useState(false)

	// Сетаем параметр в URl при его изменении
	const onChangeCheckbox = (value: string) => {
		if (param) {
			if (isRadioList) {
				searchParams.set(param, value)
			} else {
				setUrlParams(value, param)
			}

			setSearchParams(searchParams)
		}

		if (callback) callback
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
			if (isRadioList) {
				setCurrentList(
					(list as string[]).filter(el =>
						el.toLowerCase().includes(search.current!.value.toLowerCase())
					)
				)
			} else {
				setCurrentList(
					(list as IFilterListEl[]).filter(el =>
						el.title.toLowerCase().includes(search.current!.value.toLowerCase())
					)
				)
			}
			setIsShowAll(true)
		}
	}

	// Сетаем фильтр-лист
	useEffect(() => {
		if (isGotList.current || !list?.length) return

		setCurrentList(list)
		isGotList.current = true
	}, [list])

	useEffect(() => {
		if (!param) return

		const newList = isRadioList
			? list
			: getFormattedFilterList(
					searchParams,
					(list as IFilterListEl[]).map(el => el.title),
					param
			  )

		setCurrentList(newList)
	}, [searchParams])

	return (
		<article className={cl.wrapper} {...props}>
			<div>
				<div>
					<p className={cl.title} style={{ marginBottom: '15px' }}>
						{title}
					</p>
					<Input
						ref={search}
						style={{ marginBottom: '15px' }}
						searchEvent={searchEvent}
					/>

					<div className={isShowBorder ? `${cl.listWrapper}` : ''}>
						<ul className={cl.list}>
							{isRadioList && param
								? (
										(isShowAll
											? currentList
											: currentList?.slice(0, 4)) as string[]
								  )?.map(element => (
										<li key={element}>
											<input
												type='radio'
												id={element}
												checked={element === searchParams.get(param)}
												onChange={event => onChangeCheckbox(event.target.id)}
											/>
											<label htmlFor={element}>{element}</label>
										</li>
								  ))
								: (
										(isShowAll
											? currentList
											: currentList?.slice(0, 4)) as IFilterListEl[]
								  )?.map(element => (
										<li key={element.title}>
											<input
												type='checkbox'
												id={element.title}
												checked={element.selected}
												onChange={event => onChangeCheckbox(event.target.id)}
											/>
											<label htmlFor={element.title}>{element.title}</label>
										</li>
								  ))}
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

export default memo(FilterBlock)
