import { useLazyGetProducersQuery } from '@/api/api'
import getFormattedFilterList from '@/formatters/filterList.formatter'
import { IProducer } from '@/types/filters.type.interface'
import { IFilterListEl } from '@/types/product.interface'
import { useState } from 'react'

const useGetProducers = (searchParams: URLSearchParams) => {
	const [weakGetProducers, { isLoading: isLoadingProducers }] =
		useLazyGetProducersQuery()
	const [producersList, setProducersList] = useState<
		(IProducer & IFilterListEl)[]
	>([])

	const getProducers = () =>
		weakGetProducers()
			.unwrap()
			.then(data => {
				const resultData = getFormattedFilterList(
					searchParams,
					data,
					'producer'
				)
				setProducersList(resultData)
			})

	return { getProducers, producersList, isLoadingProducers }
}

export default useGetProducers
