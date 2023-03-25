import { IGetProductsParams, IProduct } from '@/types/product.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
	reducerPath: 'baseApi',
	tagTypes: ['PRODUCTS', 'PRODUCTS-PROMO'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001',
	}),
	endpoints: build => ({
		// Получаем список всех товаров
		getProducts: build.query<
			{ products: IProduct[]; totalCount: number },
			IGetProductsParams
		>({
			query: params => ({
				url: 'products',
				params: {
					_page: params.page,
					_limit: params.limit,
					_sort: params.sort,
					_order: params.order,
					types_like: params.types,
					brends_like: params.brends,
					price_gte: params.minPrice,
					price_lte: params.maxPrice,
				},
			}),
			transformResponse: async (response, meta) => {
				const tmpTotalCount = meta?.response?.headers.get('x-total-count')
				const totalCount = tmpTotalCount ? +tmpTotalCount : 0
				const products = (await response) as IProduct[]
				return { products, totalCount }
			},
			providesTags: ['PRODUCTS'],
		}),

		// Получаем список акционных товаров
		getProductsPromo: build.query<IProduct[], void>({
			query: () => ({
				url: 'products',
				params: {
					promo: true,
				},
			}),
			providesTags: ['PRODUCTS-PROMO'],
		}),

		// Получаем товар по id
		getProductById: build.query<IProduct, number>({
			query: id => ({
				url: 'products',
				params: { id },
			}),
			transformResponse: async response => {
				const data = (await response) as IProduct[]
				return data[0]
			},
		}),

		// Получаем список производителей
		getProducers: build.query<string[], void>({
			query: () => ({
				url: 'producers',
			}),
		}),

		// Получаем список брендов
		getBrends: build.query<string[], void>({
			query: () => ({
				url: 'brends',
			}),
		}),

		// Получаем список типов ухода
		getTypes: build.query<string[], void>({
			query: () => ({
				url: 'types',
			}),
		}),
	}),
})

export const {
	useLazyGetProductsQuery,
	useGetProductsPromoQuery,
	useLazyGetProductByIdQuery,
	useLazyGetProducersQuery,
	useGetProducersQuery,
	useLazyGetBrendsQuery,
	useGetBrendsQuery,
	useLazyGetTypesQuery,
	useGetTypesQuery,
} = baseApi
