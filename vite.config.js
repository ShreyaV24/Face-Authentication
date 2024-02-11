import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Specify custom entry point if different from default
    rollupOptions: {
      input: '/src/main.jsx', // Update the path accordingly
    },
  },
})
