import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://proxy-service-chi.vercel.app',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
