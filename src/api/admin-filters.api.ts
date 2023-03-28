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
	}),
})

export const { useAddProducerMutation } = adminFiltersApi
