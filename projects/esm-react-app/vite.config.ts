import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import {defineConfig} from 'vite'
import gfeMicroFE from '@gfe/vite-plugin-micro-fontend'
import path from 'path'
const root = path.join(process.cwd(), 'src')

export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths(), gfeMicroFE({external: ['react', 'react-dom']})],
  css: {
    preprocessorOptions: {less: {javascriptEnabled: true}},
  },
  resolve: {
    alias: [
      {find: /^~/, replacement: ''},
      {find: 'src/', replacement: path.join(root, '/')},
      {find: 'react', replacement: 'https://cdn.skypack.dev/react'},
      {find: 'react-dom', replacement: 'https://cdn.skypack.dev/react-dom'},
    ],
  },
  build: {
    outDir: path.join(process.cwd(), 'dist'),
    emptyOutDir: true,
    minify: false,
  },
  server: {
    port: 3331,
    strictPort: true,
    cors: true,
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  root,
})
