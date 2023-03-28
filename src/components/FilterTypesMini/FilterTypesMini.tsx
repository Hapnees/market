import arrowIcon from '@/assets/arrow_2.svg'
import { FC, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import cl from './FilterTypesMini.module.scss'

interface IProps {
	typesList: string[]
}

const FilterTypesMini: FC<IProps> = ({ typesList }) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [isShowList, setIsShowList] = useState(true)
	const type = searchParams.get('type')

	const onClickArrow = () => {
		setIsShowList(!isShowList)
	}

	const onClickListEl = (title: string) => {
		searchParams.set('type', title)
		setSearchParams(searchParams)
	}

	return (
		<article className={cl.wrapper}>
			<div className={cl.titleWrapper}>
				<h1 className={cl.title}>ПОДБОР ПО ПАРАМЕТРАМ</h1>
				<img
					src={arrowIcon}
					alt=''
					className={cl.arrow}
					onClick={onClickArrow}
					style={{ transform: isShowList ? '' : 'rotate(180deg)' }}
				/>
			</div>
			{isShowList && (
				<ul className={cl.list}>
					{typesList?.map(el => (
						<li
							key={el}
							className={type === el ? cl.active : ''}
							onClick={() => onClickListEl(el)}
						>
							{el}
						</li>
					))}
				</ul>
			)}
		</article>
	)
}

export default FilterTypesMini
