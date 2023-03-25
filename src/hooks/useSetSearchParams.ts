import { useCallback } from 'react'

const useSetUrlParams = (
	searchParams: URLSearchParams,
	setSearchParams: (value: URLSearchParams) => void
) => {
	const result = useCallback(
		(paramValue: string, paramName: string) => {
			const paramList = searchParams.get(paramName)
				? searchParams.get(paramName)!.split(',')
				: []

			if (paramList?.includes(paramValue))
				searchParams.set(
					paramName,
					paramList.filter(el => el !== paramValue).join(',')
				)
			else searchParams.set(paramName, [...paramList, paramValue].join(','))

			setSearchParams(searchParams)
		},
		[searchParams]
	)

	return result
}

export default useSetUrlParams
