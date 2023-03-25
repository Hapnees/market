import { ICategoryProducts, IProduct } from '@/types/product.interface'
import { baseApi } from './api'

const adminProductsApi = baseApi.injectEndpoints({
	endpoints: build => ({
		// Удаляем товар по id
		deleteProductById: build.mutation<
			unknown,
			{ id: number; categoryProducts?: ICategoryProducts }
		>({
			query: ({ id }) => ({
				url: `products/${id}`,
				method: 'DELETE',
			}),
			// Определяем, рефетч какого запроса нам нужен
			invalidatesTags: (res, _, { categoryProducts }) => {
				return categoryProducts === 'PROMO'
					? ['PRODUCTS-PROMO']
					: categoryProducts === 'ALL'
					? ['PRODUCTS']
					: []
			},
		}),

		addProduct: build.mutation<unknown, IProduct>({
			query: body => ({
				url: 'products',
				method: 'POST',
				body,
			}),
		}),

		updateProduct: build.mutation<unknown, IProduct>({
			query: body => ({
				url: `products/${body.id}`,
				method: 'PATCH',
				body,
			}),
		}),
	}),
})

export const {
	useDeleteProductByIdMutation,
	useAddProductMutation,
	useUpdateProductMutation,
} = adminProductsApi
