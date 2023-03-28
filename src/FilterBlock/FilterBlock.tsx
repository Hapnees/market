import Input from '@/components/UI/Input/Input'
import TitleWithArrow from '@/components/UI/TitleWithArrow/TitleWithArrow'
import useSetUrlParams from '@/hooks/useSetSearchParams'
import { IFilterListEl } from '@/types/product.interface'
import {
	Dispatch,
	FC,
	HtmlHTMLAttributes,
	memo,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react'
import { useSearchParams } from 'react-router-dom'
import cl from './FilterBlock.module.scss'
import getFormattedFilterList from '@/formatters/filterList.formatter'

interface IProps extends HtmlHTMLAttributes<HTMLDivElement> {
	title: string
	list: IFilterListEl[]
	isShowBorder?: boolean
	param?: string
	callback?: (value: string) => unknown
	isRadioList?: boolean
	setSelectedIdList?: Dispatch<SetStateAction<number[]>>
}

const FilterBlock: FC<IProps> = ({
	title,
	list,
	isShowBorder = true,
	param,
	callback,
	isRadioList,
	setSelectedIdList,
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
		if (!param) {
			const copy = [...currentList]
			const current = copy.find(el => el.title === value)
			if (current) current.selected = !current.selected
			setCurrentList(copy)

			if (setSelectedIdList)
				setSelectedIdList(copy.filter(el => el.selected).map(el => el.id))
		}

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
			setCurrentList(
				list.filter(el =>
					el.title.toLowerCase().includes(search.current!.value.toLowerCase())
				)
			)
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
			: getFormattedFilterList(searchParams, list, param)

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
								? (isShowAll ? currentList : currentList?.slice(0, 4))?.map(
										element => (
											<li key={element.id.toString()}>
												<input
													type='radio'
													id={element.id.toString()}
													checked={element.title === searchParams.get(param)}
													onChange={event => onChangeCheckbox(event.target.id)}
												/>
												<label htmlFor={element.title}>{element.title}</label>
											</li>
										)
								  )
								: (isShowAll ? currentList : currentList?.slice(0, 4))?.map(
										element => (
											<li key={element.title}>
												<input
													type='checkbox'
													id={element.title}
													checked={element.selected}
													onChange={event => onChangeCheckbox(event.target.id)}
												/>
												<label htmlFor={element.title}>{element.title}</label>
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

export default memo(FilterBlock)
