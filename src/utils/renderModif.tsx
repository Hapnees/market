import { store } from '@/store/store'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

const renderModif = (component: React.ReactElement) =>
	render(
		<HashRouter>
			<Provider store={store}>{component}</Provider>
		</HashRouter>
	)

export default renderModif
