import cl from './HeaderTopContent.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@/components/UI/Button/Button'
import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import { toast } from 'react-toastify'
import { useState } from 'react'
import pointer from '@/assets/Header/pointer.svg'
import mail from '@/assets/Header/mail.svg'

const HeaderTopContent = () => {
	const navigate = useNavigate()
	const { toggleAdminMode } = useActions()
	const { isAdminMode } = useAppSelector(state => state.adminMode)
	const [isShowAdminList, setIsShowAdminList] = useState(false)

	const onClickAdminModeBtn = () => {
		if (!isAdminMode) {
			toast.info('Для перехода в админку кликните ещё раз на кнопку админ-мод')
			toast.success('Админ-мод включен')
			toggleAdminMode()
		} else {
			setIsShowAdminList(!isShowAdminList)
		}
	}

	const onClickAdminPage = () => {
		navigate('/admin')
		setIsShowAdminList(false)
	}

	const onClickAdminUserMode = () => {
		toggleAdminMode()
		setIsShowAdminList(false)
		toast.info('Админ-мод выключен')
	}

	return (
		<section className={cl.wrapper}>
			<ul className={cl.leftSideMenu}>
				<li>
					<img src={pointer} alt='' />
					<div>
						<p className={cl.title}>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
						<p className={cl.subtitle}>(Рынок Восточный)</p>
					</div>
				</li>
				<li>
					<img src={mail} alt='' />
					<div>
						<p className={cl.title}>opt.sultan@mail.ru</p>
						<p className={cl.subtitle}>На связи в любое время</p>
					</div>
				</li>
			</ul>

			{/*RIGHT SIDE*/}
			{/*NAVBAR*/}
			<nav className={cl.navbar}>
				<div className={cl.adminControls}>
					<Button style={{ padding: '5px 10px' }} onClick={onClickAdminModeBtn}>
						Админ-мод
					</Button>
					{isShowAdminList && (
						<ul className={cl.adminList}>
							<li>Подробнее</li>
							<li onClick={onClickAdminPage}>Админка</li>
							<li onClick={onClickAdminUserMode}>Режим пользователя</li>
						</ul>
					)}
				</div>
				<Link to='/'>О компании</Link>
				<Link to='/'>Доставка и оплата</Link>
				<Link to='/'>Возврат</Link>
				<Link to='/'>Контакты</Link>
			</nav>
		</section>
	)
}

export default HeaderTopContent
