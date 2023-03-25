import { IProductModif } from '@/types/product.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
		addProductToCart: (state, action: PayloadAction<IProductModif>) => {
			const alreadyAddedProduct = state.products.find(
				product => product.id === action.payload.id
			)
			// Если такой продукт уже в корзине, меняем его количество
			if (alreadyAddedProduct) {
				alreadyAddedProduct.quantity += action.payload.quantity
			} else {
				state.products.push(action.payload)
			}
		},
		removeProductFromCart: (state, action: PayloadAction<number>) => {
			state.products = state.products.filter(
				product => product.id !== action.payload
			)
		},
		clearCart: state => {
			state.products = []
		},
		changeQuantity: (
			state,
			action: PayloadAction<{ id: number; quantity: number }>
		) => {
			const currentProduct = state.products.find(
				el => el.id === action.payload.id
			)
			if (!currentProduct) return

			const result = currentProduct.quantity + action.payload.quantity
			if (result <= 0) return

			currentProduct.quantity += action.payload.quantity
		},
	},
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer
