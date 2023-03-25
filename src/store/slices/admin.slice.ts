import { createSlice } from '@reduxjs/toolkit'

interface IState {
	isAdminMode: boolean
}

const initialState: IState = { isAdminMode: false }

export const adminSlice = createSlice({
	name: 'adminMode',
	initialState,
	reducers: {
		toggleAdminMode: state => {
			state.isAdminMode = !state.isAdminMode
		},
	},
})

export const adminReducer = adminSlice.reducer
export const adminActions = adminSlice.actions
