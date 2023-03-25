import { baseApi } from './api'

const adminFiltersApi = baseApi.injectEndpoints({
	endpoints: build => ({
		addProducer: build.mutation<unknown, string>({
			query: body => ({
				url: 'producers',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const { useAddProducerMutation } = adminFiltersApi
