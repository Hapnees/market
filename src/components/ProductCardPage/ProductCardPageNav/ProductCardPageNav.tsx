import { Link } from 'react-router-dom'
import cl from './ProductCardPageNav.module.scss'

const ProductCardPageNav = () => {
	return (
		<nav className={cl.nav}>
			<Link to='/'>Главная</Link>
			<Link to='/'>Каталог</Link>
			<Link to='/'>
				BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот, 90 г
			</Link>
		</nav>
	)
}

export default ProductCardPageNav
