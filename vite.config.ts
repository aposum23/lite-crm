import { defineConfig } from 'vite';
import { fileURLToPath, URL } from "url";
import vue from '@vitejs/plugin-vue';
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      mkcert()
  ],
  server: {
    hmr: {
      overlay: false
    },
    host: '0.0.0.0',
    port: 8080,
    https: true
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@ui', replacement: fileURLToPath(new URL('./src/components/UI', import.meta.url)) },
    ]
  }
})
