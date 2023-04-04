import { FC } from 'react'
import cl from './SortListMini.module.scss'

interface IProps {
	order?: string
	orderParam: string | null
	sort?: string
	sortParam: string | null
	onChangeSelector: (name: string, value: string) => void
}

const SortListMini: FC<IProps> = ({
	order,
	orderParam,
	sort,
	sortParam,
	onChangeSelector,
}) => {
	return (
		<div className={cl.wrapper}>
			<p className={cl.title}>Сортировка:</p>
			{/*SORT BLOCK*/}
			<div className={cl.container}>
				<div className={cl.innerWrapper}>
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
				<div>
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
	)
}

export default SortListMini
