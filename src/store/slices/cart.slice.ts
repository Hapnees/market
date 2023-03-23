import { IProduct } from '@/types/product.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IProductModif extends IProduct {
	quantity: number
}

interface IState {
	products: IProductModif[]
}

const initialState: IState = {
	products: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<IProductModif>) => {
			const alreadyAddedProduct = state.products.find(
				product => product.id === action.payload.id
			)
			if (alreadyAddedProduct) {
				alreadyAddedProduct.quantity += action.payload.quantity
			} else {
				state.products.push(action.payload)
			}
		},
		removeProduct: (state, action: PayloadAction<number>) => {
			state.products = state.products.filter(
				product => product.id !== action.payload
			)
		},
	},
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer
