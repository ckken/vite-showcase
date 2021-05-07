import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import {defineConfig} from 'vite'
import path from 'path'
const root = path.join(process.cwd(), 'src')
const dist = path.join(process.cwd(), 'dist')
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  resolve: {
    alias: [
      {find: /^~/, replacement: ''},
      {find: 'src/', replacement: path.join(root, '/')},
      {find: '@cdn', replacement: 'https://cdn.skypack.dev'},
      {find: 'react', replacement: 'https://cdn.skypack.dev/react'},
      {find: 'react-dom', replacement: 'https://cdn.skypack.dev/react-dom'},
    ],
  },
  build: {
    outDir: dist,
    emptyOutDir: true,
    minify: false,
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  server: {
    port: 3000,
    strictPort: true,
    cors: true,
  },
  root,
})
