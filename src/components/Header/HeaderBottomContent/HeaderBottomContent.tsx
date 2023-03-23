import Button from '@/components/UI/Button/Button'
import Search from '@/components/UI/Search/Search'
import { useNavigate } from 'react-router'
import HeaderCallBlock from '../HeaderCallBlock/HeaderCallBlock'
import HeaderCartBlock from '../HeaderCartBlock/HeaderCartBlock'
import cl from './HeaderBottomContent.module.scss'

const HeaderBottomContent = () => {
	const navigate = useNavigate()

	const onClickCatalogBtn = () => {
		navigate('/catalog')
	}

	const onClickLogo = () => {
		navigate('/')
	}

	return (
		<section className={cl.wrapper}>
			<article className={cl.content}>
				<img
					src='../Header/logo.svg'
					alt=''
					className={cl.logo}
					onClick={onClickLogo}
				/>

				<Button srcImg='../Header/square.svg' onClick={onClickCatalogBtn}>
					Каталог
				</Button>
				{/*SEARCH*/}
				<Search />

				<HeaderCallBlock />

				<div className={cl.priceBtnContainer}>
					<Button srcImg='../Header/priceList.svg'>Прайс-лист</Button>
				</div>

				<HeaderCartBlock />
			</article>
		</section>
	)
}

export default HeaderBottomContent
