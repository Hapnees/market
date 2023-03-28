import { IFilterListEl } from '@/types/product.interface'

// Сравниваем полученную дату с параметрами из URL
// При совпадении ставим 'selected' в true
const getFormattedFilterList = (
	searchParams: URLSearchParams,
	data: string[],
	paramTitle: string
) => {
	let result: IFilterListEl[] = data.map(el => ({
		title: el,
		selected: false,
	}))

	const producersFromUrl = searchParams.get(paramTitle)?.split(',')
	if (producersFromUrl) {
		result = result.map(el => ({
			...el,
			selected: producersFromUrl.includes(el.title),
		}))
	}

	return result
}

export default getFormattedFilterList
