import cl from './HeaderCallBlock.module.scss'
import callIcon from '@/assets/Header/call.png'

const HeaderCallBlock = () => {
	return (
		<article className={cl.wrapper}>
			<div className={cl.info}>
				<p>+7 (777) 490-00-91</p>
				<p>время работы: 9:00-20:00</p>
				<p>Заказать звонок</p>
			</div>

			<div className={cl.imgContainer}>
				<div className={cl.circle}></div>
				<img src={callIcon} alt='' />
			</div>
		</article>
	)
}

export default HeaderCallBlock
