
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      'economy-incorporate-bath-postcards.trycloudflare.com'
    ],
    host: '0.0.0.0',
  },
})
