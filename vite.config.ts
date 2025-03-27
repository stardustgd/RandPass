import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/manifest.json',
          dest: '',
        },
      ],
    }),
  ],
})
