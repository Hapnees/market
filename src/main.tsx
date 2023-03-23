import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { store } from './store/store'
import './index.scss'
import { ToastContainer } from 'react-toastify'
import { toastContainerConfig } from './configs/toast.config'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<ToastContainer {...toastContainerConfig} />
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)
