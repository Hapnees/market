import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import cl from './HeaderBurger.module.scss'
import HeaderBurgerHomePage from './HeaderBurgerHomePage/HeaderBurgerHomePage'
import HeaderBurgerCatalogPage from './HeaderBurgerCatalogPage/HeaderBurgerCatalogPage'

const HeaderBurger = () => {
	const { pathname } = useLocation()

	const [isShowNav, setIsShowNav] = useState(false)
	const burgerClassNames = isShowNav ? `${cl.burger} ${cl.active}` : cl.burger

	const closeBurger = () => {
		setIsShowNav(false)
	}

	return (
		<article className={cl.wrapper}>
			{/*BURGER ICON*/}
			<div
				className={burgerClassNames}
				onClick={() => setIsShowNav(!isShowNav)}
			>
				<span></span>
			</div>

			{isShowNav &&
				(pathname === '/catalog' ? (
					<HeaderBurgerCatalogPage closeBurger={closeBurger} />
				) : (
					<HeaderBurgerHomePage />
				))}
		</article>
	)
}

export default HeaderBurger
