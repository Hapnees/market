import cl from './Map.module.scss'
import pointerIcon from '@/assets/HomePage/Map/pointer.svg'
import mapImage from '@/assets/HomePage/map.png'
import paperImage from '@/assets/HomePage/paper.svg'

const Map = () => {
	return (
		<article className={cl.wrapper}>
			<div className={cl.info}>
				<p className={cl.title}>Контакты</p>
				<p className={cl.subtitle}>Оптовый поставщик «Султан»</p>

				<ul className={cl.list}>
					<li>
						<p className={`${cl.listElTitle} ${cl.listElMove}`}>Адрес:</p>
						<div className={cl.listElSubtitle}>
							<img src={pointerIcon} alt='' />
							<p>г. Кокчетав, ул. Ж. Ташенова 129Б (Рынок Восточный)</p>
						</div>
					</li>
					<li>
						<p className={cl.listElTitle}>Отдел продаж:</p>
						<div className={cl.listElSubtitle}>
							<div className={cl.listElSubtitleInnerWrapper}>
								<p>+7 (777) 490-00-91</p>
								<p>opt.sultan@mail.ru</p>
							</div>
						</div>
					</li>
					<li>
						<p className={`${cl.listElTitle} ${cl.listElMove}`}>
							Данные налогоплательщика:
						</p>
						<div className={cl.listElSubtitle}>
							<img src={paperImage} alt='' />
							<p>ИП Катран Д.С. ИИН: 860113450858</p>
						</div>
					</li>
				</ul>
			</div>
			<img src={mapImage} alt='' />
		</article>
	)
}

export default Map
