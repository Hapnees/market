import { IBreadCrumbsEl } from '@/types/breadcrumbs.interface'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import cl from './BreadCrumbs.module.scss'

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	list: IBreadCrumbsEl[]
}

const BreadCrumbs: FC<IProps> = ({ list, className, ...props }) => {
	return (
		<nav className={`${cl.nav} ${className}`} {...props}>
			<Link to='/'>Главная</Link>
			{list.map(el => (
				<Link key={el.title} to={el.href}>
					{el.title}
				</Link>
			))}
		</nav>
	)
}

export default BreadCrumbs
