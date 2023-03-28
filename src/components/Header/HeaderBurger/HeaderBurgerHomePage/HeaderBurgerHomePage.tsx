import cl from './HeaderBurgerHomePage.module.scss'
import phoneIcon from '@/assets/phone.svg'
import catalogIcon from '@/assets/catalog.svg'
import searchIcon from '@/assets/search.svg'
import pointerIcon from '@/assets/Header/pointer.svg'
import mailIcon from '@/assets/Header/mail.svg'
import Button from '@/components/UI/Button/Button'
import priceListIcon from '@/assets/Header/priceList.svg'
import { Link } from 'react-router-dom'

const HeaderBurgerHomePage = () => {
	return (
		<article className={cl.wrapper}>
			<div className={cl.content}>
				<div className={cl.controls}>
					<div>
						<img src={catalogIcon} alt='' />
						<p>Каталог</p>
					</div>
					<div>
						<img src={searchIcon} alt='' />
						<p>Поиск</p>
					</div>
				</div>
				<div className={cl.listWrapper}>
					<ul className={cl.list}>
						<li>
							<img src={pointerIcon} alt='' />
							<div>
								<p className={cl.elTitle}>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
								<p className={cl.elSubtitle}>(Рынок Восточный)</p>
							</div>
						</li>
						<li>
							<img src={mailIcon} alt='' />
							<div>
								<p className={cl.elTitle}>opt.sultan@mail.ru</p>
								<p className={cl.elSubtitle}>На связи в любое время</p>
							</div>
						</li>
						<li>
							<img src={phoneIcon} alt='' />
							<div>
								<p className={cl.elTitle}>Отдел продаж</p>
								<p className={cl.elSubtitle} style={{ marginBottom: '5px' }}>
									+7 (777) 490-00-91
								</p>
								<p className={cl.elSubtitle}>время работы: 9:00-20:00</p>
							</div>
						</li>
					</ul>
					{/*CALL*/}
					<div className={cl.call}>
						<img src={phoneIcon} alt='' className={cl.phoneIcon} />
						<p>Заказать звонок</p>
					</div>
				</div>
				<nav className={cl.navbar}>
					<h1 className={cl.title}>Меню сайта:</h1>
					<ul className={cl.navMenu}>
						<li>
							<Link to='/'>О компании</Link>
						</li>
						<li>
							<Link to='/'>Доставка и оплата</Link>
						</li>
						<li>
							<Link to='/'>Возврат</Link>
						</li>
						<li>
							<Link to='/'>Контакты</Link>
						</li>
					</ul>
				</nav>
				<Button srcImg={priceListIcon} style={{ alignSelf: 'center' }}>
					Прайс-лист
				</Button>
			</div>
		</article>
	)
}

export default HeaderBurgerHomePage
