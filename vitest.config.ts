import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			//globals: true,
			setupFiles: './src/test/setup.ts',
			environment: 'jsdom',
		},
	})
)
