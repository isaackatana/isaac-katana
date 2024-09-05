import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://isaac-katana-server-822u7ia3a-isaackatanas-projects.vercel.app',
        changeOrigin: true,
        },
      },
  },
})
