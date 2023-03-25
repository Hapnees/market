import Input from '@/components/UI/Input/Input'
import TitleWithArrow from '@/components/UI/TitleWithArrow/TitleWithArrow'
import useSetUrlParams from '@/hooks/useSetSearchParams'
import { IFilterList } from '@/types/product.interface'
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

interface IProps extends HtmlHTMLAttributes<HTMLDivElement> {
	title: string
	list: IFilterList[]
	isShowBorder?: boolean
	param?: string
	callback?: (value: string) => unknown
}

const FilterBlock: FC<IProps> = ({
	title,
	list,
	isShowBorder = true,
	param,
	callback,
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
		// Переключаем чекбокс
		const copy = [...currentList]
		const tmpEl = copy.find(el => el.title === value)
		if (tmpEl) tmpEl.selected = !tmpEl.selected
		setCurrentList(copy)
		//

		// TODO:
		if (param) {
			setUrlParams(value, param)
			setSearchParams(searchParams)
		}

		// Выполняем коллбэк, если он был передан
		if (callback) {
			callback(value)
		}
		////
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

	// Следим за фильтром
	// Если параметр равен своему минимальному значению, удаляем его из URL
	useEffect(() => {
		if (!param) return

		if (!searchParams.get(param)) searchParams.delete(param)
		setSearchParams(searchParams)
	}, [searchParams])

	// Сетаем фильтр-лист
	useEffect(() => {
		if (isGotList.current || !list?.length) return

		setCurrentList(list)
		isGotList.current = true
	}, [list])

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

					<div className={isShowBorder ? `${cl.producersListWrapper}` : ''}>
						<ul className={cl.producersList}>
							{(isShowAll ? currentList : currentList?.slice(0, 4))?.map(
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
