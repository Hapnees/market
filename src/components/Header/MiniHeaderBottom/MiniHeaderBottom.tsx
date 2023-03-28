import cl from './MiniHeaderBottom.module.scss'

import catalogIcon from '@/assets/catalog.svg'
import searchIcon from '@/assets/search.svg'
import { useNavigate } from 'react-router'

const MiniHeaderBottom = () => {
	const navigate = useNavigate()
	const onClickCatalog = () => {
		navigate('/catalog')
	}

	return (
		<article className={cl.wrapper}>
			<div onClick={onClickCatalog}>
				<img src={catalogIcon} alt='' />
				<p>Каталог</p>
			</div>
			<div>
				<img src={searchIcon} alt='' />
				<p>Поиск</p>
			</div>
		</article>
	)
}

export default MiniHeaderBottom
