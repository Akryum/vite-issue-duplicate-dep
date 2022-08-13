import { defineConfig } from 'vite'
import plugin from 'vpkg'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    plugin(),
  ],
  optimizeDeps: {
    exclude: [
      '@histoire/vendors',
    ],
  },
})
