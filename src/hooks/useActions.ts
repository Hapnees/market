import { adminActions } from '@/store/slices/admin.slice'
import { cartActions } from '@/store/slices/cart.slice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const allActions = {
	...cartActions,
	...adminActions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(allActions, dispatch)
}
