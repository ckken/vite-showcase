import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import legacy from '@vitejs/plugin-legacy'
import {defineConfig} from 'vite'
import path from 'path'
// import {mutateConfigPlugin,partialConfigPlugin} from './vite-config-plugin'
const root = path.join(process.cwd(), 'src')

export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    legacy({
      targets: ['IE 11'],
    }),
    // mutateConfigPlugin(),
    // partialConfigPlugin()
  ],
  css: {
    preprocessorOptions: {less: {javascriptEnabled: true}},
  },
  resolve: {
    alias: [
      {find: /^~/, replacement: ''},
      {find: 'src/', replacement: path.join(root, '/')},
      // {find: 'react', replacement: 'https://cdn.skypack.dev/react'},
      // {find: 'react-dom', replacement: 'https://cdn.skypack.dev/react-dom'},
    ],
  },
  build: {
    outDir: path.join(process.cwd(), 'dist'),
    emptyOutDir: true,
  },
  server: {
    port: 3001,
    strictPort: true,
    cors: true,
  },
  esbuild: {
    // jsxInject: `import React from 'react'`,
  },
  root,
  base: '/',
})
