import Switcher from '@/components/UI/Switcher/Switcher'
import cl from './ProductsBest.module.scss'

const ProductsBest = () => {
	return (
		<article className={cl.wrapper}>
			<p className='title' style={{ marginBottom: '15px' }}>
				<span>Лучшие</span> товары
			</p>
			<p className='subtitle'>От ведущих мировых брендов</p>

			<ul className={cl.productList}>
				<li>
					<img src='../ProductsBest/img1.png' alt='' />
				</li>
				<li>
					<img src='../ProductsBest/img2.png' alt='' />
				</li>
				<li>
					<img src='../ProductsBest/img3.png' alt='' />
				</li>
				<li>
					<img src='../ProductsBest/img4.png' alt='' />
				</li>
				<li>
					<img src='../ProductsBest/img5.png' alt='' />
				</li>
				<li>
					<img src='../ProductsBest/img6.png' alt='' />
				</li>
				<li>
					<img src='../ProductsBest/img7.png' alt='' />
				</li>
				<li>
					<img src='../ProductsBest/img8.png' alt='' />
				</li>
				<li>
					<img src='../ProductsBest/img9.png' alt='' />
				</li>
				<li>
					<img src='../ProductsBest/img10.png' alt='' />
				</li>
			</ul>

			<div className={cl.switcherWrapper}>
				<Switcher selectedColor='#ffc85e' />
			</div>
		</article>
	)
}

export default ProductsBest
