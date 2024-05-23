import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@images': '/src/assets/images',
      '@icons': '/src/assets/icons',
      '@views': '/src/views',
      '@public': '/public',
      '@hooks': '/src/hooks',
      '@router': '/src/router',
    }
  }
})
