import cl from './ProductCategoriesList.module.scss'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { useGetTypesQuery } from '@/api/api'
import { IType } from '@/types/types.type.interface'
import Loader from '@/components/Loader/Loader'
import { useNavigate } from 'react-router-dom'

const ProductCategoriesList: FC<
	DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
> = ({ ...props }) => {
	const navigate = useNavigate()
	const { data: typesList, isLoading } = useGetTypesQuery({
		title:
			'(Бытовая химия|Косметика и гигиена|Товары для дома|Товары для детей и мам|Посуда)',
	})

	const onClickListEl = (title: string) => {
		navigate({ pathname: '/catalog', search: `type=${title}` })
	}

	if (isLoading) return <Loader />

	return (
		<ul className={cl.categoryList} {...props}>
			{(typesList as IType[])?.map(el => (
				<li key={el.title} onClick={() => onClickListEl(el.title)}>
					<div className={cl.imgWrapper}>
						<img src={el.img} alt='' />
					</div>
					<p className={cl.categoryTitle}>{el.title}</p>
				</li>
			))}
		</ul>
	)
}

export default ProductCategoriesList
