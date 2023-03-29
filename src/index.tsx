import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { store } from './store/store'
import './index.scss'
import { ToastContainer } from 'react-toastify'
import { toastContainerConfig } from './configs/toast.config'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import 'react-toastify/dist/ReactToastify.css'

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<HashRouter basename={process.env.PUBLIC_URL}>
		<ToastContainer {...toastContainerConfig} />
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</HashRouter>
)
