import { useLazyGetTypesQuery } from '@/api/api'
import getFormattedFilterList from '@/formatters/filterList.formatter'
import { IType } from '@/types/filters.type.interface'
import { IFilterListEl } from '@/types/product.interface'
import { useState } from 'react'

const useGetTypes = (searchParams: URLSearchParams) => {
	const [weakGetProducers, { isLoading: isLoadingTypes }] =
		useLazyGetTypesQuery()
	const [typesList, setTypesList] = useState<(IType & IFilterListEl)[]>([])

	const getTypes = () =>
		weakGetProducers()
			.unwrap()
			.then(data => {
				const resultData = getFormattedFilterList(searchParams, data, 'type')
				setTypesList(resultData)
			})

	return { getTypes, typesList, isLoadingTypes }
}

export default useGetTypes
