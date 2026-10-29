import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        bobcat: resolve(import.meta.dirname, 'projects/bobcat-pricing-intelligence/index.html'),
        meeting: resolve(import.meta.dirname, 'projects/meeting-intelligence/index.html'),
        rag: resolve(import.meta.dirname, 'projects/rag-knowledge-base/index.html'),
        ecommerce: resolve(import.meta.dirname, 'projects/ecommerce-platform/index.html')
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/gsap')) return 'gsap'
          if (id.includes('node_modules/motion') || id.includes('node_modules/framer-motion')) return 'motion'
          if (id.includes('node_modules/lucide-react')) return 'icons'
          if (id.includes('node_modules/react')) return 'react'
        }
      }
    }
  }
})

