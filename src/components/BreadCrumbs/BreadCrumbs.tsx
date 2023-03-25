import { IBreadCrumbsEl } from '@/types/breadcrumbs.interface'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import cl from './BreadCrumbs.module.scss'

interface IProps {
	list: IBreadCrumbsEl[]
}

const BreadCrumbs: FC<IProps> = ({ list }) => {
	return (
		<nav className={cl.nav}>
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
