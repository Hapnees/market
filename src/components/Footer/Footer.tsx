import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import cl from './Footer.module.scss'
import priceListIcon from '@/assets/Header/priceList.svg'
import logoIcon from '@/assets/Footer/logo.svg'
import arrowIcon from '@/assets/Footer/arrow.svg'
import whatsappIcon from '@/assets/Footer/whatsapp_icon.png'
import telegramIcon from '@/assets/Footer/telegram_icon.png'
import visaIcon from '@/assets/Footer/visa_icon.png'
import mastercardIcon from '@/assets/Footer/mastercard_icon.png'

const Footer = () => {
	return (
		<footer className={cl.footer}>
			<ul className={cl.list}>
				<li>
					<div className={cl.logoWrapper}>
						<img src={logoIcon} alt='' className={cl.logo} />
						<Button srcImg={priceListIcon} className={cl.adaptiveButton}>
							Прайс-лист
						</Button>
					</div>
					<p className={cl.text}>
						Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
						в Кокчетаве и Акмолинской области
					</p>

					<p className={cl.subscribe}>Подпишись на скидки и акции</p>
					<Input placeholder='Введите ваш E-mail' srcImg={arrowIcon} />
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
					<p className={`${cl.listElTitle} ${cl.priceListTitle}`}>
						Скачать прайс-лист:
					</p>

					<Button srcImg={priceListIcon} className={cl.adaptivePriceListButton}>
						Прайс-лист
					</Button>

					<p className={cl.contact}>Связь в мессенджерах:</p>

					<div className={cl.contactIcons}>
						<img src={whatsappIcon} alt='' />
						<img src={telegramIcon} alt='' />
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
						<img src={visaIcon} alt='' />
						<img src={mastercardIcon} alt='' />
					</div>
				</li>
			</ul>
		</footer>
	)
}

export default Footer
