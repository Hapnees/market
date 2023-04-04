import { useGetTypesQuery } from '@/api/api'
import Loader from '@/components/Loader/Loader'
import { IType } from '@/types/filters.type.interface'
import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import cl from './ProductCategoriesList.module.scss'

const ProductCategoriesList: FC<
	DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
> = ({ ...props }) => {
	const navigate = useNavigate()
	const {
		data: typesList,
		isLoading,
		isError,
	} = useGetTypesQuery(
		'(Бытовая химия|Косметика и гигиена|Товары для дома|Товары для детей и мам|Посуда)'
	)

	const onClickListEl = (title: string) => {
		navigate({ pathname: '/catalog', search: `type=${title}` })
	}

	useEffect(() => {
		if (isError) toast.error('Ошибка при получении категорий')
	}, [isError])

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
