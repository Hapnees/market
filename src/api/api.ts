import { IGetProductsParams, IProduct } from '@/types/product.interface'
import { IBrend, IProducer, IType } from '@/types/filters.type.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
	reducerPath: 'baseApi',
	tagTypes: ['PRODUCTS', 'PRODUCTS-PROMO', 'PRODUCERS', 'BRENDS', 'TYPES'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://market-backend-hapnees.onrender.com/',
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
					_page: params.page || 1,
					_limit: params.limit,
					_sort: params.sort,
					_order: params.order,
					types_like: params.types,
					producer_like: params.producers,
					brend_like: params.brends,
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
			transformResponse: async (response: IProduct[]) => {
				const data = await response
				return data[0]
			},
		}),

		// Получаем список производителей
		getProducers: build.query<IProducer[], void>({
			query: () => ({
				url: 'producers',
			}),
			providesTags: ['PRODUCERS'],
		}),

		// Получаем список брендов
		getBrends: build.query<IBrend[], void>({
			query: () => ({
				url: 'brends',
			}),
			providesTags: ['BRENDS'],
		}),

		// Получаем список типов ухода
		getTypes: build.query<IType[], void | string>({
			query: title => ({
				url: 'types',
				params: {
					title_like: title,
				},
			}),
			providesTags: ['TYPES'],
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
