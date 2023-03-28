import Button from '@/components/UI/Button/Button'
import Input from '@/components/UI/Input/Input'
import { useNavigate } from 'react-router'
import HeaderCallBlock from '../HeaderCallBlock/HeaderCallBlock'
import HeaderCartBlock from '../HeaderCartBlock/HeaderCartBlock'
import cl from './HeaderBottomContent.module.scss'
import logo from '@/assets/Header/logo.svg'
import square from '@/assets/Header/square.svg'
import priceListIcon from '@/assets/Header/priceList.svg'

const HeaderBottomContent = () => {
	const navigate = useNavigate()

	const onClickCatalogBtn = () => {
		navigate({ pathname: '/catalog', search: 'type=Косметика и гигиена' })
	}

	const onClickLogo = () => {
		navigate('/')
	}

	return (
		<section className={cl.wrapper}>
			<article className={cl.content}>
				<img src={logo} alt='' className={cl.logo} onClick={onClickLogo} />

				<div className={cl.controls}>
					<Button
						srcImg={square}
						onClick={onClickCatalogBtn}
						style={{ marginRight: '15px' }}
					>
						Каталог
					</Button>
					{/*SEARCH*/}
					<Input />
				</div>

				<HeaderCallBlock />

				<div className={cl.priceBtnContainer}>
					<Button srcImg={priceListIcon}>Прайс-лист</Button>
				</div>

				<HeaderCartBlock />
			</article>
		</section>
	)
}

export default HeaderBottomContent
