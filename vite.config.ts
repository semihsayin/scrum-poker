import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@components' : path.resolve(__dirname, './src/components'),
      '@modules':path.resolve(__dirname, './src/modules'),
      '@pages':path.resolve(__dirname, './src/pages'),
      '@redux':path.resolve(__dirname, './src/redux')
    }
  },
  plugins: [react()]
})
