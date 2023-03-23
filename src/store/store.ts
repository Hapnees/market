import { configureStore } from '@reduxjs/toolkit'
import { cartReducer, cartSlice } from './slices/cart.slice'

const makeStore = () =>
	configureStore({
		devTools: true,
		reducer: {
			[cartSlice.name]: cartReducer,
		},
	})

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
