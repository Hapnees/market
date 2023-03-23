import { FC } from 'react'
import cl from './Pagination.module.scss'

interface IProps {
	currentPage: number
	paginate: (numPage: number) => void
	totalPages: number
}

const Pagination: FC<IProps> = ({ currentPage, paginate, totalPages }) => {
	const pageNumbers = new Array(totalPages).fill(0).map((_, idx) => idx + 1)

	const calcPages = () => {
		if (currentPage === 1) return 0

		return currentPage - 2
	}

	return (
		<div className={cl.wrapper}>
			<ul className={cl.pagesList}>
				{pageNumbers.slice(calcPages(), currentPage + 2).map(page => (
					<li
						key={page}
						onClick={() => paginate(page)}
						className={currentPage === page ? cl.active : ''}
					>
						{page}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Pagination
