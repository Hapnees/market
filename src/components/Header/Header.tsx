import cl from './Header.module.scss'
import HeaderBottomContent from './HeaderBottomContent/HeaderBottomContent'
import HeaderTopContent from './HeaderTopContent/HeaderTopContent'
import MiniHeaderBottom from './MiniHeaderBottom/MiniHeaderBottom'

// Не забыть удалить ненужный .module.scss

const Header = () => {
	return (
		<header className={cl.wrapper}>
			<HeaderTopContent />
			<HeaderBottomContent />
			<MiniHeaderBottom />
		</header>
	)
}

export default Header
