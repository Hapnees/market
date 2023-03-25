import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartReducer, cartSlice } from './slices/cart.slice'
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import { adminReducer, adminSlice } from './slices/admin.slice'
import { baseApi } from '@/api/api'

const rootReducer = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
	[cartSlice.name]: cartReducer,
	[adminSlice.name]: adminReducer,
})

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	whitelist: [cartSlice.name, adminSlice.name],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat([baseApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
