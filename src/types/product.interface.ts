export interface IProduct {
	id: number
	title: string
	img?: string
	typeSize: string
	size: number
	amount: number
	types: string[]
	stock: boolean
	barcode: number
	producer: string
	brend: string
	description: string
	price: number
	promo: boolean
}

export interface IProductModif extends IProduct {
	quantity: number
}

export interface IGetProductsParams {
	page?: number
	limit?: number
	minPrice?: number
	maxPrice?: number
	types?: string
	brends?: string
	producers?: string
	sort?: string
	order?: string
}

export interface IFilterList {
	title: string
	selected: boolean
}

export type ICategoryProducts = 'PROMO' | 'ALL' | ''

export interface ICheckout {
	name: string
	phone: number
	email: string
	orgName: string
	city: string
	address: string
	comment?: string
}
