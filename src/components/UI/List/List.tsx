import { IProductInfo } from '@/types/list.interface'
import { FC, HtmlHTMLAttributes } from 'react'
import cl from './List.module.scss'

interface IProps extends HtmlHTMLAttributes<HTMLUListElement> {
	list: IProductInfo[]
}

const List: FC<IProps> = ({ list, ...props }) => {
	return (
		<ul className={cl.list} {...props}>
			{list.map((el, idx) => (
				<li key={idx}>
					<p>{el.field}:</p>
					<p>{el.value}</p>
				</li>
			))}
		</ul>
	)
}

export default List
