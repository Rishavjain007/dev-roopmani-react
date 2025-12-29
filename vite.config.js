import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,        // allows access via IP
    port: 5173,        // preferred port
    strictPort: false // ✅ auto-switch if busy
  }
})