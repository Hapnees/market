import { Link } from 'react-router-dom'
import cl from './AdminHomePage.module.scss'

const AdminHomePage = () => {
	return (
		<main className={cl.main}>
			<article className={cl.container}>
				<h1 className={cl.title}>Админка</h1>
				<ul className={cl.list}>
					<li>
						<Link to='/admin/product'>Добавить товар</Link>
					</li>
					<li>
						<Link to='/admin/filters'>Фильтры</Link>
					</li>
				</ul>
			</article>
		</main>
	)
}

export default AdminHomePage
