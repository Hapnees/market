import Switcher from '@/components/UI/Switcher/Switcher'
import cl from './ProductsBest.module.scss'
import { getBestBrendsImgs } from './utils/ProductsBest.util'

const ProductsBest = () => {
	const imgList = getBestBrendsImgs()

	return (
		<article className={cl.wrapper}>
			<p className='title' style={{ marginBottom: '15px' }}>
				<span>Лучшие</span> товары
			</p>
			<p className='subtitle'>От ведущих мировых брендов</p>

			<ul className={cl.productList}>
				{imgList.map(el => (
					<li key={el}>
						<img src={el} alt='' />
					</li>
				))}
			</ul>

			<div className={cl.switcherWrapper}>
				<Switcher selectedColor='#ffc85e' />
			</div>
		</article>
	)
}

export default ProductsBest
