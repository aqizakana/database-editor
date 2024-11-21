import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "node:path";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  root: "src",
  plugins: [react(), vanillaExtractPlugin()],
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      input: {
        "": resolve(__dirname, 'src/index.html')
      },
      output: {
        entryFileNames: "assets/bundle.js"
      }
    }
  }
})
