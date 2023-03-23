import cl from './HeaderCallBlock.module.scss'

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
				<img src='../Header/call.png' alt='' />
			</div>
		</article>
	)
}

export default HeaderCallBlock
