import { FC, HtmlHTMLAttributes } from 'react'
import cl from './List.module.scss'
import { IProductInfo } from '@/types/list.interface'

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
