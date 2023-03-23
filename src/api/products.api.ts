import { IGetProductsArgs, IProduct } from '@/types/product.interface'
import axios from 'axios'

const URL = 'http://localhost:3001'
const URL_PRODUCTS = `${URL}/products`
const URL_PRODUCERS = `${URL}/producers`
const URL_BRENDS = `${URL}/brends`
const URL_TYPES = `${URL}/types`

export const getProducts = async (params: IGetProductsArgs | void) => {
	const res = await axios.get<IProduct[]>(URL_PRODUCTS, {
		params: {
			_page: params?.page,
			_limit: params?.limit,
			brend: params?.brends,
			producer: params?.producers,
			type: params?.types,
			price_gte: params?.minPrice,
			price_lte: params?.maxPrice,
		},
	})
	return res
}

export const getProductsPromo = async () => {
	const res = await axios.get<IProduct[]>(URL_PRODUCTS, {
		params: { promo: true },
	})
	return res.data
}

export const getProductById = async (id: number) => {
	const res = await axios.get<IProduct[]>(URL_PRODUCTS, { params: { id } })
	return res.data[0]
}

export const getProducers = async () => {
	const res = await axios.get<string[]>(URL_PRODUCERS)
	return res.data
}

export const getBrends = async () => {
	const res = await axios.get<string[]>(URL_BRENDS)
	return res.data
}

export const getTypes = async () => {
	const res = await axios.get<string[]>(URL_TYPES)
	return res.data
}
