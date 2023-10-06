import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
import legacy from '@vitejs/plugin-legacy'


// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [react()],
  esbuild:{
    loader: {
      '.js': '.jsx',
    }
  }


})
