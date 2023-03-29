import { IBrend, IProducer, IType } from '@/types/filters.type.interface'
import { IFilterListEl } from '@/types/product.interface'

// Сравниваем полученную дату с параметрами из URL
// При совпадении ставим 'selected' в true
const getFormattedFilterList = (
	searchParams: URLSearchParams,
	data: (IProducer | IBrend | IType)[],
	paramTitle: string
) => {
	let result: IFilterListEl[] = data.map(el => ({
		id: el.id,
		title: el.title,
		selected: false,
	}))

	const paramsFromUrl = searchParams.get(paramTitle)?.split(',')
	if (paramsFromUrl) {
		result = result.map(el => ({
			...el,
			selected: paramsFromUrl.includes(el.title),
		}))
	}

	return result
}

export default getFormattedFilterList
