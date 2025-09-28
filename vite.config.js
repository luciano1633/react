import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Para GitHub Pages, cambia 'nombre-del-repo' por el nombre real de tu repositorio
  base: '/videosjuegos/',
})
