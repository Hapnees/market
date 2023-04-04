import { useLazyGetBrendsQuery } from '@/api/api'
import getFormattedFilterList from '@/formatters/filterList.formatter'
import { IBrend } from '@/types/filters.type.interface'
import { IFilterListEl } from '@/types/product.interface'
import { useState } from 'react'

const useGetBrends = (searchParams: URLSearchParams) => {
	const [weakGetBrends, { isLoading: isLoadingBrends }] =
		useLazyGetBrendsQuery()
	const [brendsList, setBrendsList] = useState<(IBrend & IFilterListEl)[]>([])

	const getBrends = () =>
		weakGetBrends()
			.unwrap()
			.then(data => {
				const resultData = getFormattedFilterList(searchParams, data, 'brend')
				setBrendsList(resultData)
			})

	return { getBrends, brendsList, isLoadingBrends }
}

export default useGetBrends
