import Switcher from '@/components/UI/Switcher/Switcher'
import cl from './ProductsBest.module.scss'
import img1 from '@/assets/ProductsBest/img1.png'
import img2 from '@/assets/ProductsBest/img2.png'
import img3 from '@/assets/ProductsBest/img3.png'
import img4 from '@/assets/ProductsBest/img4.png'
import img5 from '@/assets/ProductsBest/img5.png'
import img6 from '@/assets/ProductsBest/img6.png'
import img7 from '@/assets/ProductsBest/img7.png'
import img8 from '@/assets/ProductsBest/img8.png'
import img9 from '@/assets/ProductsBest/img9.png'
import img10 from '@/assets/ProductsBest/img10.png'

const ProductsBest = () => {
	const imgList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
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
