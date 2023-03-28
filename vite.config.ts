import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '',
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/vars.scss"; 
				@import "./src/mixins.scss";`,
			},
		},
	},
})
