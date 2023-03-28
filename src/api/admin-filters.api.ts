import { baseApi } from './api'

const adminFiltersApi = baseApi.injectEndpoints({
	endpoints: build => ({
		addProducer: build.mutation<unknown, { title: string; id: number }>({
			query: body => ({
				url: 'producers',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['PRODUCERS'],
		}),
		addBrend: build.mutation<unknown, { title: string; id: number }>({
			query: body => ({
				url: 'brends',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['BRENDS'],
		}),
		addTypes: build.mutation<unknown, { id: number; title: string }>({
			query: body => ({
				url: 'types',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['TYPES'],
		}),
		deleteProducer: build.mutation<unknown, number>({
			query: id => ({
				url: `producers/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['PRODUCERS'],
		}),
		deleteBrend: build.mutation<unknown, number>({
			query: id => ({
				url: `brends/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['BRENDS'],
		}),
		deleteType: build.mutation<unknown, number>({
			query: id => ({
				url: `types/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['TYPES'],
		}),
	}),
})

export const {
	useAddProducerMutation,
	useAddBrendMutation,
	useAddTypesMutation,
	useDeleteProducerMutation,
	useDeleteBrendMutation,
	useDeleteTypeMutation,
} = adminFiltersApi
