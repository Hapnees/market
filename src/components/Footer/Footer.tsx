import Button from '../UI/Button/Button'
import Search from '../UI/Search/Search'
import cl from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={cl.footer}>
			<ul className={cl.list}>
				<li>
					<img src='../Footer/logo.svg' alt='' className={cl.logo} />
					<p className={cl.text}>
						Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
						в Кокчетаве и Акмолинской области
					</p>

					<p className={cl.subscribe}>Подпишись на скидки и акции</p>
					<Search
						placeholder='Введите ваш E-mail'
						srcImg='../Footer/arrow.svg'
					/>
				</li>
				<li>
					<p className={cl.listElTitle}>Меню сайта:</p>

					<ul className={cl.listOpt}>
						<li>О компании</li>
						<li>Доставка и оплата</li>
						<li>Возврат</li>
						<li>Контакты</li>
					</ul>
				</li>
				<li>
					<p className={cl.listElTitle}>Категории:</p>

					<ul className={cl.listOpt}>
						<li>Бытовая химия</li>
						<li>Косметика и гигиена</li>
						<li>Товары для дома</li>
						<li>Товары для детей и мам</li>
						<li>Посуда</li>
					</ul>
				</li>

				<li>
					<p className={cl.listElTitle}>Скачать прайс-лист:</p>

					<Button
						srcImg='../Header/priceList.svg'
						style={{ marginBottom: '20px' }}
					>
						Прайс-лист
					</Button>

					<p className={cl.contact}>Связь в мессенджерах:</p>

					<div className={cl.contactIcons}>
						<img src='../Footer/whatsapp_icon.png' alt='' />
						<img src='../Footer/telegram_icon.png' alt='' />
					</div>
				</li>

				<li>
					<p className={cl.listElTitle}>Контакты:</p>

					<div className={cl.contactInfo}>
						<p>+7 (777) 490-00-91</p>
						<p>время работы: 9:00-20:00</p>
						<p>Заказать звонок</p>
						<p>
							<span>opt.sultan@mail.ru</span> На связи в любое время
						</p>
					</div>

					<div className={cl.cardIcons}>
						<img src='../Footer/visa_icon.png' alt='' />
						<img src='../Footer/mastercard_icon.png' alt='' />
					</div>
				</li>
			</ul>
		</footer>
	)
}

export default Footer
