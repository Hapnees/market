export interface IProduct {
	id: number
	title: string
	img: string
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

export interface IGetProductsArgs {
	page?: number
	limit?: number
	minPrice?: number
	maxPrice?: number
	types?: string
	brends?: string
	producers?: string
}
