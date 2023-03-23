import cl from './HeaderTopContent.module.scss'
import { Link } from 'react-router-dom'

const HeaderTopContent = () => {
	return (
		<section className={cl.wrapper}>
			<ul className={cl.leftSideMenu}>
				<li>
					<img src='../Header/pointer.svg' alt='' />
					<div>
						<p className={cl.title}>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
						<p className={cl.subtitle}>(Рынок Восточный)</p>
					</div>
				</li>
				<li>
					<img src='../Header/mail.svg' alt='' />
					<div>
						<p className={cl.title}>opt.sultan@mail.ru</p>
						<p className={cl.subtitle}>На связи в любое время</p>
					</div>
				</li>
			</ul>

			{/*RIGHT SIDE*/}
			{/*NAVBAR*/}
			<nav className={cl.navbar}>
				<Link to='/'>О компании</Link>
				<Link to='/'>Доставка и оплата</Link>
				<Link to='/'>Возврат</Link>
				<Link to='/'>Контакты</Link>
			</nav>
		</section>
	)
}

export default HeaderTopContent
