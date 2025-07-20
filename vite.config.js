import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mi-portafolio/',  // <- esto es obligatorio para repos repositorios que no sean raíz
})
